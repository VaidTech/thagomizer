$(document).ready(function(){  

/*	
var vid = document.getElementById("myVideo"); 
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

vid.play();

//video play when click on button
$("#myBtn").click(function(){
  if (video.paused) {
    vid.play();
    console.log("play now")
  } else {
    vid.play();
    console.log("stop now")
  }
})

$(".video-play-with").click(function(){
  if (video.paused) {
    vid.play();
    $('#myBtn').removeClass("fa-play-circle").addClass("fa-pause-circle");
    setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
  } else {
    vid.play();
    $('#myBtn').removeClass("fa-pause-circle").addClass("fa-play-circle");
    $('#myBtn').css('opacity','0')
  }
})

//video play when click on video
$("#myBtn").click(function(){
  if (video.paused) {
    vid.play();
    $('#myBtn').removeClass("fa-play-circle").addClass("fa-pause-circle");
    setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
  } else {
    vid.play();
    $('#myBtn').removeClass("fa-pause-circle").addClass("fa-play-circle");
    $('#myBtn').css('opacity','0')
  }
})

//video play when click on video
$("#myVideo").click(function(){
  if (video.paused) {
    vid.play();
    $('#myBtn').removeClass("fa-play-circle").addClass("fa-pause-circle");
    setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
  } else {
    vid.play();
    $('#myBtn').removeClass("fa-pause-circle").addClass("fa-play-circle");
    $('#myBtn').css('opacity','0')
  }
})

$(".icon-play").click(function(){
		$("#myBtn").toggleClass('fa-pause-circle fa-play-circle');
		setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
})


//video play when click on video
$(".content").click(function(){
  if (video.paused) {
    vid.play();
    $('#myBtn').removeClass("fa-play-circle").addClass("fa-pause-circle");
    setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
  } else {
    vid.play();
    $('#myBtn').removeClass("fa-pause-circle").addClass("fa-play-circle");
    $('#myBtn').css('opacity','0')
  }
})

$(".icon-play").click(function(){
		$("#myBtn").toggleClass('fa-pause-circle fa-play-circle');
		setTimeout(function() { $("#myBtn").css('opacity','0'); }, 600);
})
*/


//////////////////////////click the side menu
$(".side-menu-circle").click(function(){
    $(".side-menu-circle").removeClass("active-side-menu")
    $(this).addClass("active-side-menu")
})


////////////////////////smooth scroll
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


 ///////////////////////////////////////////////////////////// nav change when scroll
 


var lastId,
    topMenu = $(".side-menu-ul"),
    topMenuHeight = topMenu.outerHeight()+350,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(".side-scroll-class").click(function(){
     topMenuHeight = topMenu.outerHeight()-100
})   
$(window).scroll(function(){
     topMenuHeight = topMenu.outerHeight()+440
})  

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active-side-menu")
         .end().filter("[href='#"+id+"']").parent().addClass("active-side-menu");
   }                   
});
  

//Wow effect
  new WOW().init();


/*$(".button-over-video-text").click(function(){

      function noscroll() {
        window.scrollTo( 0, 900 );
      } 

      window.addEventListener('scroll', noscroll);.on('mousemove', throttle(function (event)

})*/
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;
  
    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

$('#video-section').on('mousewheel', throttle(function(e) {
    if(e.originalEvent.wheelDelta / 1 > 0) {
        // $( ".one-button-click" ).trigger('click');
        console.log('video section up')
    }else {
         $( ".button-over-video-text" ).trigger('click');    
         console.log('vidoe section donw')
    }
}));

$('#part-two-section').bind('mousewheel', throttle(function(e) {
    if(e.originalEvent.wheelDelta / 1 > 0) {
        $( ".part-two-up" ).trigger('click');
        console.log('part two section up')
    }else {
         $( ".part-two-down" ).trigger('click');    
         console.log('part two section down')
    }
}));

$('#part-three-section').bind('mousewheel', throttle(function(e) {
    if(e.originalEvent.wheelDelta / 1 > 0) {
        $( ".part-three-up" ).trigger('click');
        console.log('part three section up')
    }else {
         $( ".part-three-down" ).trigger('click');    
         console.log('part three section down')
    }
}));

$('#footer-section').bind('mousewheel', throttle(function(e) {
    if(e.originalEvent.wheelDelta / 1 > 0) {
        $( ".part-four-up" ).trigger('click');
        console.log('part 4 section up')
    }else {
            
         // console.log('part 4 section down')
    }
}));

/*var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
      if($( window ).scrollTop() > 1 && $( window ).scrollTop() < 100){
        console.log("1")
        // $( ".button-over-video-text" ).trigger('click');
      
        }else if($( window ).scrollTop() > 801 && $( window ).scrollTop() < 900){ 
            console.log("2")
            $( ".two-button-click" ).click();

         }else if($( window ).scrollTop() > 1400 && $( window ).scrollTop() < 1500){

           console.log("3")
           $( ".three-button-click" ).click();

         }else if($( window ).scrollTop() > 2100 && $( window ).scrollTop() < 2200){
            console.log("4")
             $( ".four-button-click" ).click();$(window).unbind('scroll')
        }
   } else {
       alert('up');
   }
   lastScrollTop = st;
});*/


/*var vids = $("video");
//Loop though all Video tags and set Controls as false

$("video").click(function() {
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.play();
  }
});*/
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////CHOOSE BAM FILE/////////////////////////////////////////////////////////  
// http://localhost:8000/graphing_dashboard?genome=mm10&files[]=GCliPP_cd8_merged&files[]=GCliPP_cd8_merged2.bam
// var circleBoxType="";
// var linkaddfinal = "";
// var link = 'http://localhost:8000/graphing_dashboard?genome='

// $(".select-img-box1").click(function(){
//    $(".select-img-circle",this).toggleClass("far fas");
//    $(".select-img-box2 .select-img-circle").removeClass("fas")
//    $(".select-img-box2 .select-img-circle").addClass("far")
//    $(this).toggleClass("this-box-is-selected")
//    $(".select-img-box2").removeClass("this-box-is-selected")
//    circleBoxType="hg38&"

// })

// $(".select-img-box2").click(function(){
//    $(".select-img-circle",this).toggleClass("far fas");
//    $(".select-img-box1 .select-img-circle").removeClass("fas")
//    $(".select-img-box1 .select-img-circle").addClass("far")
//    $(this).toggleClass("this-box-is-selected")
//    $(".select-img-box1").removeClass("this-box-is-selected")
//    circleBoxType="mm10&"
// })

// $(".plot-button-class").click(function(){
//    console.log(circleBoxType)
//    if ($(".all-box-same-class").hasClass("this-box-is-selected")) {
//         $('.this-box-is-selected img').each(function() {
//             var mylist = $(this).attr('data-file')
//             var linkaddclick = 'files[]='+mylist
//             linkaddfinal += linkaddclick+'&'
//         });
        
//     }
//     var sendfinallink = link+circleBoxType+linkaddfinal
//     console.log(sendfinallink)
// })

})

