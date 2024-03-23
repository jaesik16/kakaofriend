import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './scss/sub8Notice.scss'
import { Link } from 'react-router-dom';

export default function Sub8NoticeAdminViewComponent(){

    const navigate = useNavigate()

    const [btn,setBtn] = React.useState({
        isBtn1:true,
        isBtn2:false,
        isBtn3:false,
        isBtn4:false,
        isBtn5:false,
        isBtn6:false,
        isBtn7:false,
        isBtn8:false
    })

    const [state,setState] = React.useState({
        공지사항:[]
    })


    const onClick1=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:true,
            isBtn2:false,
            isBtn3:false,
            isBtn4:false,
            isBtn5:false,
            isBtn6:false,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick2=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:true,
            isBtn3:false,
            isBtn4:false,
            isBtn5:false,
            isBtn6:false,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick3=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:true,
            isBtn4:false,
            isBtn5:false,
            isBtn6:false,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick4=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:false,
            isBtn4:true,
            isBtn5:false,
            isBtn6:false,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick5=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:false,
            isBtn4:false,
            isBtn5:true,
            isBtn6:false,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick6=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:false,
            isBtn4:false,
            isBtn5:false,
            isBtn6:true,
            isBtn7:false,
            isBtn8:false
        })
    }
    const onClick7=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:false,
            isBtn4:false,
            isBtn5:false,
            isBtn6:false,
            isBtn7:true,
            isBtn8:false
        })
    }
    const onClick8=(e)=>{
        e.preventDefault();
        setBtn({
            isBtn1:false,
            isBtn2:false,
            isBtn3:false,
            isBtn4:false,
            isBtn5:false,
            isBtn6:false,
            isBtn7:false,
            isBtn8:true
        })
    }
    React.useEffect(()=>{
        axios({
            url: 'http://answotlr12.dothome.co.kr/kakao/kakao_notice_table_select.php',
            method: 'GET'
        })
        .then((res)=>{
            let 공지사항 = state.공지사항
            if(res.status===200){
                if(res.data!==null){
                    공지사항 = res.data
                }
                setState({
                    ...state,
                    공지사항:공지사항
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onClickNotice=(e,item)=>{
        e.preventDefault();
        navigate('/sub8NoticeUpdate',{
            state:{
                제목:item.제목,
                내용:item.내용,
                번호:item.번호
            }
        })
    }

    return (
        <div id='sub8Notice'>
            <div className="container">
                <div className="title">
                    <span className='title-admin-text'>관리자 공지사항 수정,삭제</span>
                </div>
                <ul className='notice-header'>
                        <li onClick={onClick1}>
                            <a className={btn.isBtn1?'on':''} href="">자주하는 질문</a>
                        </li>
                        <li onClick={onClick2}>
                            <a className={btn.isBtn2?'on':''} href="">이용 방법</a>
                        </li >
                        <li onClick={onClick3}>
                            <a className={btn.isBtn3?'on':''} href="">서비스 안내</a>
                        </li>
                        <li onClick={onClick4}>
                            <a className={btn.isBtn4?'on':''} href="">결제</a>
                        </li>
                        <li onClick={onClick5}>
                            <a className={btn.isBtn5?'on':''} href="">배송</a>
                        </li>
                        <li onClick={onClick6}>
                            <a className={btn.isBtn6?'on':''} href="">교환/반품/환불</a>
                        </li>
                        <li onClick={onClick7}>
                            <a className={btn.isBtn7?'on':''} href="">분쟁해결기준</a>
                        </li>
                        <li onClick={onClick8}>
                            <a className={btn.isBtn8?'on':''} href="">기타</a>
                        </li>
                </ul>
                
                <div className="notice-box">
                    <h2 className='box-title'>자주하는 질문</h2>
                    <ul className='notice-list'>
                        {   state.공지사항.map((item,idx)=>{
                            return(
                            <>
                                <li key={idx} className='list'>
                                    <p  onClick={(e)=>onClickNotice(e,item)} className='list-title'>{item.제목}
                                        <img className='Q' src="./img/sub/sub8/ico_Q.png" alt="" />
                                    </p>
                                </li>
                            </>
                            )
                        })
                        }
                    </ul>
                </div>     
                <div className="notice-footer">
                    <ul className="footer-list">
                        <li><Link to="/index">홈으로 가기</Link></li>
                        <li><a href="">지식재산권보호센터</a></li>
                        <li><a href="">안전거래센터</a></li>
                        <li><a href="">개인정보처리방침</a></li>
                    </ul>
                    <p className='footer-text'>Copyright © Kakao Corp.  All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};
