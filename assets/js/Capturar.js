$(document).ready(function () {
    $("[name=btn_enviar]").on('click', Enviar_datos);


    $("#formulario_contacto").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Formulario invalido

            $.notify({
                message: 'Hubo un error al enviar'
            }, {
                type: 'danger',
                delay: 3000,
                placement: {
                    align: 'right'
                },
                z_index: 99999,
            });

        } else {
            // Todo salio correctamente
            event.preventDefault();           
        }
    });
});


function Enviar_datos() {
    var nombres = $("#txt_nombres").val();
    var email = $("#txt_email").val();
    var asunto = $("#txt_asunto").val();
    var mensaje = $("#txt_descripcion").val();
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/);

    if (nombres == "") {
        $.notify({
            message: 'Por favor, ingrese el nombre'
        }, {
            type: 'danger',
            delay: 3000,
            placement: {
                align: 'right'
            },
            z_index: 99999,
        });
        $("#txt_nombres").focus();
        return false;
    } else if (caract.test(email) == false || email == "") {
        $.notify({
            message: 'Por favor, ingrese bien su email.'
        }, {
            type: 'danger',
            delay: 3000,
            placement: {
                align: 'right'
            },
            z_index: 99999,
        });
        $("#txt_email").focus();
        return false;
    } else if (asunto == "") {

        $.notify({
            message: 'por favor, ingrese el asunto a tratar'
        }, {
            type: 'danger',
            delay: 3000,
            placement: {
                align: 'right'
            },
            z_index: 99999,
        });
        $("#txt_asunto").focus();
        return false;

    } else if (mensaje == "") {

        $.notify({
            message: 'por favor, defina el mensaje'
        }, {
            type: 'danger',
            delay: 3000,
            placement: {
                align: 'right'
            },
            z_index: 99999,
        });
        $("#txt_descripcion").focus();
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "Enviar.php",
            data: "nombre_txt=" + nombres + "&email_txt=" + email + "&asunto_txt=" + asunto + "&mensaje_txt=" + mensaje,
            success: function (resultado) {
                if (resultado == "Exito") {
                    succeso();
                    return false;
                } else {
                    $.notify({
                        message: 'Hubo un error al enviar'
                    }, {
                        type: 'danger',
                        delay: 3000,
                        placement: {
                            align: 'right'
                        },
                        z_index: 99999,
                    });
                }

            }
        });
    } //fin else
} //fin metodo


function succeso() {

    $("#formulario_contacto")[0].reset();
    mensaje(true, "Mensaje enviado Exitosamente");
    

}



function mensaje(confirmar, resultado) {
    if (confirmar) {
        $.notify({
            message: resultado
        }, {
            type: 'success',
            delay: 3000,
            placement: {
                align: 'right'
            },
            z_index: 99999,
        });
    }

}
