$(function() {
    var $tabla = $('#tabla_editable tbody');
    
    // Agregar una nueva fila a la tabla
    function agregar_fila() {
      $tabla.append('<tr><td contenteditable="true"></td><td contenteditable="true"></td></tr>');
    }
    
    // Agregar una fila cuando se hace clic en el botón "Agregar"
    $('#boton_agregar').click(function() {
      agregar_fila();
    });
    
    // Agregar una fila cuando se presiona la tecla Enter en la última celda de la última fila
    $tabla.on('keydown', 'tr:last-child td:last-child', function(event) {
      if (event.keyCode === 13) {
        agregar_fila();
      }
    });
  });
  