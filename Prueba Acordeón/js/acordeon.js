$(document).ready(function(){
    //Mostrar contenido del primer panel
    $('.panel_contenido').first().slideDown();

    //Event Listener
    $('.panel_cabecera').on('click', function(evento){
        $('.panel_contenido').not(this).each(function(){
            $(this).slideUp();
        });
        $(this).siblings('.panel_contenido').slideToggle();
    });
});