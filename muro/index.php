<?php
session_start();

if(!isset($_SESSION["mail"])){
    header("location:../ingresar/ingresar.html");
}
if(!isset($_SESSION["id"])){
    header("location:../ingresar/ingresar.html");
}
$idp=$_SESSION["id"];
function imprimir($conexion){
    $consulta="SELECT * FROM `muro` ORDER BY fecha DESC";
          $r=mysqli_query($conexion,$consulta);
          while($puntero=mysqli_fetch_row($r)){
            ?>
            <div id="impresion">
              <p><?php echo "$puntero[1]"."<br>";?></p>
            </div>
            <?php
          }
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>R3AI</title>
  <link rel="icon" href="LogoR3AI.ico" type="image/x-icon" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <!--<link rel="StyleSheet" href="style.css" type="text/css">-->
  <style>
  #impresion{
    width:50%;
    margin:5px ;
    padding: 10px;
    border:5px solid gray;
    border-radius: 5px;
    height: auto;
    word-wrap: break-word;
    
  }

  .#comentarios{
    width:50%;
    border:5px solid gray;
    margin:2% 30%;
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
        <a class="nav-item nav-link " href="../perfil/index.php">Perfil<span
            class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="../cerrar.php">Cerrar Sesion</a>

      </div>
    </div>
  </nav>
  <div class="container-fluid" id="comentarios">
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-fluid">
<form action="index.php" method="POST">
          <div class="form-group">
            <p>Comentario</p>
            <input type="text" class="form-control" name="comentario" rows="10" cols="40" required>
            <br>
            <button type="submit" class="btn btn-primary" name="boton" value="comentar">Comentar</button>
            <br>
        </form>
      </div>
    </div>
  </div>
<?php
require("../para.php");
$conexion=mysqli_connect("localhost","root","root","r3ai")or die("ERROR EN LOS DATOS DEL HOSTING");
if(isset($_GET['k'])){
if($_GET['k']==3){
imprimir($conexion);
}else{
echo "ERROR";
}
}
if(isset($_POST["boton"])){
	$acum = 0;
//echo "hola mundo";
$comentario=$_POST["comentario"];
$consulta="SELECT * FROM muro";
$resultado=mysqli_query($conexion,$consulta);
while($puntero=mysqli_fetch_row($resultado)){
$acum=$acum+1;
}
$id=$acum+1;
$consulta="SELECT * FROM muro WHERE id='$id'";
$resultado=mysqli_query($conexion,$consulta);
$puntero = mysqli_fetch_row($resultado);
if($comentario != $puntero[1]){
$consulta="INSERT INTO muro VALUES(NULL,'$comentario',CURRENT_TIMESTAMP,'$idp')";
mysqli_query($conexion,$consulta);
}
imprimir($conexion);
}
?>

</body>

</html>
