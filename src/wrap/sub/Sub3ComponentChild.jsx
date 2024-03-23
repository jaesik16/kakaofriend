import React from 'react';
import './scss/sub3.scss'
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { cartMethod } from '../../reducer/cartReducer';

export default function Sub3ComponentChild(){

    const dispatch = useDispatch()
    const selector = useSelector((state)=>state)

    const [state,setState] = React.useState({
        isI:false,
        상품:[]
    })
    const [total,setTotal] = React.useState({
        총주문금액:0
    })



    React.useEffect(()=>{
        let 상품=state.상품
        let 총주문금액=0
        if(localStorage.getItem('KAKAO_CART')!==null){
            상품=JSON.parse(localStorage.getItem('KAKAO_CART'))
            상품.map((item)=>{
                총주문금액+=item.총주문금액
                setTotal({
                    ...total,
                    총주문금액:총주문금액
                })
            })

        }
        else{
            상품=상품
        }
        setState({
            ...state,
            상품:상품
        })
    },[selector.cartReducer.장바구니])




    const navigate=useNavigate()

    const onClickI=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isI:!state.isI
        })
    }

    const onClickBack=(e)=>{
        e.preventDefault();
        navigate(-1);
    }
    const onClickHome=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    const onClickPlus=(e, 번호)=>{
        e.preventDefault();            
        const 결과 = JSON.parse(localStorage.getItem('KAKAO_CART')).map((item)=>{
            return 번호===item.번호 ? {...item, 수량: item.수량+1, 총주문금액: (item.수량+1) * item.가격} : {...item}
        });
        dispatch(cartMethod(결과));
        localStorage.setItem('KAKAO_CART', JSON.stringify(결과));

    }

    const onClickMinus=(e, 번호)=>{
        e.preventDefault();
        if(selector.cartReducer.장바구니.length!==0){
            const 결과 = selector.cartReducer.장바구니.map((item)=>{
                return 번호===item.번호 ? {...item, 수량: ((item.수량 <= 1) ? (1) : (item.수량-1)), 총주문금액: (item.수량-1) * item.가격}    : {...item}
            });
            dispatch(cartMethod(결과));
            localStorage.setItem('KAKAO_CART', JSON.stringify(결과));
        }
    }

    const onClickPro=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item
            }
        })
    }


    return (
        <div className='container'>
            <div className="content">
                <div className="title">
                    <h2>
                        장바구니
                        <div className="img">
                            <img onClick={onClickI} src="./img/sub/sub3/ico_cart.png" alt="" />
                            {
                                state.isI===true &&
                            <>
                                <div className="tooltip">
                                    <p className='msg'>
                                        장바구니의 상품은 최대
                                        <em>30일간</em> 
                                        저장됩니다. <br/>
                                        상품정보 변경시 주문이 불가할 수 있습니다. 
                                    </p>
                                </div>
                                <span>
                                    <img src="./img/sub/sub3/icon_arrow.png" alt="" />
                                </span>
                            </>

                            }
                        </div>
                    </h2>
                </div>
                <div className={state.상품.length===0?'cart on':'cart'}>
{                   state.상품.length===0 &&
                    <div className="cart-box">
                        <img src="./img/sub/sub3/ico_cart1.png" alt="" />
                        <p>장바구니에 담긴 상품이 없습니다.</p>
                        <p></p>
                        <div className="btn-box">
                            <button onClick={onClickBack}>이전 화면</button>
                            <button onClick={onClickHome}>쇼핑하기 홈</button>
                        </div>
                    </div>
}
{                    state.상품.length>0 &&
                    <div className="all-cart-box">
                        <div className="row1">
                            <label htmlFor='allCheck'>
                                <input type="checkbox" name='allCheck' id='allCheck'/>전체선택
                            </label>
                            <button>삭제</button>
                        </div>
                        {   state.상품.map((item,idx)=>{
                            return(
                                <>
                            <div className="row2" key={idx}>
                                <label htmlFor={`Check1${idx}`}>
                                    <span>주식회사카카오</span>
                                </label>
                            </div>
                            <div className="row3-box">
                                <div className="row3">
                                    <label htmlFor={`Check2${idx}`}>
                                        <input type="checkbox" name={`Check2${idx}`} id='{`Check2${idx}`}'/>
                                        <img src={`./img/main/${item.주소}/${item.이미지}`} alt="" />
                                        <span onClick={(e)=>onClickPro(e,item)}>{item.상품명}</span>
                                    </label>
                                </div>
                                <div className="row3-2">
                                    <div className="info-box">
                                        <div className="btn-box">
                                            <button>삭제</button>
                                            <div className="cnt-box">
                                                <span>{item.수량}</span>
                                                <button onClick={(e)=>onClickMinus(e,item.번호)} className={item.수량>1?'minus on':'minus'}></button>
                                                <button onClick={(e)=>onClickPlus(e,item.번호)} className='plus'></button>
                                            </div>
                                            <em>{((item.수량)*item.가격).toLocaleString("KO-KR")}원</em>
                                        </div>
                                    </div>
                                </div>
                                <ul className="row3-3">
                                    <li>
                                        <div className="left">상품금액 ({item.수량}개)</div>
                                        <div className="right">{((item.수량)*item.가격).toLocaleString("KO-KR")}원</div>
                                    </li>
                                    <li>
                                        <div className="left">즉시 할인금액</div>
                                        <div className="right">0원</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="line"></div>
                            </>
                            )
                        })
                        }
                        <div className="row4">
                            <li>
                                <div className="left">배송비</div>
                                <div className="right">{total.총주문금액>30000?'0원':'3000원'}</div>
                                
                                <div className="left on">주문 예상금액</div>
                                <div className="right on">{(total.총주문금액)<30000?((total.총주문금액)+3000).toLocaleString("KO-KR"):((total.총주문금액)).toLocaleString("KO-KR")}원</div>
                            </li>
                        </div>
                        <button className='order'>
                            <h2>{state.상품.length}건 주문하기</h2>
                        </button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};
