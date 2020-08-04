<?php

session_start();

if(!isset($_SESSION["mail"])){

    header("location:/ModeloAltaFidelidad/ingresar/ingresar.html");
}

session_destroy();

header("location:/ModeloAltaFidelidad/ingresar/ingresar.html");

?>