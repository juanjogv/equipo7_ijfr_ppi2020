<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="LogoR3AI.ico" type="image/x-icon"/>
</head>
<body>

<?php

require("../html/registrar.html");

require("para.php");

if(isset($_POST["registrar"])){
    
   try{

        $conexion=mysqli_connect($host,$us,$pass,$bd) or die("Error en la informacion de la base de datos o el host");
    
        $mail=$_POST["mail"];

        $nombre=$_POST["nombre"];
        
        $contraseña=$_POST["contraseña"];
        
        $ccontraseña=$_POST["ccontraseña"];

        //Verificamos Si las contraseñas coinciden
        if($contraseña!=$ccontraseña){

            echo "<script type=text/javascript>
            alert('Las contraseñas no coinciden');
            </script>";

            exit();
        
        }

        //Validamos el largo de la contraseña
        $largo=strlen($contraseña);

        if($largo<7){

            echo "<script type=text/javascript>
            alert('Contraseña con minimo 7 caracteres');
            </script>";

            exit();

        }

        //Ciframos las contraseñas
       $cifrado = password_hash($contraseña, PASSWORD_DEFAULT, array("cost"=>15));

       //Aseguramos el mail para evitar inyeccion
       $p_correo=mysqli_real_escape_string($conexion,$mail);

        $consulta = "select * from usuarios";
    
        $resultado = mysqli_query($conexion,$consulta);
    //Verificamos la existencia del mail
        while($puntero=mysqli_fetch_assoc($resultado)){
    
            if($p_correo==$puntero["mail"]){
    
                echo "<script type=text/javascript>
                alert(' ya existe una cuenta registrada con $mail');
                </script>";

                exit(); 
    
            }
    
        }
    
        $consulta = "INSERT INTO `usuarios` (`id`, `mail`, `nombre`, `contraseña`, `descripcion`, `foto`) VALUES (NULL, '$mail', '$nombre', '$cifrado', NULL, NULL)";
    
       $resultado = mysqli_query($conexion,$consulta);

        echo "<script type=text/javascript>
        alert('Registrado con exito');
        </script>";

    }catch(exception $e){
        
        echo "<script type=text/javascript>
        alert('Error en credenciales de conexion');
        </script>";
    }   
}

?>
    
</body>
</html>
