<?php

include "databaseConnection.php";



class Netland
{
    private static $conn;
    public function __construct($conn)
    {
        self::$conn = $conn;
    }

    public function getAll($resource, $id)
    {
        $conn = self::$conn;

        //map resource either series or movies
        $series = $resource;
        
        //if id is given create substmt
        if (!isset($id)){
            $subStmt = "";
            $data = null;
        } else {
            $subStmt = "WHERE id = :id";
            $data = ["id" => $id];
        }

        //create pdo query
        $sql = "SELECT * FROM {$series} {$subStmt}";
        //prepared statement
        $stmt = $conn->prepare($sql);

        $stmt->execute($data);
        
    
        return $stmt->fetchAll();
    }
}
