import React from 'react';
import './scss/Section9.scss'

export default function Section9Component(){


    return (
        <div className="container">
            <div className="title">
                <h2>귀여운 숏클립</h2>
            </div>
            <div className="content">
                <div className="video-box">
                    <video autoPlay muted loop src="https://t1.kakaocdn.net/friends/new_store/prod/home_tab/recommend_movie/recommend_movie_20231218090136_a4b6e05ba4b94705b433541f7df29bd1.mp4.recommend_movie.1080p.mp4"></video>
                    <div className="product-box">
                        <img src="./img/main/section9/sec9_01_001.webp" alt="" />
                        <div className="img-back"></div>
                        <div className="text-box">
                            <ul>
                                <li>MFGX 카카오프렌즈 더블코트_춘식이</li>
                                <li>카카오프렌즈 X 마리떼❄️</li>
                                <li>19,000원</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-btn-box">
                <div className="btn-box">
                    <button className='left-page-btn'>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                    <span className='page-num-box'><em>1</em><i>/</i><em>1</em></span>
                    <button className='right-page-btn'>
                        <i class="fa fa-chevron-left"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};