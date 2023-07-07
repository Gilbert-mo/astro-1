<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $nombre = $_POST["apellido"];
  $email = $_POST["email"];
  $nombre = $_POST["tel"];
  $mensaje = $_POST["mensaje"];
  
  $destinatario = "gilbertmatosortiz@gmail.com"; // Reemplaza con tu dirección de correo electrónico
  
  $asunto = "Nuevo mensaje del formulario de contacto";
  $cuerpo = "Nombre: " . $nombre . "\n";
  $cuerpo = "Apellido: " . $apellido . "\n";
  $cuerpo .= "Email: " . $email . "\n";
  $cuerpo .= "Teléfono: " . $tel . "\n";
  $cuerpo .= "Mensaje: " . $mensaje;
  
  // Envío de correo electrónico
  if (mail($destinatario, $asunto, $cuerpo)) {
    echo "El mensaje se envió correctamente.";
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
