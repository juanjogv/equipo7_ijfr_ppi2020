<?php
session_start();

if(!isset($_SESSION["mail"])){
    header("location:../ingresar/ingresar.html");
}
if(!isset($_SESSION["id"])){
    header("location:../ingresar/ingresar.html");
}
$id=$_SESSION["id"];
$mail=$_SESSION["mail"];


?>