import pandas as pd
import itertools
import sys
import os
import spectra
from io import StringIO
import random
import main_project.graphy.clip_tools as ct
from main_project.graphy.functions import *

from django.conf import settings
from django.contrib.staticfiles.storage import staticfiles_storage
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import json
from django.core.mail import EmailMultiAlternatives






path_to_static = settings.PATH_TO_STATIC + '/graphy_static/'

def home(request):

	return render(request, 'main_project/home.html')

def team(request):
	return render(request, 'main_project/team.html')

def report(request):
	if request.method == 'POST':
		try:
			subject, from_email, to = 'Thagomizer Report', settings.SEND_EMAIL_TO, settings.SEND_EMAIL_FROM
			text_content = 'Report about Thagomizer.' 
			html_content = "<h3>You got a new report from:" + request.POST['name'] + \
            		"</h3></br><h5	>Email: "+request.POST['email']+ \
			                    		"</h5></br><p>Message "+request.POST['message']
			to = str(to)
			msg = EmailMultiAlternatives(subject, text_content, from_email, [to,])
			msg.attach_alternative(html_content, "text/html")
			msg.send()
		except Exception as e:
			print('Error ', e)
			pass

	return render(request, 'main_project/report.html')

def choose_bam_file(request):
	return render(request, 'main_project/choose_bam_file.html')	


def graphing_dashboard(request):

	genome = request.GET.get('genome', False)
	bam_files = request.GET.getlist('files[]')

	if genome is False or len(bam_files) < 1:
		return redirect('main_project:choose_bam_file')

	try:

		data_file_mm10 = []
		data_file_hg19 = []

		data_file_mm10_loc = settings.PATH_TO_STATIC + '/graphy_static/Data/mm10'
		data_file_hg19_loc = settings.PATH_TO_STATIC + '/graphy_static/Data/hg19'

		for i in os.listdir(data_file_mm10_loc):
			file_type = i[-3]+i[-2]+i[-1]
			if file_type=='bam':
				data_file_mm10.append(i)

		for i in os.listdir(data_file_hg19_loc):
			file_type = i[-3]+i[-2]+i[-1]
			if file_type=='bam':
				data_file_hg19.append(i)



	except:
		data_file_mm10 = ''
		data_file_hg19 = ''



	file_targetscan = path_to_static + "Genome_Data/Targetscan7_fixed.bed"

	def get_target_scan(target_scan_file):
		beddb = pd.read_table(target_scan_file,names=["chrom", "start", "stop", "miRNA"], usecols=[0,1,2,3])
		families = beddb.miRNA.unique()
		f = families.tolist()
		return sorted(f[1:])

	options_list = get_target_scan(file_targetscan)

	# print(options_list)
	
	context = {
		'genome': genome,
		'bam_files': bam_files,
		'options_list': options_list,
		'data_file_mm10': data_file_mm10,
		'data_file_hg19': data_file_hg19
	}
	return render(request, 'main_project/graphing_dashboard.html', context)

def graphy(request):

	path_to_static = settings.PATH_TO_STATIC + '/graphy_static/'


	file_utr3 = path_to_static + "Genome_Data/refseq_3utr.bed"
	file_refseq = path_to_static + "Genome_Data/refseq_names.txt"
	file_targetscan = path_to_static + "Genome_Data/Targetscan7_fixed.bed"
	file_refgenebed = path_to_static + "Genome_Data/refGene.bed"
	default_track_folder = path_to_static + "Data/"
	# Placeholder defaults
	placeholder_file_bedfile = path_to_static + "Genome_Data/RK53/mmu-miR-29a-3p.bed"

	def run(figwidth, color_values, track_names, track_type, bedtrack, bedfile, bedtype, name,annotate_bed, geneid, chrom,start, stop, refseqid, strand, bigwignames, fontsize, shade_by_bed):
