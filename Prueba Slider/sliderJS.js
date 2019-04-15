$('document').ready(function(){
    //Buscar elementos necesarios en el DOM
    var $lis = $('li');
    var $images = $lis.find('img');
    var position = 0;
    var cantidad = $images.length;

    //Ocultar imágenes
    $lis.hide();

    //Añadir imágenes como fondo de su parten (li)
    $images.each(function(index, imagenElement){
        $lis.eq(index).css({
            'background-image': 'url(' + $(imagenElement).attr('src') + ')',
            'bacground-size': 'cover',
            'background-position': 'center center',
            'position': 'absolute'
        });
        $(imagenElement).remove();
    });

    //Mostrar primera imagen
    $lis.eq(position).fadeIn();

    //Event Listener
    $('#derecha').click(function(event){
        position += 1;
        if(position > cantidad - 1){
            position = 0;
        }
        cambiarFoto();
    });

    $('#izquierda').click(function(event){
        position -= 1;
        if(position < 0){
            position = cantidad - 1;
        }
        cambiarFoto();
    });

    function cambiarFoto(){
        $lis.hide().eq(position).fadeIn();
    }
});