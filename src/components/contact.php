<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['address'];
    $visitor_number = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['Massage'];
    
    $email_from = 'phillipa.khoza@itthynk.co.za';

    $email_subject = "$subject";

    $email_body = "Name: $name.\n".
                    "Phone number: $visitor_number.\n".
                    "Email Address: $visitor_email.\n".
                    "Message: $message.\n";
    
    $to = "phillipantonk@gmail.com";

    $headers = "From: $email_from \r\n"; 
    $headers .= "Reply-To: $visitor_email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);
    header("Location: Home.js");
?>