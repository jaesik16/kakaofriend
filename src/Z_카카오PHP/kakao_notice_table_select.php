<?
    include_once('./kakao_header.php');

    $sql = "SELECT * FROM kakao_notice_table ORDER BY nDate DESC";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res)>0){
        $arr = array();
        while($row = mysqli_fetch_array($res)){
            $nSubject  = str_replace("&#039;", "'", $row['nSubject'] );
            $nContent = str_replace("&#039;", "'", $row['nContent'] );

            $nSubject  = str_replace("&apos;", "'", $nSubject );
            $nContent = str_replace("&apos;", "'", $nContent );

            $nSubject  = str_replace("&quot;", "\"", $nSubject );
            $nContent = str_replace("&quot;", "\"", $nContent );

            $nSubject  = str_replace("&lt;", "<", $nSubject );
            $nContent = str_replace("&lt;", "<", $nContent );

            $nSubject  = str_replace("&gt;", ">", $nSubject );
            $nContent = str_replace("&gt;", ">", $nContent );

            $nSubject  = str_replace("&nbsp;", " ", $nSubject );
            $nContent = str_replace("&nbsp;", " ", $nContent );

            // $nSubject = nl2br($nSubject);
            // $nContent = nl2br($nContent);
            
            // $nSubject  = str_replace("<br />", "\n", $nSubject );
            // $nContent = str_replace("<br />", "\n", $nContent );


            array_push($arr,array(
                '번호'     => $row['idx'],
                '제목'    => $nSubject,
                '내용'    => $nContent,
                '작성자'  => $row['nName'],
                '아이디'  => $row['nId'],
                '조회수'  => $row['nHit'],
                '작성일'  => $row['nDate']
            ));
        }
    }

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;
    
?>