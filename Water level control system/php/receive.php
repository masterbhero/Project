<?php 
	include ("config.php");
	$data = $_GET["data"];
	$sql = "insert into water (ml) values ($data)";
	if ($conn->query($sql)) {
		echo "ok";
	}else{
		echo "error";
	}
 ?>