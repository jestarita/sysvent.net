<?php

$errorMSG = "";

// Nombres
if (empty($_POST["nombre_txt"])) {
    $errorMSG = "Se Requieren los nombres ";
} else {
    $nombres = $_POST["nombre_txt"];
}

// Correo
if (empty($_POST["email_txt"])) {
    $errorMSG .= "Se Requiere el correo";
} else {
    $email = $_POST["email_txt"];
}

// Asunto
if (empty($_POST["asunto_txt"])) {
    $errorMSG .= "Defina la tematica ";
} else {
    $asunto = $_POST["asunto_txt"];
}

// Mensaje
if (empty($_POST["mensaje_txt"])) {
    $errorMSG .= "Por favor describa el asunto";
} else {
    $mensaje = $_POST["mensaje_txt"];
}


$EmailTo = "jestaritacardozo@gmail.com";
$Subject = $asunto;

// prepare email body text
$Body = "";
$Body .= "Nombres: ";
$Body .= $nombres;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Asunto: ";
$Body .= $Subject;
$Body .= "\n";
$Body .= "Descripcion: ";
$Body .= $mensaje;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Exito";
}else{
    if($errorMSG == ""){
        echo "Hubo un error al enviar";
    } else {
        echo $errorMSG;
    }
}

?>