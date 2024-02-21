<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
    require('config.php');
    if($_GET['token'] == '123123'){
        $login = $_GET['login'];
        $pass = $_GET['pass'];
        $rand = rand();
        if($login and $pass != ' '){
            mysqli_query($link,"INSERT INTO `users`(`login`, `pass`, `tg`, `bot_id`) VALUES ('$login','$pass','none',$rand)");
            $info = mysqli_fetch_assoc(mysqli_query($link,"SELECT * FROM `users` WHERE login = '$login' && pass= '$pass'"));
            echo json_encode($info,JSON_FORCE_OBJECT);
        }else{
            echo ('{"msg":"err"}');
        }
    }else{
        echo ('{"msg":"NoAuth"}');
    }