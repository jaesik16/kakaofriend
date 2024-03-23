<?
    include_once('./kakao_header.php');

    $userId         = $_POST['userId'];          
    $userPw         = $_POST['userPw'];          
    $userName       = $_POST['userName'];        
    $userHp         = $_POST['userHp'];                 
    $userService    = $_POST['userService'];                 
    
    $sql = "INSERT INTO kakao_table (userId,userPw,userName,userHp,userService) 
            VALUES ('$userId','$userPw','$userName','$userHp','$userService')";
    $result = mysqli_query($conn,$sql);


    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>