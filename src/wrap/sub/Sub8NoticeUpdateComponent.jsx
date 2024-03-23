import React from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom'; 
import { confirmModal } from '../../reducer/confirmReducer';
import { useDispatch } from 'react-redux';
import './scss/sub8NoticeWrite.scss'

export default function Sub8NoticeUpdateComponent(){

    const navigate = useNavigate()
    const location = useLocation()
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
        제목:location.state.제목,
        내용:location.state.내용,
        번호:location.state.번호,
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

    const  onClickUpdate=(e)=>{
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
            formData.append('idx', state.번호);
            axios({
                url: 'http://answotlr12.dothome.co.kr/kakao/kakao_notice_table_update.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data===1){
                        confirmModalMethod('수정이완료되었습니다.')
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

    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx',state.번호)
        axios({
            url:'http://answotlr12.dothome.co.kr/kakao/kakao_notice_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{               
            if(res.status===200){   
                if(res.data===1){                        
                    confirmModalMethod('공지사항이 삭제가 완료되었습니다.');
                }                 
                else{
                    alert('공지사항 폼내용을 확인하고 다시 시도해주세요');
                }
                
            }
        })
        .catch((err)=>{
            console.log( err );
        });
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
                            <button onClick={onClickUpdate}>수정하기</button>
                            <button onClick={onClickDelete}>삭제하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
