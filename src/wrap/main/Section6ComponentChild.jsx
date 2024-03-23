import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Section6ComponentChild({슬라이드,n}){

    const navigate = useNavigate()

    const onClickProduct=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item,
                주소:'section6'
            }
        })
    }

    return (
        <div className="container">
            <div className="cotent">
                <video autoPlay muted loop src="https://t1.kakaocdn.net/friends/new_store/prod/home_tab/recommend_movie/recommend_movie_20231109141803_862a08ab82fb45f2b4b3486c28e82b33.mp4.recommend_movie.1080p.mp4"></video>
                <div className="middle-title">
                    <span>디어마이산타🎄</span>
                    <strong>산타 춘식이에게 내 소원이 닿기를 🎅</strong>
                </div>
                <div className="product-box">
                    <div className="product-list">
{                        
                        슬라이드.map((item,idx)=>{
                            return(
                                <div onClick={(e)=>onClickProduct(e,item)} className="list-box" key={item.번호}>
                                    <div className="img-box">
                                        <img src={`./img/main/section6/${item.이미지}`} alt="" />
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
                    <button>기획전 보러가기</button>
                </div>
            </div>
        </div>
    );
};
