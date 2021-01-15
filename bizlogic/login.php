<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    include("./mySQLConnection.php");

    $userEmail = $_GET["email"];
    $userPassword = $_GET["password"];

    if(!isset($userEmail) || !isset($userPassword)) {
        echo json_encode(
            array(
                'message' => 'Please enter valid email and password'
            )
        );
    } else {
        $query ="select * from user where email='$userEmail' AND password='$userPassword'";
        $result = mysqli_query($con, $query);
        $rows = mysqli_num_rows($result);
    
        if($rows == 1) {
            echo json_encode(
                array(
                    'message' => 'Login successefully!'
                )
            );
        } else {
            echo json_encode(
                array(
                    'message' => 'Invalid credentials'
                )
            );
        }
    }
?>