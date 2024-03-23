import React from 'react';
import { Link } from 'react-router-dom';
import { confirmModal } from '../../reducer/confirmReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSignIn } from '../../reducer/userSignIn';
import axios from 'axios';
import './scss/sub4.scss'

export default function Sub4SignInComponent(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state,setState] = React.useState({
        easy:"",
        아이디:'',
        비밀번호:'',
    })
    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg
        }
        dispatch(confirmModal(obj));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }
    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }
    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        })
    }

    const onsubmitLogIn=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('userId',state.아이디);
        formData.append('userPw',state.비밀번호);
        if(state.아이디===''){
            confirmModalMethod('아이디를 입력해주세요')
        }
        else if(state.비밀번호===''){
            confirmModalMethod('비밀번호를 입력해주세요')
        }
        else{
            axios({
                url:'http://answotlr12.dothome.co.kr/kakao/kakao_signin.php',
                method:'POST',
                data:formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data!==' '){
                        const 로그인정보 = {
                            아이디: res.data.아이디,
                            이름: res.data.이름,
                            휴대폰: res.data.휴대폰
                        }
                        confirmModalMethod('로그인 되었습니다.')
                        dispatch(userSignIn(로그인정보))
                        localStorage.setItem('KAKAO_USER_SIGN',JSON.stringify(로그인정보))
                    }
                    else{
                        confirmModalMethod('로그인에 실패하였습니다.')
                    }
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    
    return (
        <main id='sub4SignIn'>
            <div className="title">
                <img src="./img/sub/sub4/sub4_01_001.png" alt="" />
            </div>
            <form onSubmit={onsubmitLogIn}>
                <div className="signInContent">
                    <ul>
                        <li>
                            <input onChange={onChangeId} value={state.아이디} type="text" id='userId' name='userId' placeholder='카카오메일 아이디, 이메일, 전화번호 ' />
                        </li>
                        <li>
                            <input onChange={onChangePw} value={state.비밀번호} type="password" id='userPassword' name='userEmail' placeholder='비밀번호' />
                        </li>
                    </ul>
                    <label htmlFor="easy">
                        <input type="checkbox" id='easy' name='easy' />
                        <span>간편로그인 정보 저장</span>
                        <img src="./img/sub/sub3/ico_cart.png" alt="" />
                    </label>
                    <button>로그인</button>
                    <div className="footer-text">
                        <div className="text-box">
                            <Link to="/sub5SignUp">회원가입</Link>
                            <ul>
                                <li><Link to="/sub5Id">계정 찾기</Link></li>
                                <li><Link to="/sub5Pw">비밀번호 찾기</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
            <div className="footer">
                <ul>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보 처리방침</a></li>
                    <li><a href="">운영정책</a></li>
                    <li><a href="">고객센터</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">한국어</a></li>
                </ul>
                <p>
                    Copyright &copy;Kakao Corp.All rights reserved.
                </p>
            </div>
 
        </main>
    );
};
