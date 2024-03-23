import React from 'react';
import './scss/sub5.scss'
import { confirmModal } from '../../reducer/confirmReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Sub5SignUpComponent(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [state,setState] = React.useState({
        now:true,
        noEmailBtn:false,
        agreeBtn:false,
        authenBtn:false,
        pwShow:false,
        이용약관동의:[],
        전체동의:[
            '만 14세 이상입니다.',
            '[필수] 카카오계정 약관',
            '[필수] 카카오 통합서비스 약관',
            '[필수] 개인정보 수집 및 이용 동의',
            '[선택] 카카오알림 채널 추가 및 광고메시지 수신',
            '[선택] 위치정보 수집 및 이용 동의',
            '[선택] 프로필정보 추가 수집 동의'
        ],
        필수동의:0,
        휴대폰:'',
        hpGuidText:'',
        isHp:false,
        isHpAuthen:false,
        인증번호:null,
        발급된인증번호:null,
        아이디:'',
        비밀번호:'',
        비밀번호2:'',
        pwGuidText:'',
        pwGuidText2:'',
        pwSame:false,
        이름:''
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
    React.useEffect(()=>{
        let 이용약관동의 = state.이용약관동의.filter((item)=>item.includes('[필수]'));
        setState({
            ...state,
            필수동의:이용약관동의.length
        })
    },[state.이용약관동의])

    const onClickNoEmailBtn=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            now:false,
            noEmailBtn:true 
        })
    }
    const onClickAgree=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            now:false,
            noEmailBtn:false,
            agreeBtn:true
        })
    }

    const onChangeCheck=(e)=>{
        let 이용약관동의 = state.이용약관동의
        if(e.target.checked===true){
            이용약관동의=[...이용약관동의,e.target.value]
        }
        else{
            이용약관동의 = 이용약관동의.filter((item)=>item !== e.target.value);
        }
        setState({
            ...state,
            이용약관동의:이용약관동의
        })
    }
    const onChangeAllCheck=(e)=>{
        let 이용약관동의 = state.이용약관동의;
        if(e.target.checked){
            이용약관동의 = state.전체동의
        }
        else{
            이용약관동의=[]
        }
        setState({
            ...state,
            이용약관동의:이용약관동의
        })
    }

    const onChangeHp=(e)=>{
        const {value} = e.target;
        let 휴대폰 = '';
        let hpGuidText=''
        let isHp=false
        const regexp = /[^0-9]/g;
        const regexp1 = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
        휴대폰 = value.replace(regexp, '');
        if(regexp1.test(휴대폰)===false){
            hpGuidText='잘못된 형식의 전화번호입니다. 정확한 전화번호를 입력해 주세요.'
            isHp=false
        }
        else{
            isHp=true
        }
        setState({
            ...state,
            휴대폰:휴대폰,
            hpGuidText:hpGuidText,
            isHp:isHp
        })
    }
    const onClickDelete=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            휴대폰:''
        })

    }
    const onClickDelete2=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            아이디:''
        })

    }
    const onClickDelete3=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            비밀번호:''
        })
    }
    const onClickDelete4=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            비밀번호2:''
        })
    }
    const onClickHpBtn=(e)=>{
        e.preventDefault();
        let num = 0;
        let isHpAuthen=false
        num = Math.floor(Math.random() * 900000 + 100000);
        if(state.isHp===false){
            confirmModalMethod('잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.');
            isHpAuthen=false             
        }
        else{
            confirmModalMethod(`인증번호가 발송되었습니다.  ${num}`);
            isHpAuthen=true
        }
        setState({
            ...state,
            발급된인증번호: num,
            isHpAuthen:isHpAuthen
        });
    }

    const onchangeHpAuthen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            인증번호:e.target.value
        })
    }
    const onClickAuthen=(e)=>{
        e.preventDefault();
        if(state.발급된인증번호===Number(state.인증번호)){
            confirmModalMethod('인증이완료되었습니다.')
            setState({
                ...state,
                now:false,
                noEmailBtn:false,
                agreeBtn:false,
                authenBtn:true
            })
        }
        else{
            confirmModalMethod('인증번호를 다시 확인 후 입력해주세요')
        }
    }

    const onChangeUserId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }
    const onChangeUserName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        })
    }

    const onClickId=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            now:false,
            noEmailBtn:false,
            agreeBtn:false,
            authenBtn:false,
            pwShow:true
        })
    }

    const onChangeUserPw=(e)=>{
        let 비밀번호 = e.target.value;
        let pwGuidText=''
        const regexpPw1 = /^(.){8,32}$/g;
        const regexpPw2 = /((?=.*[A-Za-z])+(?=.*[0-9])+)|((?=.*[A-Za-z])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)|((?=.*[0-9])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)/g;
        if(비밀번호===''){
            pwGuidText='카카오계정 비밀번호를 입력해 주세요.(영문자/숫자/특수문자)'
        }
        else if(regexpPw1.test(비밀번호)===false){
            pwGuidText='비밀번호는 8~32자리(영문자/숫자/특수문자)로 입력할 수 있어요.'
        }
        else if(regexpPw2.test(비밀번호)===false){
            pwGuidText='비밀번호는 영문자,숫자,특수문자 조합으로 작성해주세요'
        }
        setState({
            ...state,
            비밀번호:비밀번호,
            pwGuidText:pwGuidText
        })
    }
    const onChangeUserPw2=(e)=>{
        let pwGuidText2=''
        let 비밀번호2=e.target.value;
        let pwSame=false
        if(state.비밀번호!==비밀번호2){
            pwGuidText2='입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다.'
        }
        else{
            pwGuidText2=''
            pwSame=true
        }
        setState({
            ...state,
            비밀번호2:비밀번호2,
            pwGuidText2:pwGuidText2,
            pwSame:pwSame
        })
    }

    const onSubmitUser=(e)=>{
        alert('확인')
        e.preventDefault()
        let formData = new FormData();
        formData.append('userId',state.아이디);
        formData.append('userPw',state.비밀번호);
        formData.append('userHp',state.휴대폰);
        formData.append('userName',state.이름);
        formData.append('userService',  state.이용약관동의);
        axios({
            url:'http://answotlr12.dothome.co.kr/kakao/kakao_insert.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.data===1){
                confirmModalMethod('회원가입이완료되었습니다.')
                navigate('/index')
            }
            else{
                confirmModalMethod('회원가입에 실패하였습니다.')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div id='sub5SignUp'>
            <div className="container">
                <div className="title">
                    <img src="./img/sub/sub4/sub4_01_001.png" alt="" />
                </div>

{               state.now &&
                <div className="content">
                    <div className="signUpContent">
                        <div className="content-title">
                            <h2>가입을 시작합니다!</h2>
                        </div>
                        <p className='row1'>
                            카카오계정 하나로<br/>
                            다양한 서비스를 편리하게 이용해 보세요.
                        </p>
                        <p className='row2'>
                            카카오계정으로 사용할 이메일이 있나요?
                        </p>
                        <div className="btn-box">
                            <button>이메일이 있습니다.</button>
                            <button onClick={onClickNoEmailBtn}>이메일이 필요합니다.</button>
                        </div>
                    </div>
                </div>
}


{                state.noEmailBtn &&
                <div className="content">
                    <div className="signUpContent2">
                        <div className="content-title">
                            <h2>
                                카카오계정<br/>
                                서비스 약관에 동의해 주세요.
                            </h2>
                        </div>
                        <form>
                            <ul>
                                <li>
                                    <label htmlFor="allCheck">
                                        <input type="checkbox" name="allCheck" id="allCheck" onChange={onChangeAllCheck} checked={state.이용약관동의.length===7}    />
                                        <span>모두 동의합니다.</span>
                                    </label>
                                    <p>
                                    전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.<br/>
                                    선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                                    </p>
                                </li>
                                <li>
                                    <label htmlFor="chk1">
                                        <input type="checkbox" checked={state.이용약관동의.includes('만 14세 이상입니다.')} name="chk1" id="chk1" value={'만 14세 이상입니다.'} onChange={onChangeCheck}/>
                                        <span>만 14세 이상입니다.</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="chk2">
                                        <input type="checkbox" name="chk2" id="chk2" checked={state.이용약관동의.includes('[필수] 카카오계정 약관')} value={'[필수] 카카오계정 약관'} onChange={onChangeCheck} />
                                        <span>[필수] 카카오계정 약관</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="chk3">
                                        <input type="checkbox" name="chk3" id="chk3" checked={state.이용약관동의.includes('[필수] 카카오 통합서비스 약관')} value={'[필수] 카카오 통합서비스 약관'} onChange={onChangeCheck} />
                                        <span>[필수] 카카오 통합서비스 약관</span>
                                    </label>
                                    <p className='p2'>
                                    본 약관은 회사가 제공하는 카카오, Daum 서비스 등에 공통 적용되며, 본 약관에 동의함으로써 해당 서비스들을 별도 이용계약 체결 없이 이용할 수 있습니다.
                                    </p>
                                </li>
                                <li>
                                    <label htmlFor="chk4">
                                        <input type="checkbox" name="chk4" id="chk4" checked={state.이용약관동의.includes('[필수] 개인정보 수집 및 이용 동의')} value={'[필수] 개인정보 수집 및 이용 동의'} onChange={onChangeCheck} />
                                        <span>[필수] 개인정보 수집 및 이용 동의</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="chk5">
                                        <input type="checkbox" name="chk5" id="chk5" checked={state.이용약관동의.includes('[선택] 카카오알림 채널 추가 및 광고메시지 수신')} value={'[선택] 카카오알림 채널 추가 및 광고메시지 수신'} onChange={onChangeCheck} />
                                        <span>[선택] 카카오알림 채널 추가 및 광고메시지 수신</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="chk6">
                                        <input type="checkbox" name="chk6" id="chk6" checked={state.이용약관동의.includes('[선택] 위치정보 수집 및 이용 동의')} value={'[선택] 위치정보 수집 및 이용 동의'} onChange={onChangeCheck} />
                                        <span>[선택] 위치정보 수집 및 이용 동의</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="chk7">
                                        <input type="checkbox" name="chk7" id="chk7" checked={state.이용약관동의.includes('[선택] 프로필정보 추가 수집 동의')} value={'[선택] 프로필정보 추가 수집 동의'} onChange={onChangeCheck} />
                                        <span>[선택] 프로필정보 추가 수집 동의</span>
                                    </label>
                                </li>
                               
                            </ul>
                        </form>
                        <button onClick={onClickAgree} className={state.필수동의===3?'on':''}>동의</button>
                    </div>
                </div>
}   
{               state.agreeBtn &&
                <div className="content">
                    <div className="signUpContent3">
                        <div className="content-title">
                            <h2>
                                카카오계정 가입을 위해<br/>
                                휴대폰 인증을 진행해주세요
                            </h2>
                        </div>
                        <form>
                            <ul>
                                <li>
                                    <select name="hpRegion">
                                        <option value="korea">+82</option>
                                        <option value='Canada'>(+1)  Canada</option>
                                        <option value='United States'>(+1)  United States</option>
                                        <option value='Japan'>(+81) 日本 (Japan)</option>
                                        <option value='Philippines'>(+63) Philippines</option>
                                        <option value='Indonesia'>(+62) Indonesia</option>
                                        <option value='Vietnam'>(+84) Vietnam</option>
                                    </select>
                                    <input type="text" value={state.휴대폰} onChange={onChangeHp} name='userHp' id='userHp' placeholder='전화번호 입력' />
                                    {  state.휴대폰!=='' &&                                 
                                    <img onClick={onClickDelete} src="./img/sub/sub5/ico_X.png" alt="" />
                                    }
                                    <button onClick={onClickHpBtn}>인증요청</button>
                                    <p className={state.isHp?'Guid on':'Guid'}>{state.hpGuidText}</p>
                                </li>
                                {     state.isHpAuthen &&                           
                                <li>
                                    <input className='hpAuthen' onChange={onchangeHpAuthen} type="text" name='hpAuthen' id='hpAuthen' value={state.인증번호} placeholder='인증번호 입력' maxLength={6} />
                                </li>
                               }
                            </ul>
                        </form>
                        <button className={state.인증번호===''?'':'on'} onClick={onClickAuthen}>동의</button>
                    </div>
                </div>
}
{               state.authenBtn &&
                <div className="content">
                    <div className="signUpContent4">
                        <div className="content-title">
                            <h2>
                                카카오계정 계정으로 사용할<br/>
                                카카오메일을 만들어주세요
                            </h2>
                        </div>
                        <form>
                            <ul>                        
                                <li>
                                    <input name='userId' id='userId' value={state.아이디} onChange={onChangeUserId}  placeholder='아이디 입력' maxLength={10} />
                                    <img onClick={onClickDelete2} src="./img/sub/sub5/ico_X.png" alt="" />
                                    <span>@kakao.com</span>
                                </li>
                                { state.아이디==='' &&
                                <p className='Guid'>아이디를 입력해주세요</p>
                                }
                            </ul>
                        </form>
                        <p> 입력한 카카오메일로 카카오계정에 로그인할 수 있습니다.<br/>
                            한번 만든 카카오메일은 변경할 수 없으니, 오타가 없도록 신중히 확인해 주세요.<br/>
                            생성한 카카오메일로 카카오계정과 관련한 알림을 받아볼 수 있습니다.</p>
                        <button onClick={onClickId} className={state.아이디===''?'':'on'}>다음</button>
                    </div>
                </div>
}
{               state.pwShow &&
                <div className="content">
                    <div className="signUpContent5">
                        <div className="content-title">
                            <h2>
                                카카오계정 로그인에 사용할<br/>
                                비밀번호를 만들어주세요
                            </h2>
                        </div>
                        <form>
                            <strong>카카오계정</strong>
                            <span>{`${state.아이디}@kakao.com`}</span>
                            <ul>      
                                <li>
                                    <strong>이름</strong>
                                    <input onChange={onChangeUserName} value={state.이름} type="text" name='userName' id='userName' placeholder='이름을 입력하세요' />
                                </li>                  
                                <li>
                                    <strong>비밀번호</strong>
                                    <input type='password' name='userPw' id='userPw' value={state.비밀번호} onChange={onChangeUserPw}  placeholder='비밀번호 입력' maxLength={32} />
                                    <img onClick={onClickDelete3} src="./img/sub/sub5/ico_X.png" alt="" />
                                </li>
                                <p className='Guid'>{state.pwGuidText}</p>
                                <li>
                                    <strong>비밀번호 재입력</strong>
                                    <input type='password' name='userPw2' id='userPw2' value={state.비밀번호2} onChange={onChangeUserPw2}  placeholder='비밀번호 재입력' maxLength={32} />
                                    <img onClick={onClickDelete4} src="./img/sub/sub5/ico_X.png" alt="" />
                                </li>
                                <p className='Guid'>{state.pwGuidText2}</p>
                            </ul>
                        </form>
                        <p> 비밀번호는 8~32자리의 영문 대소문자, 숫자, 특수문자를 조합하여 설정해 주세요.<br/>
                            다른 사이트에서 사용하는 것과 동일하거나 쉬운 비밀번호는 사용하지 마세요.<br/>
                            안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해 주세요.</p>
                        <button type='submit' onClick={onSubmitUser} className={state.pwSame===''?'':'on'}>완료</button>
                    </div>
                </div>
}
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
            </div>
        </div>
    );
};
