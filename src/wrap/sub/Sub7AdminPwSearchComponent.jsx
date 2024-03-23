import React from 'react';
import './scss/sub5Id.scss'
import axios from 'axios';
import { confirmModal } from '../../reducer/confirmReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sub7AdminPwSearchComponent(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [state,setState] = React.useState({
        아이디:'',
        전화번호:''
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
        e.preventDefault();
        setState({
            ...state,
            아이디:e.target.value
        })
    }
    const onChangeHp=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            전화번호:e.target.value
        })
    }

    const onClickId=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('adminHp',state.전화번호);
        formData.append('adminId',state.아이디);
        axios({
            url:'http://answotlr12.dothome.co.kr/kakao/kakao_admin_pw_search.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.data!==''){
                navigate('/sub7AdminRes',{
                    state:{
                        비밀번호:res.data.비밀번호,
                        가입일:res.data.가입일
                    }
                })
            }
            else{
                confirmModalMethod('가입된 정보가 없습니다.')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div id='sub5IdSearch'>
            <div className="container">
                <div className="title">
                    <img src="./img/sub/sub4/sub4_01_001.png" alt="" />
                    <h2>관리자 비밀번호 찾기</h2>
                </div>
                <div className="content">
                    <h2>
                        카카오계정의 비밀번호를<br/>
                        찾습니다.
                    </h2>
                    <p className='title-p'>
                        가입한계정의 아이디와<br/>
                        카카오톡에 등록한 전화번호 입력해 주세요.
                    </p>
                    <ul>
                        <li>
                            <span>아이디</span>
                            <input value={state.아이디} onChange={onChangeId} type="text" placeholder='카카오 계정 입력' />
                        </li>
                        <li>
                            <span>전화번호</span>
                            <select name="hpRegion">
                                <option value="korea">+82</option>
                                <option value='Canada'>(+1)  Canada</option>
                                <option value='United States'>(+1)  United States</option>
                                <option value='Japan'>(+81) 日本 (Japan)</option>
                                <option value='Philippines'>(+63) Philippines</option>
                                <option value='Indonesia'>(+62) Indonesia</option>
                                <option value='Vietnam'>(+84) Vietnam</option>
                            </select>
                            <input value={state.전화번호} onChange={onChangeHp} type="text" placeholder='전화번호' />
                        </li>
                    </ul>
                    <div className="btn-box">
                        <button onClick={onClickId}>카카오 비밀번호 찾기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