# 	############# Constant Values ############# Do not edit

	    # staticaxes = True
	    # LeftToRight = False
	    # axis_off = False
	    # refseqtrack = True

		staticaxes = True 										
		if request.GET['staticaxes'] == "true":
			staticaxes = True
		elif request.GET['staticaxes'] == "false":
			staticaxes = False


		LeftToRight = False 										
		if request.GET['LeftToRight'] == "true":
			LeftToRight = True
		elif request.GET['LeftToRight'] == "false":
			LeftToRight = False


		axis_off = False 										
		if request.GET['axis_off'] == "true":
			axis_off = True
		elif request.GET['axis_off'] == "false":
			axis_off = False


		refseqtrack = True 										
		if request.GET['refseqtrack'] == "true":
			refseqtrack = True
		elif request.GET['refseqtrack'] == "false":
			refseqtrack = False



		figheight = float(figwidth/4.0)
		shade = itertools.cycle(color_values)
		colors = itertools.cycle([spectra.html(i).darken(20).hexcode for i in color_values])
		limits = [start, stop]
		staggerbed = True
		output_folder = path_to_static + "../Output/"
		outputformat = "png"
		outputsuffix = "" + str(random.randint(1,1019080210))
		dpi = float(300.0)
		legend = True
		static_url = staticfiles_storage.url('graphy_static/')
		# track_files = ['Data' + f for f in track_names]
		track_files = [static_url + f for f in track_names]
		bigwigfiles = ['Data' + f for f in bigwignames]
		wig_df_list = get_wig_data(bigwigfiles,bigwignames,chrom,start,stop)
		depths = get_depth_data(track_files,track_names,chrom,start,stop,strand,track_type)

