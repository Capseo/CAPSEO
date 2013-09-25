<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$text = trim($_POST['text']);
$to="anji@doz.com";

$headers .= 'From: '.$name.' <'.$email.'>' . "\r\n";

if(mail('contact@capseo.com', 'Contact from capseo.com', $text, $headers)){
	echo 1;
}

?>