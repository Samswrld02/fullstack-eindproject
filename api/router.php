<?php

require_once "netland.php";
require_once "databaseConnection.php";

//main router for receiving requests
function router($conn)
{

    //collect request method for basic crud functionality
    $method = $_SERVER['REQUEST_METHOD'];
    try {
        //check resources and sanitize
        $resources = getResources();
        $resource = $resources[0];
        $id = $resources[1];
        $order = $resources[2];


        switch ($method) {
            case "GET":
                //run method for quering results
                $data = new Netland($conn);
                $data = $data->getAll($resource, $id, $order);
                header("Content-Type: application/json");
                echo json_encode($data);
                break;
            case "PUT":
                break;
            case "DELETE":
                break;
            case "POST":
                break;
        }
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

//middleware
function allowedResource($resource)
{
    //allowedResources 
    $allowedResources = ["series", "movies"];
    if (!in_array($resource, $allowedResources)) {
        if ($resource != null) {
            throw new Exception("resource doesn't exist");
        } else {
            //stop script if no resource if given
            exit;
        }
    }
}

//collect resource info
function getResources()
{
    $path = $_SERVER['PATH_INFO'];
    $path = trim($path, "/");

    //seperate path
    $resourceInfo = explode("/", $path);

    //check if resources exist
    $resource = $resourceInfo[0] ?? null;
    $id = $resourceInfo[1] ?? null;
    //pull sorting request from query string
    $sort = $_GET['sort'] ?? null;
    $sort = trim($sort, "\n");

    $resources = [$resource, $id, $sort];

    //check if resource is allowed
    allowedResource($resource);

    return $resources;
}


router($conn);
