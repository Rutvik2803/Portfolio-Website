<?php

$Full_Name = $_POST['firstName'];
$email = $_POST['lastName'];
$Phone_Number = $_POST['gender'];
$Subject = $_POST['email'];
$Your_Message = $_POST['password'];

$conn=new mysqli('localhost','root','','portfolio email');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into email(Full_Name,email,Phone_Number,Subject,Your_Message) values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $Full_Name,$email,$Phone_Number,$Subject,$Your_Message);
    $execval = $stmt->execute();
    echo $execval;
    echo "Message sent successfully...";
    $stmt->close();
    $conn->close();
}
?>

