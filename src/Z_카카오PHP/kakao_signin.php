<?
    include_once('./kakao_header.php');

    $userId = $_POST['userId'];
    $userPw = $_POST['userPw'];

    $sql = "SELECT  userId,userName,userHp,userService 
            FROM    kakao_table 
            WHERE   userId='$userId' AND userPw='$userPw'";
    $res = mysqli_query($conn, $sql);

    if( mysqli_num_rows($res) > 0 ){
        $record = mysqli_fetch_array($res);
        echo '{"아이디":"'.$record['userId'].'", "이름":"'.$record['userName'].'","휴대폰":"'.$record['userHp'].'","이용약관동의":"'.$record['userService'].'"}';
    }
    else{
        echo '';
    }

?> 