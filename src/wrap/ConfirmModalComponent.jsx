import React from 'react';
import '../wrap/scss/ConfirmModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../reducer/confirmReducer';

export default function ConfirmModalComponent()  {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate()

    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        if(selector.confirmReducer.confirmMsg==='수정이완료되었습니다.'){
            navigate('/sub8NoticeAdminView')
        }
        else if(selector.confirmReducer.confirmMsg==='공지사항이 삭제가 완료되었습니다.'){
            navigate('/sub8NoticeAdminView')
        }
        else if(selector.confirmReducer.confirmMsg==='공지사항에 등록되었습니다.'){
            navigate('/sub8NoticeAdminView')
        }
        else if(selector.confirmReducer.confirmMsg==='로그인 되었습니다.'){
            navigate('/index')
        }
        else if(selector.confirmReducer.confirmMsg==='로그인이 필요한 메뉴입니다. 로그인 하시겠습니까?'){
            navigate('/sub4SignIn')
        }
        const obj = {
            isConfirmModal: false,
            confirmMsg: ''
        }
        dispatch(confirmModal(obj)); 
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');

    }
    const onClickCloseBtn2=(e)=>{
        e.preventDefault();
        const obj = {
            isConfirmModal: false,
            confirmMsg: ''
        }
        dispatch(confirmModal(obj)); 
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');

    }

    return (
        <div id='confirmModal'>
            <div className='container'>
                <div className='confirm-box'>
                    <ul>
                        <li>
                            <div className='message-box'>
                                
                                    {
                                        selector.confirmReducer.confirmMsg.split('\n').map((item)=>{
                                            return(
                                                <p>
                                                    {item}
                                                </p>
                                            )
                                        })
                                    }
                                
                            </div>                             
                        </li>
                        <li>
                            <div className='button-box'>
                                <button onClick={onClickCloseBtn}>확인</button>
                                { selector.confirmReducer.isLogIn &&
                                <button className='no' onClick={onClickCloseBtn2}>취소</button>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

