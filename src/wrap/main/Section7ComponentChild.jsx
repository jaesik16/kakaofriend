import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Section7ComponentChild({슬라이드,여우,n}){
    const [state,setState] = React.useState({
        isNew:false
    })

    const navigate = useNavigate()

    const onClickProduct=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item,
                주소:'section7'
            }
        })
    }

    const onClickNew=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isNew:!state.isNew
        })
    }


    return (
        <div className="container">
{           state.isNew===false &&
            <div className="cotent">
                <div className="top-img-box">
                    <img src="./img/main/section7/sec7.webp" alt="" />
                </div>
                <div className="middle-title">
                    <span>매력적인 와사비베어</span>
                    <strong>3만원 이상 구매 시 스티커 증정 🌈</strong>
                </div>
                <div className="product-box">
                    <div className="product-list">
{                        
                        슬라이드.map((item,idx)=>{
                            return(
                                <div onClick={(e)=>onClickProduct(e,item)} className="list-box" key={item.번호}>
                                    <div className="img-box">
                                        <img src={`./img/main/section7/${item.이미지}`} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <span>
                                            {item.상품명}
                                        </span>
                                        <em>
                                            {item.가격.toLocaleString('ko-KR')}원
                                        </em>
                                    </div>
                                </div>
                            )
                        })
}
                    </div>
                </div>
                <div className="button-box">
                    <button className='btn1'>기획전 보러가기</button>
                    <button onClick={onClickNew} className='btn2'><i class="material-icons">refresh</i><em>다른 기획전 보러가기 (1/2)</em></button>
                </div>
            </div>
            }
{           state.isNew===true &&
            <div className="cotent">
                <div className="top-img-box">
                    <img src="./img/main/section7/sec72.webp" alt="" />
                </div>
                <div className="middle-title">
                    <span>매력적인 와사비베어</span>
                    <strong>3만원 이상 구매 시 스티커 증정 🌈</strong>
                </div>
                <div className="product-box">
                    <div className="product-list">
{                        
                        여우.map((item,idx)=>{
                            return(
                                <div  onClick={(e)=>onClickProduct(e,item)} className="list-box" key={item.번호}>
                                    <div className="img-box">
                                        <img src={`./img/main/section7/${item.이미지}`} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <span>
                                            {item.상품명}
                                        </span>
                                        <em>
                                            {item.가격}
                                        </em>
                                    </div>
                                </div>
                            )
                        })
}
                    </div>
                </div>
                <div className="button-box">
                    <button className='btn1'>기획전 보러가기</button>
                    <button onClick={onClickNew} className='btn2'><i class="material-icons">refresh</i><em>다른 기획전 보러가기 (2/2)</em></button>
                </div>
            </div>
            }
        </div>
    );
};
