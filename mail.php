<?php 

require('src/autoload.php');

$siteKey = '6Lcx7xoTAAAAAEHZ33z4lBvGtnIsTBDByUoZ6s3W';
$secret = '6Lcx7xoTAAAAAPwAtLshNXYE7_hEU_Jcz-t18uBv';

$recaptcha = new \ReCaptcha\ReCaptcha($secret);

$gRecaptchaResponse = $_POST['g-recaptcha-response']; //google captcha post data
$remoteIp = $_SERVER['REMOTE_ADDR']; //to get user's ip

$recaptchaErrors = ''; // blank varible to store error

$resp = $recaptcha->verify($gRecaptchaResponse, $remoteIp); //method to verify captcha
if ($resp->isSuccess()) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$formcontent="From: $name $email \n Message: $message";
	$recipient = "rhodqdxl@rhodesiajackson.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header('Location: thank_you.html');
	exit();}

	 else {
   $recaptchaErrors = $resp->getErrorCodes(); // set the error in varible
}



?>