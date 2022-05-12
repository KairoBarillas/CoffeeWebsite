/* -------------------------------------------------------------------------- */
/*                 Smooth Scrolling para los puntos de anclaje                */
/* -------------------------------------------------------------------------- */
 $(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
    });
/* -------------------------- Fin Smooth Scrolling -------------------------- */