# 	    ############# Constant Values #############

		# print('name is', name)

		plot_value = plot(figwidth,figheight,refseqtrack,LeftToRight,strand,depths,
		   					colors,shade,limits,bedtrack,start,stop,staggerbed,bigwignames,
		    				wig_df_list,shade_by_bed,output_folder,geneid,outputsuffix,outputformat,dpi,track_names,axis_off,
		   					legend,staticaxes,bedfile,bedtype,name,chrom,refseqid,annotate_bed,fontsize)






		"""
		to convert this

			values = {
				'GCliPP_everything.bam': {
						142903034: 0, 
						142903035: 0, 
						142906866: 0
					},
				 'miR29_WT_Th17.bam': {
				 		142903034: 0,
				 		142903035: 0,
				 		142906866: 0
				 	}
			}

		into this
			[
				
				{
				"year": "142903035",
				"GCliPP_everything": 1,
				"miR29_WT_Th17": 0
				}, {
				"year": "142903035",
				"GCliPP_everything": 1,
				"miR29_WT_Th17": 0
				}


			]
		"""

		real_value = []
		bam_files = []
		for value in plot_value:
			bam_files.append(value)


		for bam_file in bam_files:
			this_bam_file_index = bam_files.index(bam_file)
			if this_bam_file_index==0:
				values_of_this_bam = plot_value[bam_file]
				
				for this_val in values_of_this_bam:
					first_dict_val = this_val
					break;

				for val in values_of_this_bam:
					# print('val', val)
					
					real_value.append({
							# 'x_axis': values_of_this_bam[val],
							bam_file: values_of_this_bam[val],
							'year': str((val+100)-first_dict_val)	#our charts doesn't support less than 3 digit or more than 6 digit
							# 'year': str(val)	#our charts doesn't support less than 3 digit or more than 6 digit
						})

				
			else:
				values_of_this_bam = plot_value[bam_file]
				
				for ind, val2 in enumerate(values_of_this_bam):
					this_index = ind
					real_value[this_index][bam_file] = values_of_this_bam[val2]
			

		# print(real_value)
		csv_url = '/static/CSV_Output/'+geneid+outputsuffix+'.csv'
		pdf_url = '/static/Output/'+geneid+outputsuffix+'.pdf'
		outputsuffix = 'static/Output/'+geneid+outputsuffix+'.png'

		return {
			'bam_files': bam_files,
			'image_url': outputsuffix,
			'pdf_url': pdf_url,
			'csv_url': csv_url,
			'graph_data': real_value,
			'label_data': plot_value.get('label_data', {}),
			'first_dict_val': first_dict_val 	#for converting date to number in labeling need to use in js
		}
			

	# print(request.GET)
	try:
		# print(request.GET)
		# print('ata')
		figwidth = int(request.GET['figwidth'])						#working
		color_values = request.GET.getlist('color_values[]')  	#working
		track_names = request.GET.getlist('track_names[]')		#working
		track_type = request.GET.getlist('track_type[]')		#working

		bedtrack = False 										#working
		if request.GET['bedtrack'] == "true":
			bedtrack = True
		elif request.GET['bedtrack'] == "false":
			bedtrack = False

		
		bedfile = path_to_static+request.GET['bedfile']			#working
		if bedfile=='':
			bedfile = None

		bedtype = request.GET['bedtype'] 						#working
		if bedtype=='':
			bedtype = None

		name = request.GET['name']								#working
		if name=='':
			name = None

		annotate_bed = True 									#working
		if request.GET['annotate_bed'] == "true":
			annotate_bed = True
		elif request.GET['annotate_bed'] == "false":
			annotate_bed = False


		geneid = request.GET['geneid']
		chrom = request.GET['chrom']
		start = int(request.GET['start'])
		stop = int(request.GET['stop'])
		refseqid = request.GET['refseqid']
		strand = request.GET['strand']
		bigwignames = request.GET.getlist('bigwignames[]')
		fontsize = int(request.GET['fontsize'])
		shade_by_bed = False 									#working
		if request.GET['shade_by_bed'] == "true":
			shade_by_bed = True
		elif request.GET['shade_by_bed'] == "false":
			shade_by_bed = False



		# figwidth = 35.0				#working
		# color_values = ['#ea3a3a']		#working
		# track_names = ["GCliPP_cd8_merged.bam"]		#working
		# track_type = ["s"]		#working

		# bedtrack = False 			#working
		# bedfile = None 			#working
		# bedtype = None			#working
		# name = None				#working
		# annotate_bed = True 	    #working
		# geneid = 'Actb'
		# chrom = 'chr5'
		# start = 142903034			#working
		# stop = 142906867			#working
		# refseqid = 'NM_007393'
		# strand = '-'
		# bigwignames = []
		# fontsize = 20.0			#working
		# shade_by_bed = False

		image_name_and_other_data = run(figwidth, color_values, track_names, track_type, \
					 bedtrack, bedfile, bedtype, name,annotate_bed, \
		 			 geneid, chrom,start, stop, refseqid, strand, \
		 		 	 bigwignames, fontsize, shade_by_bed)
		# print(figwidth, color_values, track_names, track_type, \
		# 	 bedtrack, bedfile, bedtype, name,annotate_bed, \
		#  	 geneid, chrom,start, stop, refseqid, strand, \
		#  	 bigwignames, fontsize, shade_by_bed)
		return JsonResponse(image_name_and_other_data, safe=False)
	except Exception as e:
		exc_type, exc_obj, exc_tb = sys.exc_info()
		fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
		# print('')
		print(e, exc_type, fname, exc_tb.tb_lineno)
		# print('')
		# print(e)
		return JsonResponse('error', safe=False)


	# figwidth = 35.0
	# color_values = ['#ea3a3a']
	# track_names = ["GCliPP_cd8_merged.bam"]
	# track_type = ["s"]
	# bedtrack = False
	# bedfile = None
	# bedtype = None
	# name = None
	# annotate_bed = True
	# geneid = 'Actb'
	# chrom = 'chr5'
	# start = 142903034
	# stop = 142906867
	# refseqid = 'NM_007393'
	# strand = '-'
	# bigwignames = []
	# fontsize = 20.0
	# shade_by_bed = False

	# image_name_and_other_data = run(figwidth, color_values, track_names, track_type,
	# 	 bedtrack, bedfile, bedtype, name,annotate_bed,
	# 	 geneid, chrom,start, stop, refseqid, strand, 
	# 	 bigwignames, fontsize, shade_by_bed)


	# context = {
	# 	'image_name_and_other_data':image_name_and_other_data
	# }
	# print(context)
	# return render(request, 'index.html', context)









