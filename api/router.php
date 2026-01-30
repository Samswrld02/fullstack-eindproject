<?php

include "netland.php";

function router($conn)
{
    //collect json request stream
    $data = json_decode(file_get_contents("php://input"));

    switch ($data->action) {
        case "show":
            //call method to fetch results using dependancy injection
            $test = new Netland($conn);
            $dataArray = $test->showResults();
            //return array to front end
            header("Content-Type: application/json");
            echo json_encode($dataArray);
            exit;
    }
}

router($conn);
