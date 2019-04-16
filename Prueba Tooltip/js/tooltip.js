$(document).ready(function(){
    //Capturar hover
    $('a').hover(function(){
        //Hover In

        //Guardar atributo title
        var titulo = $(this).attr('title'),
            fondo = $(this).data('background');

        //Guardar titulo en atributo data y eliminar el original
        $(this).data('titulo', titulo).removeAttr('title');

        //Añadir tooltip personalizado
        $("<p class='tooltip'></p>")
        .text(titulo)
        .css('background-color', fondo)
        .appendTo('body')
        .fadeIn('slow');
    }, function(){
        //Hover Out

        //Reponer el titulo nativo
        $(this).attr('title', $(this).data('titulo'));

        //Eliminar tooltip personalizado
        $('.tooltip').remove();
    }).mousemove(function(evento){
        //Captura posición X e Y del ratón sobre el elemento del tooltip
        var ratonX = evento.pageX + 20,
            ratonY = evento.pageY + 10;

        //Tooltip se mueve junto con el puntero
        $('.tooltip').css({
            top : ratonY,
            left : ratonX
        });
    });
});