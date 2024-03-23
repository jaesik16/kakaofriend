import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Section3ComponentChild({슬라이드,n}){

    const navigate = useNavigate()

    const onClickProduct=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item,
                주소:'section3'
            }
        })
    }


    return (
        <div className="container">
            <div className="title-box">
                <div className="title">
                    <strong>새로 나왔어요</strong>
                    <a href="#">
                        <span>더보기</span>
                        <i class="material-icons">keyboard_arrow_right</i>
                    </a>
                </div>
            </div>
            <div className="content">
                {
                    슬라이드.map((item,idx)=>{
                        return(
                            <div onClick={(e)=>onClickProduct(e,item)} className="product-box" key={item.번호}>
                                <div className="product">
                                    <div className="product-img">
                                        <img src={`./img/main/section3/${item.이미지}`} alt="" />
                                    </div>
                                    <div className="product-text">
                                        <span>
                                            {item.상품명}
                                        </span>
                                    </div>
                                    <div className="product-cost">
                                        <em>
                                            {`${(item.가격).toLocaleString('ko-KR')}원`}
                                        </em>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};
