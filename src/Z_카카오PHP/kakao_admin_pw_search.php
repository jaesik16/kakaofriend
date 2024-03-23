<?

    include_once('./kakao_header.php');

    $adminId = $_POST['adminId'];
    $adminHp = $_POST['adminHp'];

    $sql = "SELECT adminGaib,adminPw FROM kakao_admin_table
            WHERE adminId='$adminId' AND adminHp='$adminHp'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"비밀번호":"'.$result['adminPw'].'", "가입일":"'.$result['adminGaib'].'"}';
    }
    else {
        echo '';
    }

?>