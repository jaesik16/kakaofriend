import React from 'react';
import "./scss/sub2.scss"
export default function Sub2ComponentChild({상품}){

    const ul = React.useRef()

    const [state,setState]=React.useState({
        cnt:0
    })

    React.useEffect(()=>{
    ul.current.style.left=`${-640*state.cnt}px`
    ul.current.style.transition = 'all 0.6s';
    if(state.cnt===0){
        ul.current.style.transition = 'all 0s';
    }
    },[state.cnt])

    setTimeout(()=>{
        let cnt = state.cnt;
        if(state.cnt===3){
            cnt=0
        }
        else{
            cnt = cnt+1;
        }
        setState({
            ...state,
            cnt:cnt
        })
    },3000)

    return (
        <div className='container'>
            <div className="content">
                <div className="sec1">
                    <div className="title">
                        <img src="./img/sub/sub2/sub2_01_001.webp" alt="" />
                    </div>
                </div>
                <div className="sec2">
                    <div className="slide-view">
                        <div className="slide-wrap">
                            <ul ref={ul}>
                                <li><img src="./img/sub/sub2/sub2_02_001.jpg" alt="" /></li>
                                <li><img src="./img/sub/sub2/sub2_02_002.jpg" alt="" /></li>
                                <li><img src="./img/sub/sub2/sub2_02_003.jpg" alt="" /></li>
                                <li><img src="./img/sub/sub2/sub2_02_004.jpg" alt="" /></li>
                            </ul>
                        </div>
                        <div className="page-num">
                            <span>{state.cnt+1}/4</span>
                        </div>
                    </div>
                </div>
                <div className="sec3">
                    <div className="header">
                        <h2>인기 친구들을 소개합니다🙌</h2>
                    </div>
                    <div className="img-box">
                        <div className="img1">
                            <img src="./img/sub/sub2/sub2_03_001.webp" alt="" />
                            <a className='link1-1' href="!#"></a>
                            <a className='link1-2' href="!#"></a>
                        </div>
                        <div className="img2">
                            <img src="./img/sub/sub2/sub2_03_002.webp" alt="" />
                            <a className='link2-1' href="!#"></a>
                            <a className='link2-2' href="!#"></a>
                            <a className='link2-3' href="!#"></a>
                            <a className='link2-4' href="!#"></a>
                        </div>
                        <div className="img3">
                            <img src="./img/sub/sub2/sub2_03_003.webp" alt="" />
                            <a className='link3-1' href="!#"></a>
                            <a className='link3-2' href="!#"></a>
                            <a className='link3-3' href="!#"></a>
                            <a className='link3-4' href="!#"></a>
                        </div>
                    </div>
                    <div className="btn-box">
                        <img src="./img/sub/sub2/sub2_03_004.webp" alt="" />
                    </div>
                </div>
                <div className="sec4">
                    <div className="header">
                        <strong>WOW! 망곰 재입고🌟</strong>
                        <strong>WOW! 망곰 재입고🌟</strong>
                    </div>
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
                            </div>
                        )
                    })
                    }
                </div>
                </div>
            </div>
        </div>
    );
};
