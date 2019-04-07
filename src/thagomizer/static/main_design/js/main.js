// $('body').hide()
// console.log('hide')
//             $.ajax({
//               url:'/static/graphy_static/auto_fill/hg19/TSHuman_7_hg19_3UTRs.json',
//               async: false,
//               success:function(data2){
//                   console.log('read')
//                   // $.each(data2, function(index2, val2) {
//                     // console.log(index2, val2)
//                   //     if (val2['transcript id'] == transcript_id) {
                          
//                   //         var chrom_value = data2[index2]['chrom']+':'+data2[index2]['start'].toLocaleString()+'-'+data2[index2]['stop'].toLocaleString()
//                   //         last_strand_value  = data2[index2]['strand']
//                   //         $('.location').val(chrom_value)
//                   //         query_found = true
//                   //         return false
//                   //     }

//                   // });
//                   // if (!query_found){
//                   //   $('.auto_complete').html(no_matching_query_error_msg)
//                   // }else{
//                   //   $('.auto_complete').html(matching_query_success_msg)
$('.search-box').data("isValid", "1")
//                   // }
//               },
//               error:function(data2){
//                 console.log('error')
//               }

//             })

        


//         $.ajax({
//               url:'/static/graphy_static/auto_fill/hg19/TSHuman_7_hg19_3UTRs.json',
//               async: false,
//               success:function(data2){
//                   console.log('read2')
//                   // $.each(data2, function(index2, val2) {
//                     // console.log(index2, val2)
//                   //     if (val2['transcript id'] == transcript_id) {
                          
//                   //         var chrom_value = data2[index2]['chrom']+':'+data2[index2]['start'].toLocaleString()+'-'+data2[index2]['stop'].toLocaleString()
//                   //         last_strand_value  = data2[index2]['strand']
//                   //         $('.location').val(chrom_value)
//                   //         query_found = true
//                   //         return false
//                   //     }

//                   // });
//                   // if (!query_found){
//                   //   $('.auto_complete').html(no_matching_query_error_msg)
//                   // }else{
//                   //   $('.auto_complete').html(matching_query_success_msg)
$('.search-box').data("isValid", "1")
//                   // }
//               },
//               error:function(data2){
//                 console.log('error')
//               }

//             })


//         $.ajax({
//             url:'/static/graphy_static/auto_fill/hg19/refGene.json',
//             async: false,
//             success:function(data){
//                 console.log('read2')
//                 $('body').show()
//                 console.log('show')
//                 // $.each(data, function(index, val) {
//                   // console.log(index, val)
//                 //     if (typed_value_chrom == val.chrom && typed_value_start >= val.txStart && typed_value_stop <= val.txEnd) {
//                 //         $('.refseqID').val(data[index]['#name'])
//                 //         $('.geneid_search').val(data[index]['gene id'])
//                 //         last_strand_value  = data[index]['strand']
//                 //         query_found = true
//                 //         return false
//                 //     }
//                 // });
//                 // if (!query_found){
//                 //   $('.auto_complete').html(no_matching_query_error_msg)
//                 // }else{
//                 //   $('.auto_complete').html(matching_query_success_msg)
$('.search-box').data("isValid", "1")
//                 // }
//             },
//             error:function(data){
//               console.log('error')
//               $('.auto_complete').html('')
//               // alert('long file error here1')
//             }

//           })

