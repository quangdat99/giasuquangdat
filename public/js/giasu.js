
    $(document).ready(function() {
       
       $(window).scroll(function() { 
          if($(window).scrollTop() != 0) { 
            $('#top').fadeIn();
          } else {
            $('#top').fadeOut();
          }
       });
     $('#top').click(function() {
       $('html').animate({scrollTop:0},500);
     });
   });