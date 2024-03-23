<?
    
    include_once('./kakao_header.php');

    $SQL ="CREATE TABLE kakao_table (
        `userId`        VARCHAR(16)     NOT NULL,    
        `userPw`        VARCHAR(16)     NOT NULL,        
        `userName`      VARCHAR(50)     NOT NULL,      
        `userHp`        VARCHAR(13)     NOT NULL,  
        `userService`   VARCHAR(1000)   NOT NULL,      
        `userGaib`      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(`userId`)
    )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";



    $result = mysqli_query($conn,$SQL);
/*     if($result==false){
        echo "테이블 접속 실패";
    }
    else{
     echo "테이블 접속 성공";
    } */
?>


   