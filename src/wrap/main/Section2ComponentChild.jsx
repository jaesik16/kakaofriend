import React from 'react';

export default function Section2ComponentChild({슬라이드,n}){

    const slideWrap=React.useRef();
    const [state,setState]=React.useState({
        cnt:1,
        btnOn:false,
    })







    const onClickRightBtn=(e)=>{
        e.preventDefault();
        slideWrap.current.style.left = `${-100}%`;
        slideWrap.current.style.transition = 'all 0.6s';
        setState({
            ...state,
            btnOn:true,
            cnt:2
        })
    }
    const onClickleftBtn=(e)=>{
        e.preventDefault();
        slideWrap.current.style.left = `${0}%`;
        slideWrap.current.style.transition = 'all 0.6s';
        setState({
            ...state,
            btnOn:false,
            cnt:1
        })
    }

    return (
        <div className="container">
        <div className="content">
            <div className="slide-view">
                <div ref={slideWrap} className="slide-wrap">
                    {
                        슬라이드.map((item,idx)=>{
                            return(
                                <div className="slide" key={item.번호}>
                                    <a href="#">
                                        <div className="img-box" >
                                            <img src={`./img/main/section2/${item.이미지}`} alt="" />
                                            <em>{item.제목}</em>
                                        </div>
                                        <span></span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="page-btn-box">
                <div className="btn-box">
                    <button className={`left-page-btn ${state.btnOn?'':'on'}`} onClick={onClickleftBtn}>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                    <span className='page-num-box'><em>{state.cnt}</em><i>/</i><em>2</em></span>
                    <button className={`right-page-btn ${state.btnOn?'on':''}`} onClick={onClickRightBtn}>
                        <i class="fa fa-chevron-left"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};
