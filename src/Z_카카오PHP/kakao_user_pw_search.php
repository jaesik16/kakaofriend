<?

    include_once('./kakao_header.php');

    $userId = $_POST['userId'];
    $userHp = $_POST['userHp'];

    $sql = "SELECT userGaib,userPw FROM kakao_table
            WHERE userId='$userId' AND userHp='$userHp'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"비밀번호":"'.$result['userPw'].'", "가입일":"'.$result['userGaib'].'"}';
    }
    else {
        echo '';
    }

?>