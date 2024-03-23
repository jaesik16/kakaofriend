import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmReducer';
import './scss/sub8NoticeWrite.scss'

export default function Sub8NoticeWriteComponent(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg
        }
        dispatch(confirmModal(obj));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const [state,setState] = React.useState({
        제목:'',
        내용:'',
    })

    const onChangeTitle=(e)=>{
        setState({
            ...state,
            제목:e.target.value
        })
    }
    const onChangeContent=(e)=>{
        setState({
            ...state,
            내용:e.target.value
        })
    }

    const  onClickInsert=(e)=>{
        e.preventDefault();
        if(state.제목===''){
            confirmModalMethod('제목을 입력해주세요');
        }
        else if(state.내용===''){
            confirmModalMethod('내용을 입력해주세요');
        }
        else {
            let formData = new FormData();
            formData.append('nSubject', state.제목);
            formData.append('nContent', state.내용);
            axios({
                url: 'http://answotlr12.dothome.co.kr/kakao/kakao_notice_table_insert.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data===1){
                        confirmModalMethod('공지사항에 등록되었습니다.')
                    }
                    else if(res.data===0){
                        confirmModalMethod('공지사항 등록에 실패하였습니다. 확인하고 다시 시도하세요');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    return (
        <div id='subNoticeWrite'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <span className='title-text'>KAKAO 공지사항</span>
                    </div>
                    <form className="notice">
                        <div className="content">
                            <ul className="notice-title">
                                <li>
                                    <h2>제목</h2>
                                    <input type="text" onChange={onChangeTitle} value={state.제목} placeholder='제목을 입력하세요.' name='title' id='title' />
                                </li>
                                <li>
                                    <h2>내용</h2>
                                    <textarea onChange={onChangeContent} value={state.내용} placeholder='내용을 입력하세요.' name='content' id='content' />
                                </li>
                            </ul>
                        </div>
                        <div className="btn-box">
                            <button onClick={onClickInsert}>제출하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
