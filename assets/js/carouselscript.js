$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('showtoggle');
    });	
});	
$(document).ready(function(){
    $('.dropdown-menu .dropdown-toggle').on("click", function(e){
        $(this).next('.dropdown-menu').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 30) {
      $(".header_sec").addClass("fixed");
  } else {
      $(".header_sec").removeClass("fixed");
  }
});