$(document).ready(function(){

    value_object = {}
    var last_strand_value = '-'

   //mobile menu toggle button
    $("#mobile-menu-button").click(function(){
     
       $("#mobile-menu-list").fadeToggle( "slow", "linear" );

    });

   //////////////////////any where click menu hide
    var $menu = $('#mobile-menu-list');
    var $mainButton = $("i.fa.fa-bars.side-menu-bar");

    $(document).mouseup(function (e) {
       if (!$menu.is(e.target) // if the target of the click isn't the container...
       && !$mainButton.is(e.target)) // ... nor a descendant of the container
       {
         $menu.fadeOut(600);
      }
     });
     
    ///////////////click here
    $(".example-image").hover(function(){
        $(".full_img_text").css('display','block');
        /*$("div#big-boxes").css('padding-bottom','120px');*/
        }, function(){
        $(".full_img_text").css('display','none');
         /*$("div#big-boxes").css('padding-bottom','40px');*/
    });

    $(".full_img_text").hover(function(){
        $(this).css('display','block');
        /*$("div#big-boxes").css('padding-bottom','120px');*/
        }, function(){
        $(this).css('display','none');
        /*$("div#big-boxes").css('padding-bottom','40px');*/
    });



   ///////////////////////////////
   $(".example-image").click(function(){
      var getSrc = $(this).attr("src")
      $("#image-popup").css("display","block")
      $(".popup-image-class").attr('src',getSrc);

   })
    
   $("#show_img").click(function(){
      var getSrc = $(".example-image").attr("src")
      $("#image-popup").css("display","block")
      $(".popup-image-class").attr('src',getSrc);
   }) 


   $(".popup-close-here").click(function(){
      $("#image-popup").css("display","none")
   })










   /* $(".full_img_text").hover(function(){
        $(this).css('display','none');
        });*/

    //Wow effect
     new WOW().init();
        

    var n = $( "#gclipp-seach-box" ).length;







    // add new GCLIPP fild

    var selectionArray = ['mm10/GCliPP_cd8_merged.bam'];
    var checkBoxArray = ['s'];
    var colorArray = ['#ea3a3a'];
    var index = 1;
    var Graph = 2;
        if(Graph <= 1){
      Graph = 2
    }
 

    function selection(){
          $('.selection').change(function(){
            var index = $(this).data('index');
            let value = $(this).val();
            
            selectionArray[index] = value;
            checkBoxArray[index] = 's'
            colorArray[index] = '#ea3a3a';
          })
         }

    function checkBoxTick(){
          $('.checkbox').change(function(){
            var index = $(this).data('index');
            value = $('.checkbox').val();
            let checked = $(this).is(":checked");
            if(checked){
              value = 'as';
            }
            checkBoxArray[index] = value;
          })
         }

    function colorcheck(){
           $('.jscolor').change(function(){
              var index = $(this).data('index');
              let value = $(this).val();
              colorArray[index] = value;
           })
         }


    $('#add-button').click(function() {

      var new_one_html = $('#gclipp-seach-box').html()
      var new_one_html = '<div class="col-sm-12" id="gclipp-seach-box">'+
                          new_one_html+
                          'div'
      
      $('#add-here:last').append(new_one_html);
        // $('#add-here:last').append(
        //       '<div class="col-sm-12" id="gclipp-seach-box">'+
        //         '<div class="col-xs-9" id="gclipp-option-box">'+
        //            '<select class="add-option selection" id="gclipp-option-bar" data-index='+ index +'>'+
        //              '<option value="GCliPP_cd8_merged.bam">GCliPP_cd8_merged.bam</option>'+
        //              '<option value="GCliPP_everything.bam">GCliPP_everything.bam</option>'+
        //           '</select>'+
        //          '</div>'+
        //          '<div class="col-xs-3" id="gclipp-side-box">'+
        //            '<p id="gclipp-seach-text">Antisense</p>'+
        //            '<input type="checkbox" data-index='+ index +' name="vehicle" class="checkbox">'+
        //           '</div>'+
        //       '</div>');

      var random_colors = ["#3a5dea", "#3aea3e", "#3aeae7", "#c03aea", "#ea7a3a", "#ea3a6a"]
      var random_color = random_colors[Math.floor(Math.random()*random_colors.length)];






      $("#add-here-two").append(
        '<div class="col-sm-12" id="graph-row-box" >'+
           '<div class="col-xs-9" id="graph-table-text">'+
               '<p>Graph'+Graph+'</p>'+
            '</div>'+
            '<div class="col-xs-3">'+
              '<input type="color" data-index="0" class="jscolor" value="'+ random_colors[Math.floor(Math.random()*random_colors.length)] +'"/>'+
              // '<input type="color" data-index="0" class="jscolor" value="#ea3a3a"/>'+
            '</div>'+
        '</div>'
        )


        


      selectionArray.push('GCliPP_cd8_merged.bam')
      checkBoxArray.push('s')
      colorArray.push('#ea3a3a')
      selection();
      checkBoxTick();
      colorcheck()
      index++;
      Graph++;
    });


    // Delete last GCLIPP fild
    $('#delete-button').click(function() {
       $('#gclipp-seach-box:first-child').remove();
       $('#graph-row-box:last-child').remove();
       selectionArray.splice(-1,1)
       checkBoxArray.splice(-1,1)
       colorArray.splice(-1,1)
       index--;
       Graph--;
    });

   






    var counter1 = parseFloat($("#axis-input-one").val());
    counter2 = parseFloat($("#axis-input-two").val());
    ////ONE Click the number add sub button
   $(".axis-add-button-one").click(function(){
      counter1++;
      $("#axis-input-one").val(counter1);
   })

   ////ONE Click the number add sub button
   $(".axis-sub-button-one").click(function(){
      counter1--;
      $("#axis-input-one").val(counter1);
   })

   ////TWO Click the number add sub button
   $(".axis-add-button-two").click(function(){
      counter2++;
      $("#axis-input-two").val(counter2);
   })

   ////TWO Click the number add sub button
   $(".axis-sub-button-two").click(function(){
      counter2--;
      $("#axis-input-two").val(counter2);
   })

  ////// get the (value number 8888888,9999999,100000000,111111111111,12222222222)
    var bedfile = null , bedtrack = false , bedtype = null , name = null , shade_by_bed = false
    // var bedfile = "Genome_Data/FASTUTR/peaks.bed" , bedtrack = true , bedtype = "bed" , name = "Peaks" , shade_by_bed = true


    $("#sequence-analysis-check-box1").click(function() {
        $(this).attr("checked", true);  //check the clicked one
        $("#sequence-analysis-check-box2").prop("checked", false); //uncheck all checkboxes
        
        bedfile = "Genome_Data/FASTUTR/peaks.bed"
        bedtrack = true
        bedtype = "bed"
        name = "Peaks"
        shade_by_bed = true
        // alert(name)
   });  
         

    $("#sequence-analysis-check-box2").click(function() {

       $(this).attr("checked", true);  //check the clicked one
       $("#sequence-analysis-check-box1").prop( "checked", false ); //uncheck all checkboxes

        bedfile = "Genome_Data/Targetscan7_fixed.bed"
        bedtrack = true
        bedtype = "targetscan"
        // name = "Targetscan"
        name = $('#sequence-analysis-option-bar').val()
        shade_by_bed = true
        // alert(name)
    }); 



    ////// get the (value number 133333333333333333333333333)
    var track_names
    $("#gclipp-option-bar").click(function(){
        track_names = $( "#gclipp-option-bar option:selected" ).val()
    })
    
    $("#add-here").on('click', '.add-option', function(){
      track_names = $( ".add-option option:selected" ).val()
    })

    selection();
    checkBoxTick();
    colorcheck()
    //Click in search-button-box
    












// ============= start part for for last change ==============


// Start Search by GeneID
var no_matching_query_error_msg = '<p style="color:red" class="no_matching_query_error_msg">'+
                                  '<i class="fa fa-times fa-3x"></i> '+
                                  '</p>'
var matching_query_success_msg = '<p style="color:green" class="matching_query_success_msg">'+
                                  '<i class="fa fa-check fa-3x"></i> '+
                                  '</p>'
                                  
// var matching_query_loading_msg = ''

var matching_query_loading_msg = '<p style="color:white" class="matching_query_success_msg">'+
                                  '<img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Loading-gif-builder-comwrap.gif" style="width: 31px;"> '+
                                  '</p>'


$('.geneid_search').on('keyup', function(){

      $('.auto_complete').html(matching_query_loading_msg)
      var typed_value = $(this).val()

      if ($('#genome-check-box2').is(':checked')){
            
          var query_found = false
          $.ajax({
              url:'/static/graphy_static/auto_fill/hg19/Gene_info.json',
              success:function(data){
                  $.each(data, function(index, val) {
                      if (val['gene id'] == typed_value) {
                          var transcript_id = data[index]['transcript id']

                          $.ajax({
                            url:'/static/graphy_static/auto_fill/hg19/TSHuman_7_hg19_3UTRs.json',
                            success:function(data2){
                                $.each(data2, function(index2, val2) {
                                    if (val2['transcript id'] == transcript_id) {
                                        
                                        var chrom_value = data2[index2]['chrom']+':'+data2[index2]['start'].toLocaleString()+'-'+data2[index2]['stop'].toLocaleString()
                                        last_strand_value  = data2[index2]['strand']
                                        $('.location').val(chrom_value)
                                        query_found = true
                                        return false
                                    }

                                });
                                if (!query_found){
                                  $('.auto_complete').html(no_matching_query_error_msg)
                                  $('.search-box').data("isValid", "0")
                                }else{
                                  $('.auto_complete').html(matching_query_success_msg)
                                  $('.search-box').data("isValid", "1")
                                }
                            },
                            error:function(data2){
                              console.log('error')
                            }

                          })

                      }

                  });
                  if (!query_found){
                    $('.auto_complete').html(no_matching_query_error_msg)
                    $('.search-box').data("isValid", "0")
                  }else{
                    $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                  }
              },
              error:function(data){
                console.log('error')
              }

            })


          var query_found = false
          $.ajax({
            url:'/static/graphy_static/auto_fill/hg19/refGene.json',
            success:function(data){
                
                $.each(data, function(index, val) {
                    
                    if (val['gene id'] == typed_value) {
                        $('.refseqID').val(data[index]['#name'])
                        query_found = true
                        return false
                    }
                });
                if (!query_found){
                  $('.auto_complete').html(no_matching_query_error_msg)
                  $('.search-box').data("isValid", "0")
                }else{
                  $('.auto_complete').html(matching_query_success_msg)
                  $('.search-box').data("isValid", "1")
                }
            },
            error:function(data){
              console.log('error')
              $('.auto_complete').html('')
              // alert('long file error')
            }

          })



       }else{

            var query_found = false
            $.ajax({
              url:'/static/graphy_static/auto_fill/mm10/refseq_names.json',
              success:function(data){
                  // console.log(data)
                  $.each(data, function(index, val) {
                      // console.log(index, '', val.name2)
                      if (val.name2 == typed_value) {
                          $('.refseqID').val(data[index]['#name'])
                          query_found = true
                          return false
                      }

                  });
                  if (!query_found){
                    $('.auto_complete').html(no_matching_query_error_msg)
                    $('.search-box').data("isValid", "0")
                  }else{
                    $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                  }
              },
              error:function(data){
                console.log('error')
              }

            })


            var query_found = false
            $.ajax({
              url:'/static/graphy_static/auto_fill/mm10/refseq_3utr.json',
              success:function(data){
                  $.each(data, function(index, val) {
                      
                      if (val.GeneID == typed_value) {

                          var chrom_value = data[index]['Chrom']+':'+data[index]['Start'].toLocaleString()+'-'+data[index]['Stop'].toLocaleString()
                          last_strand_value  = data[index]['Strand']
                          $('.location').val(chrom_value)
                          query_found = true
                          return false
                      }
                  });
                  if (!query_found){
                    $('.auto_complete').html(no_matching_query_error_msg)
                    $('.search-box').data("isValid", "0")
                  }else{
                    $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                  }
              },
              error:function(data){
                console.log('error')
                $('.auto_complete').html('')
                // alert('long file error')
              }

            })
       }

         
  return false
})

// End Search by GeneID
//Start Search by Location

$('.location').on('keyup', function(){

    

    $('.auto_complete').html(matching_query_loading_msg)
    //converting 'chr5;142903115-142906754' into 3 part
    try{
      var typed_value = $(this).val()
      var typed_value = typed_value.split(':');
      var typed_value_chrom = typed_value['0']
      typed_value = typed_value['1'].split('-')

      var typed_value_start = typed_value['0']
      typed_value_start=typed_value_start.replace(/\,/g,'')   //removig "," from string

      var typed_value_stop = typed_value['1']
      typed_value_stop=typed_value_stop.replace(/\,/g,'')   //removig "," from string
    }
    catch{
      $('.no_matching_query_error_msg').html(no_matching_query_error_msg)
      $('.search-box').data("isValid", "0")
    }

    if ($('#genome-check-box2').is(':checked')){
          var query_found = false
          $.ajax({
            url:'/static/graphy_static/auto_fill/hg19/refGene.json',
            success:function(data){
                
                $.each(data, function(index, val) {
                    
                    if (typed_value_chrom == val.chrom && typed_value_start >= val.txStart && typed_value_stop <= val.txEnd) {
                        $('.refseqID').val(data[index]['#name'])
                        $('.geneid_search').val(data[index]['gene id'])
                        last_strand_value  = data[index]['strand']
                        query_found = true
                        return false
                    }
                });
                if (!query_found){
                  $('.auto_complete').html(no_matching_query_error_msg)
                  $('.search-box').data("isValid", "0")
                }else{
                  $('.auto_complete').html(matching_query_success_msg)
                  $('.search-box').data("isValid", "1")
                }
            },
            error:function(data){
              console.log('error')
              $('.auto_complete').html('')
              // alert('long file error')
            }

          })
    }else{
          var query_found = false
          $.ajax({
            url:'/static/graphy_static/auto_fill/mm10/refseq_names.json',
            success:function(data){
                
                $.each(data, function(index, val) {
                    // console.log(index, '', val.name2)
                    if (typed_value_chrom == val.chrom && typed_value_start >= val.txStart && typed_value_stop <= val.txEnd) {
                        $('.refseqID').val(data[index]['#name'])
                        $('.geneid_search').val(data[index]['name2'])
                        last_strand_value  = data[index]['strand']
                        query_found = true
                        return false
                    }
                });
                if (!query_found){
                  $('.auto_complete').html(no_matching_query_error_msg)
                  $('.search-box').data("isValid", "0")
                }else{
                  $('.auto_complete').html(matching_query_success_msg)
                  $('.search-box').data("isValid", "1")
                }
            },
            error:function(data){
              console.log('error')
              $('.auto_complete').html('')
              // alert('long file error')
            }

          })
      }
  return false
})

// End Search by Location
// Start Search by RefSeqID
$('.refseqID').on('keyup', function(){


    $('.auto_complete').html(matching_query_loading_msg)
    var typed_value = $(this).val()

    if ($('#genome-check-box2').is(':checked')){
        query_found = false
        $.ajax({
          url:'/static/graphy_static/auto_fill/hg19/refGene.json',
          success:function(data){

                $.each(data, function(index, val) {
                    if (val['#name'] == typed_value) {    //can't use val.#name as it has # at the beginning so used val['#name']

                        $('.geneid_search').val(data[index]['gene id'])
                        
                        var chrom_value = data[index]['chrom']+':'+data[index]['txStart'].toLocaleString()+'-'+data[index]['txEnd'].toLocaleString()
                        last_strand_value  = data[index]['strand']
                        $('.location').val(chrom_value)
                        query_found = true
                        return false

                    }
                })

                if (!query_found){
                    $('.auto_complete').html(no_matching_query_error_msg)
                    $('.search-box').data("isValid", "0")

                }else{
                    $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                }
             
          },
          error:function(data){
            $('.auto_complete').html('')
            // alert('long file error')
            console.log('error')
          }

        })
    }else{
        query_found = false
        $.ajax({
          url:'/static/graphy_static/auto_fill/mm10/refseq_names.json',
          success:function(data){

                $.each(data, function(index, val) {
                    if (val['#name'] == typed_value) {    //can't use val.#name as it has # at the beginning so used val['#name']
                        $('.geneid_search').val(data[index]['name2'])
                        var chrom_value = data[index]['chrom']+':'+data[index]['txStart'].toLocaleString()+'-'+data[index]['txEnd'].toLocaleString()
                        last_strand_value  = data[index]['strand']
                        $('.location').val(chrom_value)
                        query_found = true
                        return false
                    }
                })

                if (!query_found){
                    $('.auto_complete').html(no_matching_query_error_msg)
                    $('.search-box').data("isValid", "0")

                }else{
                    $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                    // no need now done on top now 
                    //since from above result we need to take genid
                    // geneId_typed_value = $('.geneid_search').val()  //change because next search by genid
                    // query_found = false
                    // $.ajax({
                    //   url:'/static/graphy_static/auto_fill/mm10/refseq_3utr.json',
                    //   success:function(data){
                    //       $.each(data, function(index, val) {
                    //           if (val.GeneID == geneId_typed_value) {
                    //               var chrom_value = data[index]['Chrom']+':'+data[index]['Start'].toLocaleString()+'-'+data[index]['Stop'].toLocaleString()
                    //               last_strand_value  = data[index]['Strand']
                    //               $('.location').val(chrom_value)
                    //               query_found = true
                    //               return false
                    //           }
                    //       });
                    //       if (!query_found){
                    //         $('.auto_complete').html(no_matching_query_error_msg)
                    //       }else{
                    //         $('.auto_complete').html(matching_query_success_msg)
                    $('.search-box').data("isValid", "1")
                    //       }
                    //   },
                    //   error:function(data){
                    //     console.log('error')
                    //     $('.auto_complete').html('')
                    //     // alert('long file error')
                    //   }
                    // })
                }
             
          },
          error:function(data){
            $('.auto_complete').html('')
            // alert('long file error')
          }

        })
    }
    

  return false
})

// End Search by RefSeqID


// var string = "0,1";
// var array = string.split(",");
// alert(array[0]);

var data_file_mm10 = $('.data_file_mm10').val().slice(1, -1)
var data_file_mm10 = data_file_mm10.split(",")

var data_file_hg19 = $('.data_file_hg19').val().slice(1, -1)
var data_file_hg19 = data_file_hg19.split(",")


 $('#genome-check-box1').on('click', function(){

    if ($('#genome-check-box1').is(':checked')) {   // cause avobe the logic is wrong, which says only if click take from here, so whatif first click and then select, so when the click happen no item was selected or the first one default is selected only. So this is for the solution
      $("#genome-check-box2").prop("checked", false);

        defaultgeneid = 'Actb'
        defaultloc = 'chr5:142,903,034-142,906,867'
        defaultrefseqid = 'NM_007393'

        $('.geneid_search').val(defaultgeneid)
        $('.location').val(defaultloc)
        $('.refseqID').val(defaultrefseqid)
        

        $('.selection').html('')
        // console.log(data_file_mm10)
        // console.log('')
        $.each(data_file_mm10, function(index, val) {
                    val = val.trim()      //might have spaces
                    // console.log(val, val.slice(1, -1))
                    val = '<option value="mm10/'+val.slice(1, -1)+'" >'+val.slice(1, -1)+'</option>'    ////slice because has ''
                    $('.selection').append(val)
        });      

        
        // $.ajax({
        //   url:'/static/graphy_static/bam_file_list.json',
        //   success:function(data){
        //       // console.log(data)
        //       $('.selection').html('')
        //       $.each(data.mm10, function(index, val) {
        //           // console.log(val)
        //           val = '<option value="mm10/'+val+'" >'+val+'</option>'
        //           $('.selection').append(val)
        //       });
              
        //   },
        //   error:function(data){
        //     // console.log('error '+data)
        //   }

        // })

    }
  })


$('#genome-check-box2').on('click', function(){

    if ($('#genome-check-box2').is(':checked')) {   // cause avobe the logic is wrong, which says only if click take from here, so whatif first click and then select, so when the click happen no item was selected or the first one default is selected only. So this is for the solution
      $("#genome-check-box1").prop("checked", false);

      defaultgeneid = 'Celf2'
      defaultloc = 'chr10:11,371,017-11,371,060'
      defaultrefseqid = 'NM_001326341'

      $('.geneid_search').val(defaultgeneid)
      $('.location').val(defaultloc)
      $('.refseqID').val(defaultrefseqid)

      $('.selection').html('')
      $.each(data_file_hg19, function(index, val) {
                  val = val.trim()      //might have spaces
                  val = '<option value="hg19/'+val.slice(1, -1)+'" >'+val.slice(1, -1)+'</option>'   //slice because has ''
                  $('.selection').append(val)
      });      




      // $.ajax({
      //   url:'/static/graphy_static/bam_file_list.json',
      //   success:function(data){
      //       // console.log(data)
      //       $('.selection').html('')
      //       $.each(data.hg19, function(index, val) {
      //           // console.log(val)
      //           val = '<option value="hg19/'+val+'" >'+val+'</option>'
      //           $('.selection').append(val)
      //       });
            
      //   },
      //   error:function(data){
      //     console.log('error')
      //   }

      // })

    }
  })


$('#genome-check-box1').trigger('click')  //always mm10 selected

// ============= end part for for last change ==============

























    $("#search-button-box").click(function(){

        
        ////// get the geneid value (value number 111111111)
        var geneid = $(".geneid").val()
        // console.log("geneid = "+geneid)
        

        ////// get the location value (value number 22222222222,3333333333,444444444444444)
        var location = $(".location").val()

        if(location != '' ){
            var res = location.split(":");
            var location_string = res[1]
            var final_location_string = location_string.split("-");
            var loaction1 = res[0]
            // var loaction2 = parseInt(final_location_string[0])
            var loaction2 = final_location_string[0]
            loaction2=loaction2.replace(/\,/g,'')   //removig "," from string
            loaction2=Number(loaction2)     //making them integer
            // var loaction3 = parseInt(final_location_string[1])
            var loaction3 = final_location_string[1]
            loaction3=loaction3.replace(/\,/g,'')   //removig "," from string
            loaction3=Number(loaction3)   //making them integer
            
        }

        ////// get the refseqID value (value number 5555555555555)
        var refseqID = $(".refseqID").val()


        counter1 = $("#axis-input-one").val()  //need to change here because on top it's value depeiding on the click of plus/minus only not if write numer on the field manually 
        counter2 = $("#axis-input-two").val()  //need to change here because on top it's value depeiding on the click of plus/minus only not if write numer on the field manually 


        if ($('#sequence-analysis-check-box2').is(':checked')) {   // cause avobe the logic is wrong, which says only if click take from here, so whatif first click and then select, so when the click happen no item was selected or the first one default is selected only. So this is for the solution

            name = $('#sequence-analysis-option-bar').val()

        }

        // console.log('')
        selectionArray = []
        $('.selection').each(function(){
          
          selectionArray.push($(this).val())

        })


        checkBoxArray = []


        //new way
        $('.checkbox').each(function(){
          
          if ($('.toggle_antisense').is(':checked')){
            this_check_box_value = 'as'
          }else{
            this_check_box_value = 's'
          }
          checkBoxArray.push(this_check_box_value)
          
        })

        //old way
        // $('.checkbox').each(function(){
          
          
        //   // if ($('#genome-check-box2').is(':checked')){
        //   if ($(this).is(':checked')){
        //     this_check_box_value = 'as'
        //   }else{
        //     this_check_box_value = 's'
        //   }
        //   checkBoxArray.push(this_check_box_value)
          
        // })

        colorArray = []
        $('.jscolor').each(function(){
          
          if( $(this).val()[0] != '#'){
            colorArray.push('#'+$(this).val().toUpperCase())
            // colorArray.push('#ea3a3a')
          }else{
            colorArray.push($(this).val())
          }
          
        })
        // console.log('')

        // staticaxes = true
        // LeftToRight = false
        // axis_off = false
        // refseqtrack = true

        if($('.staticaxes').is(':checked')){
          staticaxes = true
        }else{
          staticaxes = false
        }
        
        if($('.LeftToRight').is(':checked')){
          LeftToRight = true
        }else{
          LeftToRight = false
        }
        
        if($('.axis_off').is(':checked')){
          axis_off = true
        }else{
          axis_off = false
        }
        
        if($('.refseqtrack').is(':checked')){
          refseqtrack = true
        }else{
          refseqtrack = false
        }
          
        // alert("geneid = "+geneid + "\n" +
        //        "chrom = "+loaction1 + "\n" +
        //        "start = "+loaction2 + "\n" +
        //        "stop = "+loaction3 + "\n" +
        //        "refseqid = "+refseqID + "\n" +
        //        "figwidth = "+counter1 + "\n" +
        //        "fontsize = "+counter2 + "\n" +
        //        "bedfile = "+bedfile + "\n" +
        //        "bedtrack = "+bedtrack + "\n" +
        //        "bedtype = "+bedtype + "\n" +
        //        "name = "+name + "\n" +
        //        "shade_by_bed = "+shade_by_bed + "\n" +

        //        "track_names = " +  selectionArray + "\n" +
        //        "track_type = " + checkBoxArray + "\n" +
        //        "color_values = "+ colorArray + "\n" +

        //        "annotate_bed = " +  true + "\n" +
        //        "strand = " + last_strand_value + "\n" +
        //        "bigwignames"+ [] 
        //    )
        
      value_object = {
          geneid : geneid,
          chrom : loaction1,
          start : loaction2,
          stop : loaction3,
          refseqid : refseqID,
          figwidth : counter1,
          fontsize : counter2,
          bedfile : bedfile,
          bedtrack : bedtrack,
          bedtype : bedtype,
          name : name,
          shade_by_bed : shade_by_bed,
          track_names  :  selectionArray,
          track_type  : checkBoxArray,
          color_values :  colorArray,
          annotate_bed : true,
          strand  : last_strand_value,
          bigwignames : [],
          staticaxes : staticaxes,
          LeftToRight : LeftToRight,
          axis_off : axis_off,
          refseqtrack : refseqtrack
      }

    })

})

$(document).scroll(function() {
  //Main Menu
           if($(window).scrollTop() > 50){

            $("#main-menu").css("background","#000000");
 
           }else if($(window).scrollTop() < 50){

            $("#main-menu").css("background","");
  
           }

    //Mobile menu
           if($(window).scrollTop() > 50){

            $("#mobile-menu").css("background","#000000");
 
           }else if($(window).scrollTop() < 50){

            $("#mobile-menu").css("background","");
  
           }
       
    });