import React from 'react';
import './scss/menu.scss'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menu } from '../reducer/menuReducer';
import { userSignIn } from '../reducer/userSignIn';
import { adminSignIn } from '../reducer/adminSignIn';
import { cartMethod } from '../reducer/cartReducer';

export default function MenuComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state)



    const onClickMenuOut=(e)=>{
        dispatch(menu(false))
    }
    const onClickSubMenu=(e)=>{
        e.preventDefault();
        dispatch(menu(false))
    }
    const onClickLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem('KAKAO_USER_SIGN')
        localStorage.removeItem('KAKAO_CART')
        dispatch(userSignIn(null))
        dispatch(menu(false))
        dispatch(cartMethod([]))
    }
    const onClickAdminLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem('KAKAO_ADMIN_SIGN')
        dispatch(adminSignIn(null))
        dispatch(menu(false))
    }
    return (
        <div id='Menu'>
            <div className="menu">
                <div className="title">
                    <img src="./img/Header/menu_01.png" alt="" />
                </div>
                <ul>
{               selector.adminSignIn.관리자로그인정보===null &&
                <>
                    {   selector.userSignIn.로그인정보===null &&
                        <li onClick={onClickSubMenu}>
                            <Link to={'/sub4SignIn'}>로그인하기</Link>
                        </li>
                    }
                    {   selector.userSignIn.로그인정보!==null &&
                        <li onClick={onClickLogOut}>
                            <Link to={'/index'}>로그아웃하기</Link>
                        </li>
                    }
                    {   selector.userSignIn.로그인정보===null &&
                        <li onClick={onClickSubMenu}>
                            <Link  to={'/sub5SignUp'}>회원가입하기</Link>
                        </li>
                    }
                        {/* <li onClick={onClickSubMenu}>
                            <Link to={'/sub3'}>나의 주문내역</Link>
                        </li> */}
                    </>
}

                        <li onClick={onClickSubMenu}>
                            <Link to={'/sub8NoticeView'}>공지사항</Link>
                        </li>
                        {   selector.adminSignIn.관리자로그인정보===null &&
                        <li onClick={onClickSubMenu}>
                            <Link to={'/sub7AdminSignIn'}>관리자 로그인</Link>
                        </li>
                        }
                        {  selector.adminSignIn.관리자로그인정보!==null &&
                        <li onClick={onClickAdminLogOut}>
                            <Link to={'/index'}>관리자 로그아웃</Link>
                        </li>
                        }
                        {   selector.adminSignIn.관리자로그인정보!==null &&
                        <>
                            <li onClick={onClickSubMenu}>
                                <Link to={'/sub8NoticeWrite'}>관리자 공지사항 작성</Link>
                            </li>
                            <li onClick={onClickSubMenu}>
                                <Link to={'/sub8NoticeAdminView'}>관리자 공지사항 수정 삭제</Link>
                            </li>
                        </>
                        }

                </ul>
            </div>
            <div onClick={onClickMenuOut} className="menu-out">

            </div>
        </div>
    );
};
