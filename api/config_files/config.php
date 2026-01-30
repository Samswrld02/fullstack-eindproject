<?php

//setting up pdo connection
$host = 'localhost';
$db = 'netland';
$user = 'bit_academy';
$pw = 'bit_academy';
$charset = 'utf8mb4';

//setting up dsn
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$options =
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ];
