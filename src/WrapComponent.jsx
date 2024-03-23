import React from "react";
import {HashRouter , Routes, Route} from 'react-router-dom';
import MainComponent from "./wrap/MainComponent";
import HeaderComponent from "./wrap/HeaderComponent";
import FooterComponent from "./wrap/FooterComponent";
import MenuComponent from "./wrap/MenuComponent"
import ConfirmModalComponent from "./wrap/ConfirmModalComponent";
import ProductViewComponent from "./wrap/ProductViewComponent";
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4SignInComponent from "./wrap/sub/Sub4SignInComponent";
import Sub5SignUpComponent from "./wrap/sub/Sub5SignUpComponent";
import Sub5IdSearchComponent from "./wrap/sub/Sub5IdSearchComponent";
import Sub6SearchResultComponent from "./wrap/sub/Sub6SearchResultComponent";
import Sub5PwSearchComponent from "./wrap/sub/Sub5PwSearchComponent";
import Sub7AdmibSignInComponent from "./wrap/sub/Sub7AdmibSignInComponent";
import Sub7AdminSignUpComponent from "./wrap/sub/Sub7AdminSignUpComponent";
import Sub7AdminIdSearchComponent from "./wrap/sub/Sub7AdminIdSearchComponent";
import Sub7AdminPwSearchComponent from "./wrap/sub/Sub7AdminPwSearchComponent";
import Sub7AdminSearchResultComponent from "./wrap/sub/Sub7AdminSearchResultComponent";
import Sub8NoticeViewComponent from "./wrap/sub/Sub8NoticeViewComponent";
import Sub8NoticeAdminViewComponent from "./wrap/sub/Sub8NoticeAdminViewComponent";
import Sub8NoticeWriteComponent from "./wrap/sub/Sub8NoticeWriteComponent";
import Sub8NoticeUpdateComponent from "./wrap/sub/Sub8NoticeUpdateComponent";
import { useDispatch,useSelector } from "react-redux";
import {userSignIn} from "./reducer/userSignIn";
import { adminSignIn } from "./reducer/adminSignIn";
import { cartMethod } from "./reducer/cartReducer";

export default function WrapComponent(){

    const selector = useSelector((state)=>state)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        if(localStorage.getItem('KAKAO_USER_SIGN')!==null){
            dispatch(userSignIn(localStorage.getItem('KAKAO_USER_SIGN')))
        }
    },[selector.userSignIn.로그인정보])
    React.useEffect(()=>{
        if(localStorage.getItem('KAKAO_ADMIN_SIGN')!==null){
            dispatch(adminSignIn(localStorage.getItem('KAKAO_ADMIN_SIGN')))
        }
    },[selector.adminSignIn.관리자로그인정보])
    React.useEffect(()=>{
        if(localStorage.getItem('KAKAO_CART')!==null){
            dispatch(cartMethod(JSON.parse(localStorage.getItem('KAKAO_CART'))))
        }
    },[])

    return (
        <div id="wrap">
            <HashRouter  basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<HeaderComponent />}>
                        <Route index element={ <MainComponent /> } /> 
                        <Route path="/index" element={ <MainComponent /> } />
                        <Route path="/sub1" element={ <Sub1Component /> }/>
                        <Route path="/sub2" element={ <Sub2Component /> }/>
                        <Route path="/sub3" element={ <Sub3Component /> }/>  
                        <Route path="/sub4SignIn" element={ <Sub4SignInComponent /> }/>  
                        <Route path="/sub5SignUp" element={ <Sub5SignUpComponent /> }/>  
                        <Route path="/sub5Id" element={ <Sub5IdSearchComponent /> }/>  
                        <Route path="/sub5Pw" element={ <Sub5PwSearchComponent /> }/>  
                        <Route path="/sub6Result" element={ <Sub6SearchResultComponent /> }/>  
                        <Route path="/sub7AdminSignIn" element={ <Sub7AdmibSignInComponent /> }/>  
                        <Route path="/sub7AdminSignUp" element={ <Sub7AdminSignUpComponent /> }/>  
                        <Route path="/sub7AdminId" element={ <Sub7AdminIdSearchComponent /> }/>  
                        <Route path="/sub7AdminPw" element={ <Sub7AdminPwSearchComponent /> }/>  
                        <Route path="/sub7AdminRes" element={ <Sub7AdminSearchResultComponent /> }/>  
                        <Route path="/sub8NoticeView" element={ <Sub8NoticeViewComponent /> }/>  
                        <Route path="/sub8NoticeAdminView" element={ <Sub8NoticeAdminViewComponent /> }/>  
                        <Route path="/sub8NoticeWrite" element={ <Sub8NoticeWriteComponent /> }/>  
                        <Route path="/sub8NoticeUpdate" element={ <Sub8NoticeUpdateComponent /> }/>  
                        <Route path="/productView" element={ <ProductViewComponent/>}/>  
                    </Route>
                </Routes>
                <FooterComponent/>
{                selector.menuReducer.isMenu &&
                <MenuComponent/>
}
{                selector.confirmReducer.isConfirmModal &&
                <ConfirmModalComponent/>
}
            </HashRouter >
        </div>
    )
}
