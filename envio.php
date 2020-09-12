<?php 
$destino = "nataliagisellemachado@gmail.com";
if(isset($_POST['msg'])){
        $name = $_POST['nombre'];
        $asunto = $_POST['asunto'];
        $remitente = $_POST['email'];
        $msg = $_POST['msg'];
        
        $cuerpo = "Nombre: ".$_POST['nombre'] ." \r\n";
        $cuerpo .= "Asunto: ".$_POST['asunto'] ." \r\n";
        $cuerpo .= "Email: ".$_POST['email'] ." \r\n";
        $cuerpo .= "Mensaje: ".$_POST['msg'] ." \r\n";
        
        $headers  = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/plain; charset=utf-8\n";
        $headers .= "X-Priority: 3\n";
        $headers .= "X-MSMail-Priority: Normal\n";
        $headers .= "X-Mailer: php\n";
        $headers .= "From: \"".$_POST['nombre']." \" <".$remitente.">\n";
        
        mail($destino, $asunto, $cuerpo, $headers);
    };
?>