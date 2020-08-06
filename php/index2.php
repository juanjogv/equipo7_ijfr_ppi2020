<?php
session_start();

if(!isset($_SESSION["mail"])){
    header("location:../html/ingresar.html");
}
if(!isset($_SESSION["id"])){
    header("location:../html/ingresar.html");
}
$id=$_SESSION["id"];
$mail=$_SESSION["mail"];

/*function imprimir(){

}*/

?>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<title>Perfil</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
 integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<style type="text/css">
.descripcion{
background:red;
}

</style>
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="../index.html">R3AI</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link " href="../registrar/registrar.html">Perfil<span
            class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="../cerrar.php">Cerrar Sesion</a>

      </div>
    </div>
  </nav>

<div class="container-fluid" id="descripcion">
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-fluid">
<form action="index.php" method="POST">
          <div class="form-group">
            <p>Cambiar descripcion</p>
            <textarea type="text" class="form-control" name="descripcion" rows="10" cols="70" required></textarea>
            <br>
            <button type="submit" class="btn btn-primary" name="boton" value="comentar">Establecer</button>
<br>
</div>
        </form>
      </div>
    </div>
  </div>

<?php

require("para.php");
$conexion=mysqli_connect("localhost","root","root","r3ai");

//Para editar o crear la descripcion
if(isset($_POST['boton'])){
$descripcion=$_POST['descripcion'];
$consulta1="UPDATE usuarios SET descripcion = '$descripcion' WHERE usuarios.mail = '$mail'";
mysqli_query($conexion,$consulta1);
}


//para consultar las descripciones
$consulta="SELECT *  FROM usuarios WHERE id = '$id' ";
$resultado=mysqli_query($conexion,$consulta);
$puntero=mysqli_fetch_row($resultado);
?>
<div>
<h3><?php echo "$puntero[2] " . "<br>";?></h3>
</div>
<?php
if($puntero[4]==NULL){
?>
<div class="d">
	<p>No hay descripcion</p>
</div>
<?php
}else{
  ?>
  <div class="d">
  <h3>Descripcion</h3>
  <p><?php echo "$puntero[4]"."<br>";?></p>
  </div>
  <?php
}
?>

<h3>Foto de perfil</h3>
<?php
if($puntero[5]==NULl){
?>
<div>
        <a href="avatar.php">Seleccionar avatar</a>
</div>
<?php
}else{
 ?>
<div>
	<p>hola</p>
</div>
<?php
}

?>





</body>
</html>
