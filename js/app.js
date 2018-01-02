    /* Splash*/
    $(document).ready(function(){

      $('.initial').fadeOut(5000);
    
    })
    
    /* efecto de  cada pagina  visitada*/
    
    $( '.call' ).click(function() {
        $( '.telephone' ).show( 'slow');
         $('.telephone').hide(10000);
        
      });
      
    /* Bucador*/
      
    var buscador = $('#table').DataTable();
    $('#input-search').click(function(){
        $('.content-search').show();

    });
             
    /*mouseOver*/
            
       
        $('.first').mouseover(function(){
            $('.first').css('background', 'white');
            $('.first').css('border-radius', '50%');
            
        });
        $('.first').mouseout(function(){
            $('.first').css('background','transparent');
            $('.first').css('border-radius', '0%');
            
        });

        
        $('.second').mouseover(function(){
            $('.second').css('background',' white');
            $('.second').css('border-radius', '50%');
        });
        $('.second').mouseout(function(){
            $('.second').css('background','transparent');
            $('.second').css('border-radius', '0%');
         
        });
    
        $('.third').mouseover(function(){
            $('.third').css('background', 'white');
            $('.third').css('border-radius', '50%');
        });
        $('.third').mouseout(function(){
            $('.third').css('background','transparent');
            $('.third').css('border-radius', '0%');
        });
    
        $('.fourth').mouseover(function(){  
            $('.fourth').css('background', 'white');
            $('.fourth').css('border-radius', '50%');
        });
        $('.fourth').mouseout(function(){
            $('.fourth').css('background','transparent');
            $('.fourth').css('border-radius', '0%');
        });
    
        $('.fifth').mouseover(function(){
            $('.fifth').css('background', 'white');
            $('.fifth').css('border-radius', '50%');
        });
        $('.fifth').mouseout(function(){
            $('.fifth').css('background','transparent');
            $('.fifth').css('border-radius', '0%');
         
        });
    
        $('.sixth').mouseover(function(){
            $('.sixth').css('background', 'white');
        });
        $('.sixth').mouseout(function(){
            $('.sixth').css('background','transparent');
         
        });
    
    /* reemplazo de Info en Modal pollerias*/
    
    
        $('.first').click(function() {
           $('.modal-title').text('Pollerias Italo');
           $('.direction').text('AV. VISTA ALEGRE MZA 16 LOTE 8 SAGITARIO Santiago De Surco, Lima, Peru');
           $('.telephone').text('(01) 2570352')
        });
    
        $('.second').click(function() {
            $('.modal-title').text('Bunnys');
            $('.direction').text('Av.EL SOL 299 SAN ROQUE -Santiago de Surco,Lima,Peru');
            $('.telephone').text('(01) 2743873')
         });
         
    
         $('.third').click(function() {
            $('.modal-title').text('Kikirico');
            $('.direction').text(' Santiago De Surco, Lima, Peru');
            $('.telephone').text('(01) 4441637')
         });
    
         $('.fourth').click(function() {
            $('.modal-title').text('Leña y Carbon');
            $('.direction').text('CALLE LOS LIRIOS S/N URB. LOS FORESTALES  Santiago De Surco, Lima, Peru');
            $('.telephone').text('(01) 7130606')
         });
    
         $('.fifth').click(function() {
            $('.modal-title').text('Rokys ');
            $('.direction').text('AV.ALFEDO BENAVIDES 5039 Santiago De Surco, Lima, Peru');
            $('.telephone').text('(01) 6135000')
         });
    
         $('.sixth').click(function() {
            $('.modal-title').text('Villa chiken');
            $('.direction').text('DOÑA ROSA 164  LA CAPULLANA SAGITARIO Santiago De Surco, Lima, Peru');
            $('.telephone').text('(01) 2737082')
         });
    
        /* reemplazo de Info en Modal marisquerias*/
    
         $('.fish1').click(function() {
            $('.modal-title').text('Embarcadero Fusion');
            $('.direction').text('AV. VISTA ALEGRE MZA 16 LOTE 8 SAGITARIO Santiago De Surco, Lima, Peru');
            $('.telephone').text('(01) 2570352')
         });
     
         $('.fish2').click(function() {
             $('.modal-title').text('Cevicheria Acuario');
             $('.direction').text('Av.EL SOL 299 SAN ROQUE -Santiago de Surco,Lima,Peru');
             $('.telephone').text('(01) 2743873')
          });
          
     
          $('.fish3').click(function() {
             $('.modal-title').text('La preferida');
             $('.direction').text(' Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 4441637')
          });
     
          $('.fish4').click(function() {
             $('.modal-title').text('Polo Marino');
             $('.direction').text('CALLE LOS LIRIOS S/N URB. LOS FORESTALES  Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 7130606')
          });
     
          $('.fish5').click(function() {
             $('.modal-title').text('Punto Azul');
             $('.direction').text('AV.ALFEDO BENAVIDES 5039 Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 6135000')
          });
     
          $('.fish6').click(function() {
             $('.modal-title').text('Segundo Muelle');
             $('.direction').text('DOÑA ROSA 164  LA CAPULLANA SAGITARIO Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 2737082')
          });
    
        
          /* reemplazo de Info en Modal comidas del mundo*/
    
         $('.mundo1').click(function() {
            $('.modal-title').text('La Burreria Mexicana');
            $('.direction').text(' AV CAMINOS DEL INKA 236- Santiago de Surco 33 Perú');
            $('.telephone').text('(01) 2570352')
         });
     
         $('.mundo2').click(function() {
             $('.modal-title').text('La Picolina Italiana');
             $('.direction').text('VICUS 302 INT. 1-K, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('940203528')
          });
          
     
          $('.mundo3').click(function() {
             $('.modal-title').text('Mama Sara -comida Italiana');
             $('.direction').text(' VICUS 302 INT. 1-K, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('940203528')
          });
     
          $('.mundo4').click(function() {
             $('.modal-title').text('Mr. Suchi');
             $('.direction').text('AV. G0LF LOS INCAS 493, Santiago de Surco, Lima');
             $('.telephone').text('(01) 436 8282')
          });
     
          $('.mundo5').click(function() {
             $('.modal-title').text('Piaccere');
             $('.direction').text('Av. EL DERBY 186, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 4370530')
          });
     
          $('.mundo6').click(function() {
             $('.modal-title').text('HANZO Restaurante');
             $('.direction').text('AV. PRIMAVERA 1494, Lima 15023, Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 3444801')
          });
    
           /* reemplazo de Info en Modal comidas del mundo*/
    
         $('.mundo1').click(function() {
            $('.modal-title').text('La Burreria Mexicana');
            $('.direction').text(' AV CAMINOS DEL INKA 236- Santiago de Surco 33 Perú');
            $('.telephone').text('(01) 2570352')
         });
     
         $('.mundo2').click(function() {
             $('.modal-title').text('La Picolina Italiana');
             $('.direction').text('VICUS 302 INT. 1-K, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('940203528')
          });
          
     
          $('.mundo3').click(function() {
             $('.modal-title').text('Mama Sara -comida Italiana');
             $('.direction').text(' VICUS 302 INT. 1-K, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('940203528')
          });
     
          $('.mundo4').click(function() {
             $('.modal-title').text('Mr. Suchi');
             $('.direction').text('AV. G0LF LOS INCAS 493, Santiago de Surco, Lima');
             $('.telephone').text('(01) 436 8282')
          });
     
          $('.mundo5').click(function() {
             $('.modal-title').text('Piaccere');
             $('.direction').text('Av. EL DERBY 186, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 4370530')
          });
     
          $('.mundo6').click(function() {
             $('.modal-title').text('HANZO Restaurante');
             $('.direction').text('AV. PRIMAVERA 1494, Lima 15023, Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 3444801')
          });
           
          /* reemplazo de Info en Modal comida Peruana*/
    
         $('.peruana1').click(function() {
            $('.modal-title').text('Cofiteria Salas');
            $('.direction').text(' AV. BENAVIDES 3695, Santiago de Surco, Lima (Lima) ');
            $('.telephone').text('(01) 2730828')
         });
     
         $('.peruana2').click(function() {
             $('.modal-title').text('El Rocoto');
             $('.direction').text('AV. AVIACION 4907, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 448-3040')
          });
          
     
          $('.peruana3').click(function() {
             $('.modal-title').text('La Folie');
             $('.direction').text(' Av. PRIMAVERA 1070, URB. VALLE HERMOSO, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 3721502')
          });
     
          $('.peruana4').click(function() {
             $('.modal-title').text('La Panka');
             $('.direction').text('AV. JAVIER PRADO ESTE 4200, Santiago de Surco, Lima');
             $('.telephone').text('(01) 2733158')
          });
     
          $('.peruana5').click(function() {
             $('.modal-title').text('La Santa Callana');
             $('.direction').text('Av.CAMINOS DEL INKA 3422, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('932 327 932')
          });
     
          $('.peruana6').click(function() {
             $('.modal-title').text('Paklla');
             $('.direction').text('JR. BOLOGNESI 229- PLAZA MAYOR DE SURCO, Santiago De Surco, Lima, Peru');
             $('.telephone').text('(01) 248-7769')
          });
    
          /* reemplazo de Info en Modal comida Selvatica*/
    
         $('.selva1').click(function() {
            $('.modal-title').text('El Aguajal');
            $('.direction').text(' Av. SAN BORJA NORTE. 886, San Borja 15037, Lima (Lima) ');
            $('.telephone').text('(01) 2262444')
         });
     
         $('.selva2').click(function() {
             $('.modal-title').text('El Encanto Amazonico');
             $('.direction').text('AV. EBNAVIDES 4001, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 6529040')
          });
          
     
          $('.selva3').click(function() {
             $('.modal-title').text('La Patarashca');
             $('.direction').text(' PARQUE DE LA  AMISTAD , Santiago de Surco, Lima (Lima)');
             $('.telephone').text('(01) 340-7754')
          });
     
          $('.selva4').click(function() {
             $('.modal-title').text('La Choza de la Anaconda');
             $('.direction').text('AV. CAMINOS DEL INKA 1666, Santiago de Surco, Lima');
             $('.telephone').text('(01) 2752738')
          });
     
          $('.selva5').click(function() {
             $('.modal-title').text('La Pishcota');
             $('.direction').text('Av.TOMAS MARSANO 1457, Santiago de Surco, Lima (Lima)');
             $('.telephone').text('SIN REFERENCIA')
          });
     
          $('.selva6').click(function() {
             $('.modal-title').text('Mishinka Amazonica');
             $('.direction').text('AV. REPUBLICA DE PANAMA 6553, Santiago De Surco, Lima, Peru');
             $('.telephone').text('998 237 237')
          });
