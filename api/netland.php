<?php

include "databaseConnection.php";



class Netland
{
    private static $conn;
    public function __construct($conn)
    {
        self::$conn = $conn;
    }

    public function getAll($resource, $id, $orderKey = null, $dir = null)
    {
        //check if its a sorting request and return result
        if ($orderKey) {
            $result = $this->OrderAll($resource, $orderKey, $dir);
            return $result;
        }

        $conn = self::$conn;

        //map resource either series or movies
        $series = $resource;

        //if id is given create substmt
        if (!isset($id)) {
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

    private function validateOrderRequest($orderKey)
    {
        //validate order key
        $allowedOrders = ["title", "rating", "length_in_minutes"];
        if (!in_array($orderKey, $allowedOrders)) {
            throw new Exception("not a valid sort!");
        }
        return $orderKey;
    }

    public function orderAll($resource, $orderKey, $dir)
    {
        //function to sort by key given
        $orderKey = $this->validateOrderRequest($orderKey);

        $conn = self::$conn;

        //sql statement
        $sql = "SELECT * FROM {$resource} ORDER BY {$orderKey} {$dir}";

        //prepare statement and execute
        $stmt = $conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function update($resource, $id, $array)
    {
        $result = [];
        $conn = self::$conn;

        //loop through keys to dynamically build prepared statement
        foreach ($array as $column => $item) {
            $string = "$column = :$column";
            array_push($result, $string);
        }

        //turn array into query
        $subStmt = implode(", ", $result);

        //prepared data, append id to the data array
        $array['id'] = $id;
        $data = $array;

        //sql statement
        $sql = "UPDATE {$resource} SET {$subStmt} WHERE id = :id";

        //prepared statement
        $stmt = $conn->prepare($sql);
        $stmt->execute($data);

        return ["update" => "success"];
    }
}
