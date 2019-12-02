<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if( isset($_GET['name']) && !empty($_GET['name']) ){

    $dsn = 'mysql:dbname=ajax;host=localhost';
    $user = 'root';
    $password = 'root';

    $pdo = new PDO($dsn, $user, $password);

    $name = ucfirst(strtolower($_GET['name']));
    $sql = "select id from `user` where `name` = ".$pdo->quote($name);
    $stmt = $pdo->query($sql);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    $data = ['exists' => isset($user['id']) ];

} else {

    header("HTTP/1.1 404 Not Found");

    $data = [];

}

echo json_encode($data);