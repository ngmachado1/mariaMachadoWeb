$(document).ready(function () {
  $("#formularioContacto").bind("submit", function () {
    let btnEnviar = $("#btnEnviar");
    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
    //   beforeSend: function(data) {
    //     /*
    //      * Esta función se ejecuta durante el envió de la petición al
    //      * servidor.
    //      * */
        
    //     btnEnviar.text("Enviando");
    //     //btnEnviar.val("Enviando"); // Para input de tipo button
    //     btnEnviar.attr("disabled", "disabled");
    //   },
    //   complete: function(data) {
    //     /*
    //      * Se ejecuta al termino de la petición
    //      * */
    //     btnEnviar.val("Enviar formulario");
    //     btnEnviar.removeAttr("disabled");
    //   },
      success: function (data) {
        /*
         * Se ejecuta cuando termina la petición y esta ha sido
         * correcta
         * */
        btnEnviar.text(data);
      },
      error: function (data) {
        /*
         * Se ejecuta si la peticón ha sido erronea
         * */
        alert("Problemas al tratar de enviar el formulario");
      },
    });
    // Nos permite cancelar el envio del formulario
    return false;
  });
});

//https://webdeprueba.netlify.app/
