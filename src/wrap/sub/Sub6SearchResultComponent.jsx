import React from 'react';
import './scss/sub6SearchResult.scss'
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Sub6SearchResultComponent(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const onClickLogIn=(e)=>{
        e.preventDefault();
        navigate('/sub4SignIn')
    }
    
    return (
        <div id='sub6SearchResult'>
            <div className="container">
                <div className="title">
                    <img src="./img/sub/sub4/sub4_01_001.png" alt="" />
                </div>
                <div className="content">
                    <h2>
                        입력한 정보와 일치하는<br/>
                        카카오계정을 확인해주세요.
                    </h2>
                    <p className='title-p'>
                        개인정보 보호를 위해 직접 입력하지 않은 정보의 경우 일부를 *로 표시하였습니다. <br/>
                        카카오계정에 로그인 할 수 있는 이메일 및 전화번호가 표시됩니다.
                    </p>
                    <div className="id">
{                       location.state.아이디 !== undefined &&
                        <span>{`${location.state.아이디}@kakao.com`}</span>
}
{                       location.state.비밀번호 !== undefined &&
                        <span>{`${location.state.비밀번호}`}</span>
}
                        <span>{`가입한 날짜는 ${location.state.가입일} 입니다.`}</span>
                    </div>
                    <div className="btn-box">
                        <button onClick={onClickLogIn}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
