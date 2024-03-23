<?

    include_once('./kakao_header.php');

    $userName = $_POST['userName'];
    $userHp = $_POST['userHp'];

    $sql = "SELECT userName,userId,userGaib FROM kakao_table
            WHERE userName='$userName' AND userHp='$userHp'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"이름":"'.$result['userName'].'","아이디":"'.$result['userId'].'", "가입일":"'.$result['userGaib'].'"}';
    }
    else {
        echo '';
    }

?>