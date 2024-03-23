<?

    include_once('./kakao_header.php');

    $adminName = $_POST['adminName'];
    $adminHp = $_POST['adminHp'];

    $sql = "SELECT adminName,adminId,adminGaib FROM kakao_admin_table
            WHERE adminName='$adminName' AND adminHp='$adminHp'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"이름":"'.$result['adminName'].'","아이디":"'.$result['adminId'].'", "가입일":"'.$result['adminGaib'].'"}';
    }
    else {
        echo '';
    }

?>