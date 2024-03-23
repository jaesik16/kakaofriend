<?
    include_once('./kakao_header.php');

    $idx            = $_POST['idx']; 

    $sql = "DELETE FROM kakao_notice_table 
            WHERE idx = '$idx'"; 
    $result = mysqli_query($conn,$sql);
    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>