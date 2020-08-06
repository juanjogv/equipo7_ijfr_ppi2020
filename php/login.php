<?php

session_start();

if (isset($_SESSION['user_id'])) {
    header('Location: index.php');
}

require("db.php");

if (!empty($_POST["email"]) && !empty($_POST["password"])) {

    $records = $conn->prepare('SELECT idUsuario, nombreUsuario, emailUsuario, passUsuario FROM usuario WHERE emailUsuario=:emailUsuario');
    $records->bindParam(":emailUsuario", $_POST["email"]);
    $records->execute();
    $result = $records->fetch(PDO::FETCH_ASSOC);
    $password = $_POST['password'];
    $message = "";



    if (count($result) > 0 && password_verify($password, $result['passUsuario'])) {
        $_SESSION["user_id"] = $result["idUsuario"];
        header("Location: index.php");
    } else {
        $message = "Disculpa, los datos no coinciden";
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../layout/styles1.css">
</head>

<body>

    <?php require("../partials/header.php") ?>


    <?php if (!empty($message)) : ?>

        <p><?php echo $message; ?></p>

    <?php endif ?>

    <h1>Login</h1>
    <span>o <a href="signup.php">Signup</a></span>

    <form action="login.php" method="POST">
        <input type="text" name="email" placeholder="Ingresa tu correo">
        <input type="password" name="password" placeholder="Ingresa tu contraseña">
        <input type="submit" value="send">
    </form>
</body>

</html>