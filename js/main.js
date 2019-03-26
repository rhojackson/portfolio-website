var portfolioPreview = ["images/portfolio/rri-mockup-home.png",
    "images/portfolio/kismet_mockup.png",
    "images/portfolio/eze_pc_1.png",
    "images/portfolio/ea_event_1.jpg",
    "images/portfolio/ba.png",
    "images/portfolio/el_redesign.png",
    "images/portfolio/pa.png",
    "images/portfolio/brookview_brochure_mockup.png",
    "images/portfolio/sponsorship_booklet.png",
    "images/portfolio/hospitality_infographic.png",
    "images/portfolio/collections_mag_fall2015.jpg",
    "images/portfolio/market_report_2016.jpg"
    
    
];

var spot = 0;

var mrPagesLeft;

var colPagesLeft;

var sponPagesLeft;

var bbPagesLeft;

var paPagesLeft;

var logoPagesLeft;

var eaPagesLeft

var epcPagesLeft;

var kcPagesLeft;

var rriPagesLeft;

$(document).ready(function() {
    
    $(".grid-item").mouseenter(function() {
        $(this).siblings().addClass("blur");
        if ($(".slideDown").css("float")=="none"){
            $(".slideDown").addClass("noShow");
        }else{
        $(".slideDown").fadeIn("slow");
    }
    });
    $(".grid-item").mouseleave(function() {
        $(this).siblings().removeClass("blur");
    });
    

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

 
    /*If page scrolls show navigation bar, if not hide it
    $(window).scroll(function() {console.log($(window).scrollTop());
        if ($("body").scrollTop() > 0) {

            $(".navbar,.navbar-brand").fadeIn("slow", function() {
            $("nav").addClass("scrollNav");
            
            });

        } else {
            
             $(".navbar-collapse").removeClass("in");
        }
    });
    */
    
 /*Fills portfolio spots from array into bg img*/
     while ($(".port").length > 0) {
        if ($(".spot").hasClass("multiPage")) {
            $(".spot").eq(spot).prepend("<a href=" + portfolioPreview[
                    spot] + " data-lightbox='image" + spot + spot +
                "'>").addClass(
                "full").removeClass("port").css("background-image","url(" + portfolioPreview[spot] + ")");
            spot++;
        } else {
            $(".spot").eq(spot).prepend("<a href=" + portfolioPreview[
                    spot] + " data-lightbox='image" + spot +
                "'>").removeClass("port").css("background-image","url(" + portfolioPreview[spot] + ")");
            spot++;
        }
    }

    for(mrPagesLeft = 2; mrPagesLeft < 25; mrPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/mr/mr"+mrPagesLeft+".jpg' data-lightbox='image1111' </a>")
    }

    for(colPagesLeft = 2; colPagesLeft < 45; colPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/col/col_Page_"+colPagesLeft+".jpg' data-lightbox='image1010' </a>")
    }

      for(sponPagesLeft = 2; sponPagesLeft < 6; sponPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/spon/spon"+sponPagesLeft+".png' data-lightbox='image88' </a>")
    }

     for(bbPagesLeft = 2; bbPagesLeft < 5; bbPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/bb/bb_"+bbPagesLeft+".png' data-lightbox='image77' </a>")
    }

      for(paPagesLeft = 2; paPagesLeft < 4; paPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/pa/pa_"+paPagesLeft+".png' data-lightbox='image66' </a>")
    }

      for(logoPagesLeft = 2; logoPagesLeft < 3; logoPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/el/el_redesign_"+logoPagesLeft+".png' data-lightbox='image55' </a>")
    }

   

      for(eaPagesLeft = 2; eaPagesLeft < 4; eaPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/ea/ea_"+eaPagesLeft+".jpg' data-lightbox='image33' </a>")
    }

    for(epcPagesLeft = 2; epcPagesLeft < 3; epcPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/epc/epc_"+epcPagesLeft+".png' data-lightbox='image22' </a>")
    }

     for(kcPagesLeft = 2; kcPagesLeft < 4; kcPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/kc/kc_"+kcPagesLeft+".png' data-lightbox='image11' </a>")
    }

      for(rriPagesLeft = 2; rriPagesLeft < 5; rriPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/rri/rri_"+rriPagesLeft+".png' data-lightbox='image00' </a>")
    }
  /*  $(function() {
        // Init Controller
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions:{
                triggerHook:'onEnter', duration: "200%"
            }
        });
    

$("#portfolioBar").each(function(){

    new ScrollMagic.Scene({
        triggerElement: ".hero"
    })
    .setTween(".hero", {y:"80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(ctrl);
});

$("#portfolio").each(function(){

    new ScrollMagic.Scene({
        triggerElement: "#home"
    })
    .setTween("#home", {y:"80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(ctrl);
});

});*/



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    $('.grid').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
});