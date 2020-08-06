<?php

$server = "r3ai.c7exklmwsl6r.us-east-1.rds.amazonaws.com";
$username = "root";
$password = "chBu8rlb3Bjakoz0q518";
$database = "r3ai";

try {
    $conn = new PDO("mysql:host=$server;dbname=$database", $username, $password);
} catch (PDOException $error) {
    die("Conexion fallida: " . $error->getMessage());
}
