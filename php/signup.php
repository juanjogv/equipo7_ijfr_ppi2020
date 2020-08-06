<?php
require("db.php");

$message = "";

if (!empty($_POST["email"]) && !empty($_POST["name"]) && !empty($_POST["password"])) {


    $password = $_POST["password"];

    $sql = "INSERT INTO usuario (nombreUsuario, passUsuario, emailUsuario) VALUES (:nombreUsuario, :passUsuario, :emailUsuario)";

    $stmt = $conn->prepare($sql);

    $stmt->bindParam(":nombreUsuario", $_POST["name"]);
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
    $stmt->bindParam(":passUsuario", $password);
    $stmt->bindParam(":emailUsuario", $_POST["email"]);

    if ($stmt->execute()) {
        $message = "Tu cuenta ha sido creada con exito";
    } else {
        $message = "No se ha podido registrar su cuenta";
    }
} else {
    $message = "Llena los campos";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../layout/styles1.css">
</head>

<body>
    <?php require("../partials/header.php") ?>

    <?php if (!empty($message)) : ?>

        <p><?php echo $message; ?></p>

    <?php endif ?>

    <h1>Signup</h1>
    <span>o <a href="login.php">login</a></span>

    <form action="signup.php" method="POST">
        <input type="text" name="name" placeholder="Ingresa tu nombre">
        <input type="text" name="email" placeholder="Ingresa tu correo">
        <input type="password" name="password" placeholder="Ingresa tu contraseña">
        <input type="password" name="confirm_password" placeholder="confirma tu contraseña">
        <input type="submit" value="send">

    </form>
</body>

</html>