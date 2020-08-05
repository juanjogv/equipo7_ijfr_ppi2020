<?php

session_start();

if(!isset($_SESSION["mail"])){
    header("location:../html/ingresar.html");
}
if(!isset($_SESSION["id"])){
    header("location:../html/ingresar.html");
}



function AbrirConexion(){
    $conexion=mysqli_connect("localhost","root","root","r3ai");
    return $conexion;
}


function CerrarConexion($conexion){
    mysqli_close($conexion);
}

?>