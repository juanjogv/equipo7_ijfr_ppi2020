<?php

session_start();

if(!isset($_SESSION["mail"])){

    header("location:../html/ingresar.html");
}

session_destroy();

header("location:../html/ingresar.html");

?>