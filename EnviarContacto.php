<?php 
$destino = "nataliagisellemachado@gmail.com";
if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['asunto']) && !empty($_POST['msg']) && !empty($_POST['email'])){
        $name = $_POST['nombre'];
        $asunto = $_POST['asunto'];
        $remitente = $_POST['email'];
        $msg = $_POST['mensaje'];
        $headers  = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/plain; charset=utf-8\n";
        $headers .= "X-Priority: 3\n";
        $headers .= "X-MSMail-Priority: Normal\n";
        $headers .= "X-Mailer: php\n";
        $headers .= "From: \"".$_POST['nombre']." \" <".$remitente.">\n";
        
        mail($destino, $asunto, $msg, $headers);
    }
}
