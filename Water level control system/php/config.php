<?php
$servername = "206.189.157.111";
$username = "root";
$password = "Plls17357";
$dbname = "watercontrol";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

mysqli_set_charset($conn,"utf8");

?>