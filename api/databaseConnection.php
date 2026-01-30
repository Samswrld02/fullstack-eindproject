<?php

//import right config for database
include "config_files/config.php";


class Database
{
    private static $connection;
    private static $dsn;
    private static $user;
    private static $pw;
    private static $options;

    public function __construct($dsn, $user, $pw, $options)
    {
        self::$dsn = $dsn;
        self::$user = $user;
        self::$pw = $pw;
        self::$options = $options;
    }

    public static function createConnection()
    {
        //singleton pattern, only create on connection
        if (self::$connection == null) {
            try {
                self::$connection = new PDO(self::$dsn, self::$user, self::$pw, self::$options);
                //echo "connected to database";
            } catch (PDOException $e) {
                //echo "something went wrong: {$e->getMessage()}}";
            }
        }
        return self::$connection;
    }
}


//set data from config 
new Database($dsn, $user, $pw, $options);

//create database instance
$conn = Database::createConnection();
