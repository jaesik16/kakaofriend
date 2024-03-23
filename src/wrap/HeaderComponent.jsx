import React from 'react';
import './scss/Header.scss'
import { useLocation,Outlet,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { menu } from '../reducer/menuReducer';
import { useSelector } from 'react-redux';
import { confirmModal } from '../reducer/confirmReducer';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../reducer/userSignIn';

export default function HeaderCompent(){

    const location=useLocation();
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state)
    const navigate = useNavigate()

    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            isLogIn:true
        }
        dispatch(confirmModal(obj));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const menuSlide = React.useRef()

    const [state,setState] = React.useState({
        onClickSub:false,
        이름:''
    });

    const onClickSubpage=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            onClickSub:!state.onClickSub
        })
    }
    const onClickMemu=(e)=>{
        e.preventDefault();
        dispatch(menu(true))
    }

    const onClickCart=(e)=>{
        e.preventDefault();
        if(selector.userSignIn.로그인정보===null){
            confirmModalMethod('로그인이 필요한 메뉴입니다. 로그인 하시겠습니까?')
        }
        else{
            navigate('/sub3')
        }
    }
    React.useEffect(()=>{
        if(selector.userSignIn.로그인정보!==null){
            setState({
                ...state,
                이름:selector.userSignIn.로그인정보
            })
        }
    },[selector.userSignIn.로그인정보])

    return (
    <>
        <div id='header'>
            <div className="container">
                <div className="header-title">
                    <div className="title-left">
                        <button onClick={onClickMemu} className='left1'>
                            <i class="material-icons">menu</i>
                        </button>
                        <button className='left2'>
                            <div onClick={onClickCart} className="on">
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </button>
                    </div>
                    <div className="title-middle">
                        <button>
                            <img src="./img/Header/logo_kakaofriends.gif" alt="" />
                        </button>
                    </div>
                    <div className="title-right">
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    { selector.userSignIn.로그인정보!==null &&
                    <div className="logIn-box">
                        <div className="logIn-left">
                            <img src="./img/Header/user_img.png" alt="" />
                        </div>
                        <div className="logIn-right">{state.이름.split('"')[7]}</div>
                    </div>
}
                </div>
                <div className="header-subpage-box">
                    <ul>
                        <li onClick={onClickSubpage}>
                            <Link to={{pathname:"/index"}} className={location.pathname==='/index'?"on":''}>홈</Link>
                        </li>
                        <li onClick={onClickSubpage}>
                            <Link to={{pathname:"/sub1"}} className={location.pathname==='/sub1'?"on":''}>베스트</Link>
                        </li>
                        <li onClick={onClickSubpage}>
                            <Link to={{pathname:"/sub2"}} className={location.pathname==='/sub2'?"on":''}>콘텐츠</Link>
                        </li>
{                       selector.userSignIn.로그인정보!==null &&
                        <li onClick={onClickSubpage}>
                            <Link to={{pathname:"/sub3"}} className={location.pathname==='/sub3'?"on":''}>마이</Link>
                        </li>
}
                    </ul>
                </div>
            </div>
        </div>

        <Outlet />
    </>
    );
};
