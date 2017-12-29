/* Splash*/
$(document).ready(function(){

$('.initial').fadeOut(5000);

})

/* efecto de  cada pagina  visitada*/

$( "button" ).click(function() {
    $( "p" ).show( "slow" );
  });

/* Bucador*/
  
var buscador = $("#table").DataTable();

$("#input-search").keyup(function(){
    
buscador.search($(this).val()).draw();
    
    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})