$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("showtoggle");
  });
});
$(document).ready(function () {
  $(".dropdown-menu .dropdown-toggle").on("click", function (e) {
    $(this).next(".dropdown-menu").toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 30) {
    $(".header_sec").addClass("fixed");
  } else {
    $(".header_sec").removeClass("fixed");
  }
});

$(document).ready(function () {
  var owl = $(".testimonial_sec .owl-carousel");
  owl.owlCarousel({
    margin: 0,
    dots: false,
    autoplay: true,
    nav: true,
    dotsEach: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".brands_sec .owl-carousel");
  owl.owlCarousel({
    margin: 0,
    dots: false,
    autoplay: true,
    nav: false,
    dotsEach: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});


var btn = $('.back_to_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("pageprogressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};



(function($){
  $(window).on("load",function(){
    
    /* Page Scroll to id fn call */
    $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id'],.switch_btn").mPageScroll2id({
      highlightSelector:"#navigation-menu a"
    });
    
    /* demo functions */
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });
    $(document).ready(function() {
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 140 // Adjust this value to set the desired offset in pixels
      });
    });
    
  });
})(jQuery);