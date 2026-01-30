<?php

include "databaseConnection.php";



class Netland
{
    private static $conn;
    public function __construct($conn)
    {
        self::$conn = $conn;
    }

    public function showResults()
    {
        $conn = self::$conn;
        $sql = "SELECT title, rating  FROM series";
        $sql1 = "SELECT titel, duur FROM films";
        $result0 = [];
        $result1 = [];
        $result = [];
        $x = 0;

        foreach ($conn->query($sql) as $row) {
            $x++;
            array_push($result0, $row);
        }

        //store results of first query as nested array
        array_push($result, $result0);
        foreach ($conn->query($sql1) as $row) {
            $x++;
            array_push($result1, $row);
        }

        array_push($result, $result1);
        //collect results
        return $result;
    }
}
