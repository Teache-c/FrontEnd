$(document).ready(function () {
    
    $("#form").submit(function (e) {
        e.preventDefault();
        var user = $("#user-name").val();
        var correo = $("#email").val();
        var llaves = $("#password").val();
        var msg = "";
        let enviar = false
        /* Validacion: Cantidad de caracteres */
        if (user.trim().length < 4 || user.trim().length > 12) {
            msg += "<p class='text-muted'>" + "El Nickname debe contener entre 4 y 12 caracteres" + "</p>";
            enviar = true;
        }
        /* Validacion: Utilizacion de mayuscula */
        var letra = user.charAt(0);
        if (!isMayus(letra)) {
            msg += "<p class='text-muted'>" + "La primera letra del Nickname debe estar en Mayuscula" + "</p>";
            enviar = true;
        }
        /*  Validacion: Email */
        if (correo.indexOf('@', 0) == -1 || correo.indexOf('.', 0) == -1) {
            msg += "<p class='text-muted'>" + "El correo electrónico introducido no es valido." + "</p>";
            enviar = true;
        }
        /* Validacion: Contraseña */
        if (llaves.trim().length < 6 || llaves.trim().length > 8) {
            msg += "<p class='text-muted'>" + "La contraseña debe contener entre 6 y 8 caracteres" + "</p>";
            enviar = true;
        }

        var letra = llaves.charAt(0);
        if (!isMayus(letra)) {
            msg += "<p class='text-muted'>" + "La primera letra de la contraseña debe estar en Mayuscula" + "</p>";
            enviar = true;
        }
        /* Evaluacion de bandera para enviar el formulario */
        if (enviar) {
            $("#warning").html(msg);
        }
        else {
            $("#warning").html("Ahora estás en nuestros registros °-°...")
        }
    });

    function isMayus(letra) {
        console.log("letra inicial:", letra);
        console.log("Nombre Valido");
        console.log("La letra en mayuscula:", letra.toUpperCase());
        if (letra == letra.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    };
    
    
    
    
});


