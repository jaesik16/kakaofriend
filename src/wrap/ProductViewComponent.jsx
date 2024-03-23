import React from 'react';
import './scss/ProductView.scss'
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartMethod } from '../reducer/cartReducer';
import { confirmModal } from '../reducer/confirmReducer';

export default function ProductViewComponent(){

    const location = useLocation();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [state,setState] = React.useState({
        공지사항:location.state.상품,
        주소:location.state.상품.주소,
        arrow:false,
        수량:1,
        총주문금액:0,
        장바구니:[]
    })

    React.useEffect(()=>{
        if(state.주소===undefined){
            console.log(location.state.주소)
            setState({
                ...state,
                주소:location.state.주소
            })
        }
    },[])

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

    const onClickarrow=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            arrow:!state.arrow
        })
    }

    const onClickMinus=(e)=>{
        e.preventDefault();
        let 수량=state.수량
        if(수량===1){
            수량=1
        }
        else{
            수량-=1
        }
        setState({
            ...state,
            수량:수량
        })
    }
    const onClickPlus=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            수량:state.수량+1
        })
    }

    React.useEffect(()=>{
        setState({
            ...state,
            총주문금액:state.공지사항.가격 * state.수량
        })
    },[state.수량])

    const onClickCart=(e)=>{
        e.preventDefault();
        let 장바구니=[]
        let 추가장바구니=[];
        let 주소= state.주소===undefined?location.state.주소:state.주소
        let cart={
            번호:state.공지사항.번호,
            가격:state.공지사항.가격,
            총주문금액:state.총주문금액,
            상품명:state.공지사항.상품명,
            이미지:state.공지사항.이미지,
            수량:state.수량,
            주소:주소
        }
        장바구니=cart
        if(selector.userSignIn.로그인정보===null){
            confirmModalMethod('로그인이 필요한 메뉴입니다. 로그인 하시겠습니까?')
        }
        else{
            if(localStorage.getItem('KAKAO_CART')!==null){
                추가장바구니 =JSON.parse(localStorage.getItem('KAKAO_CART'));
            }
            let imsi = 추가장바구니.map((item)=>item.번호===장바구니.번호);
            if(imsi.includes(true)===true){
                추가장바구니 = 추가장바구니.map((item)=>item.번호===장바구니.번호?{...item, 수량:item.수량+장바구니.수량, 총주문금액:item.총주문금액+장바구니.총주문금액 }:{...item});
            }
            else{
                추가장바구니=[...추가장바구니,장바구니]
            }
            dispatch(cartMethod(JSON.stringify(추가장바구니)))
            localStorage.setItem('KAKAO_CART',JSON.stringify(추가장바구니));
            setState({
                ...state,
                장바구니:추가장바구니
            })
            navigate('/sub3',{
                state:{
                    장바구니:추가장바구니
                }
            })
        }
    }



    return (
        <div id='ProductView'>
            <div className="container">
                <div className="content">
                    <div className="left">
                        <div className="left-left">
                            <img src={state.주소!==undefined?(`./img/main/${state.주소}/${state.공지사항.이미지}`):(`./img/main/${location.state.주소}/${state.공지사항.이미지}`)} alt="" />
                        </div>
                        <div className="left-right">
                            <div className="review">
                                {   state.공지사항.리뷰>10 &&
                                <img src="./img/product/icon_star.png" alt="" />
                                }
                                {   state.공지사항.리뷰>20 &&
                                <img src="./img/product/icon_star.png" alt="" />
                                }
                                {   state.공지사항.리뷰>30 &&
                                <img src="./img/product/icon_star.png" alt="" />
                                }
                                {   state.공지사항.리뷰>40 &&
                                <img src="./img/product/icon_star.png" alt="" />
                                }
                                <span>리뷰 {state.공지사항.리뷰}건</span>
                            </div>
                            <strong className='product-name'>{state.공지사항.상품명}</strong>
                            <p className='product-cost'>{(state.공지사항.가격).toLocaleString('ko-KR')}원</p>
                            <ul className="point">
                                <li>고객님을 위한 구매 혜택</li>
                                <li>쇼핑포인트 최대 
                                    <p>{state.총주문금액*0.03}원</p> 
                                적립
                                    <img className={state.arrow?'on':''} onClick={onClickarrow} src="./img/product/icon_arrow.png" alt="" />
                                    { state.arrow &&
                                    <strong>스토어 구매 적립 3%</strong>
                                    }
                                </li>
                            </ul>
                            <div className="baesong">
                                <p className='baesong-text'>
                                    배송비 3,000원 (30,000원 이상 구매시 무료)<br/>
                                    평균 배송기간 <strong>1일 이내</strong> (영엽일 기준)
                                </p>
                                <img src="./img/product/icon_baesong.png" alt="" />
                            </div>
                        </div>
                        <div className="btn-box">
                            <button>상세정보</button>
                            <button>리뷰{state.공지사항.리뷰}</button>
                            <button>문의 20</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="gaesu">
                            <strong>수량선택</strong>
                            <div className="cnt-box">
                                <span>{state.수량}</span>
                                <button onClick={onClickMinus} className={state.수량>1?'minus on':'minus'}></button>
                                <button onClick={onClickPlus} className='plus'></button>
                            </div>
                        </div>
                        <ul className="baesong-info">
                            <li>
                                <div className="baesong-left">배송방법</div>
                                <div className="baesong-right">택배배송</div>
                            </li>
                            <li>
                                <div className="baesong-left">배송비</div>
                                <div className="baesong-right">
                                    <span>{state.총주문금액<30000?"3,000원 주문시 결제":"조건부 무료 적용"}</span>
                                </div>
                            </li>
                        </ul>
                        <p className='text-footer'>총 주문금액 30,000원 이상 구매 시 무료</p>
                        <div className="result-box">
                            <span className='left-res'>총 수량 {state.수량}개</span>
                            <span className='right-res'>총 주문금액 <strong>{(state.총주문금액).toLocaleString('ko-KR')}</strong>원</span>
                        </div>
                        <div className="cart-btn-box">
                            <button className='cart1'></button>
                            <button onClick={onClickCart} className='cart2'></button>
                            <button className='cart3'>바로 구매</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};