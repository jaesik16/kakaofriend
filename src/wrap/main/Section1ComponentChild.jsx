import React from 'react';

export default function Section1ComponentChild({슬라이드,n}) {

    const slideWrap = React.useRef(); 
    const [state,setState] = React.useState({
        cnt:0
    })
    React.useEffect(()=>{
        if(state.cnt>10){
            slideWrap.current.style.left=`${0}%`
            slideWrap.current.style.transition='none'
            setState({
                ...state,
                cnt:1
            })
        }
        else if(state.cnt<-1){
            slideWrap.current.style.left=`${0}%`
            slideWrap.current.style.transition='none'
            setState({
                ...state,
                cnt:9
            })
        }
        else{
            slideWrap.current.style.left=`${-100*state.cnt}%`
            slideWrap.current.style.transition='all 0.4s ease-in-out'
        }
    },[state.cnt])

    // 3-1. 다음카운트 클릭 이벤트
    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt+1
        });  
    }


    // 3-2. 이전카운트 클릭 이벤트
    const onClickPrev=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt-1
        });  // cnt-1
    }


    return (
        <div className="container">
            <div className="slide-view">
                <div ref={slideWrap} className="slide-wrap">  
                    {
                        슬라이드.map((item, idx)=>{
                            return (
                                <div className="slide" key={item.번호}>
                                    <img src={`./img/main/section1/${item.이미지}`} alt="" />
                                </div>
                            )
                        })
                    }   
                </div>
            </div>
            <a href="!#" onClick={onClickNext} className='next-arrow-btn'></a>
            <a href="!#" onClick={onClickPrev} className='prev-arrow-btn'></a>
            <span className='page-num-box'><em>{state.cnt+1>n-2?1:state.cnt+1}</em><i>/</i><em>{n-2}</em></span>
        </div>
    );
};
