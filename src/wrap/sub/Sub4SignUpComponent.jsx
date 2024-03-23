import React from 'react';
import axios from 'axios';
import './scss/sub4.scss'

export default function Sub4SignUpComponent(){

    const [state,setState] = React.useState({
        easy:""
    })
    return (
        <main id='sub4SignUp'>
            <div className="title">
                <img src="./img/sub/sub4/sub4_01_001.png" alt="" />
            </div>
            <form>
                <div className="signUpContent">
                    <ul>
                        <li>
                            <input type="text" id='userIdAll' name='userIdAll' placeholder='카카오메일 아이디, 이메일, 전화번호 ' />
                        </li>
                        <li>
                            <input type="password" id='userPassword' name='userEmail' placeholder='비밀번호' />
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
                            <a href="">회원가입</a>
                            <ul>
                                <li><a href="">계정 찾기</a></li>
                                <li><a href="">비밀번호 찾기</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
 
        </main>
    );
};
