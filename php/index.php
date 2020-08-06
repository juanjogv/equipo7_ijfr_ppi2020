<?php
session_start();

require("db.php");

if (isset($_SESSION["user_id"])) {
    $records = $conn->prepare("SELECT idUsuario, emailUsuario, nombreUsuario, passUsuario FROM usuario where idUsuario = :idUsuario");
    $records->bindParam(":idUsuario", $_SESSION["user_id"]);
    $records->execute();
    $result = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($result) > 0) {
        $user = $result;
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>R3AI</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="layout/styles1.css">
</head>

<body>

    <?php require("../partials/header.php") ?>


    <?php if (!empty($user)) : ?>

        <br> Bienvenido <?php echo $user["nombreUsuario"]; ?>
        <br> Has ingresado correctamente
        <a href="logout.php">Logout</a>

    <?php else : ?>

        <h1>Inicia Sesion o Registrate</h1>
        <a href="login.php">Login</a>
        <a href="signup.php">Signup</a>
    <?php endif; ?>

</body>

</html>