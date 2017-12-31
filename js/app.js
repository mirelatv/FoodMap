/* Splash*/
$(document).ready(function(){

$('.initial').fadeOut(5000);

})

/* efecto de  cada pagina  visitada*/

$( '.call' ).click(function() {
    $( '.telephone' ).show( 'slow');
    
  });
  
/* Bucador*/
  
var buscador = $('#table').DataTable();

   $('#input-search').keyup(function(){
    
buscador.search($(this).val()).draw();
    
    if ($('#input-search').val() == ""){
        $('.content-search').fadeOut(300);
    }else{
        $('.content-search').fadeIn(300);
    }
})

/*mouseOver*/


    $(".first").mouseover(function(){
        $(".first").css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $(".first").mouseout(function(){
        $(".first").css('background','transparent');
        
    });


    $('.second').mouseover(function(){
        $(".second").css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $('.second').mouseout(function(){
        $(".second").css('background','transparent');
     
    });

    $('.third').mouseover(function(){
        $(".third").css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $('.third').mouseout(function(){
        $('.third').css('background','transparent');
     
    });

    $('.fourth').mouseover(function(){
        $('.fourth').css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $('.fourth').mouseout(function(){
        $('.fourth').css('background','transparent');
     
    });

    $('.fifth').mouseover(function(){
        $('.fifth').css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $('.fifth').mouseout(function(){
        $('.fifth').css('background','transparent');
     
    });

    $('.sixth').mouseover(function(){
        $('.sixth').css('background', 'rgba(0, 0, 0, 0.336)');
    });
    $('.sixth').mouseout(function(){
        $('.sixth').css('background','transparent');
     
    });
/* reemplazo de Info en Modal

    modal-title
     
    direction
    telephone 




*/
    



