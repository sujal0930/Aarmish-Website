<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$number= $_POST['number'];
$to = "sujalagrawal069@gmail.com";
$subject = "Mail From Aarmish Enterprises Ltd.";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Numnber = " . $number . "\r\n Message =" . $message;
$headers = "From: sujalagrawal069@gmail.com" . "\r\n" .
"CC: From: sujalagrawal069@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:contact.html");
?>      