$(document).ready(function(){
    /* Sliding animation when clicking on a link */
    $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    });

    e.preventDefault();
  });
    
    /* */
    $("[data-toggle=tooltip]").tooltip();
});
