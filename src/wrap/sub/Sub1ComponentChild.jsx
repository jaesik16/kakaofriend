import React from 'react';
import './scss/sub1.scss'

export default function Sub1ComponentChild({상품}){

    const [state,setState] = React.useState({
        isBtn1:false,
        isBtn2:true
    })

    const onClickBtn1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isBtn1:false,
            isBtn2:true,
            상품:상품.sort((a, b)=> b.할인율 - a.할인율)
        })
    }
    const onClickBtn2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isBtn1:true,
            isBtn2:false,
            상품:상품.sort((a, b)=> b.판매량 - a.판매량)
        })
    }
    return (
        <div className="container">
            <div className="content">
                <div className="title-box">
                    <div className="title">
                        <h2>지금 인기있는</h2>
                        <img src="./img/sub/sub1/title.png" alt="" />
                    </div>
                </div>
                <div className="button-box">
                        <button onClick={onClickBtn1} className={state.isBtn1?"btn1 on":"btn1"}>할인순</button>
                        <button onClick={onClickBtn2} className={state.isBtn2?"btn2 on":"btn2"}>스테디</button>
                </div>
                {   state.isBtn1 === false &&
                <div className="img-all-box">
                    {   상품.map((item,idx)=>{
                        return(
                            <div className="img-box" key={idx}>
                                <img src={`./img/sub/sub1/${item.이미지}`} alt="" />
                                <span className='product-name'>
                                    {item.상품명}
                                </span>
                                <span className='product-cost'>{item.할인율===0?(item.원가).toLocaleString('ko-KR'):(Math.round(item.원가 * (1-item.할인율))).toLocaleString('ko-KR')}원</span>
                                <div className="img-back"></div>
                                <button className={`num btn${idx+1}`}>{idx+1}</button>
                            </div>
                        )
                    })
                    }
                </div>
                }
                {   state.isBtn2 === false && 
                <div className="img-all-box">
                    {   상품.map((item,idx)=>{
                        return(
                            <div className="img-box" key={idx}>
                                <img src={`./img/sub/sub1/${item.이미지}`} alt="" />
                                <span className='product-name'>
                                    {item.상품명}
                                </span>
                                <span className='product-cost'>{item.할인율===0?(item.원가).toLocaleString('ko-KR'):(Math.round(item.원가 * (1-item.할인율))).toLocaleString('ko-KR')}원</span>
                                <div className="img-back"></div>
                                <button className={`num btn${idx+1}`}>{idx+1}</button>
                            </div>
                        )
                    })
                    }
                </div>  
                }
            </div>
        </div>
    );
};
