import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Section8Component({chonsik,apeach}){
    const ul = React.useRef();
    const productSlide = React.useRef();
    const navigate = useNavigate()
    const [state,setState]=React.useState({
        cnt:0
    })

    const onClickProduct=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item,
                주소:'section8'
            }
        })
    }

    React.useEffect(()=>{
        productSlide.current.style.left=`${-100*state.cnt}%`
        productSlide.current.style.transition='all 0.6s ease-in-out'
    },[state.cnt])

    const onClickRightBtn=(e)=>{
        e.preventDefault();
        if(state.cnt<1){
            setState({
                cnt:state.cnt+1
            })
        }

    }
    const onClickLeftBtn=(e)=>{
        e.preventDefault();
        if(state.cnt>0){
            setState({
                cnt:state.cnt-1
            })
        }
    }

    const onClikcChar1=(e)=>{e.preventDefault(); }
    const onClikcChar2=(e)=>{e.preventDefault(); }
    const onClikcChar3=(e)=>{e.preventDefault(); }
    const onClikcChar4=(e)=>{e.preventDefault(); }
    const onClikcChar5=(e)=>{e.preventDefault(); }
    const onClikcChar6=(e)=>{e.preventDefault(); }
    const onClikcChar7=(e)=>{e.preventDefault(); }
    const onClikcChar8=(e)=>{e.preventDefault(); }
    const onClikcChar9=(e)=>{e.preventDefault(); }
    const onClikcChar10=(e)=>{e.preventDefault();}


    const onClickRight=(e)=>{
        e.preventDefault();
        ul.current.style.transition = 'all 0.6s';
        ul.current.style.left = `${-124}px`;
    }
    const onClickLeft=(e)=>{
        e.preventDefault();
        ul.current.style.transition = 'all 0.6s';
        ul.current.style.left = `${0}px`;
    }

    return (
        <div className="container">
            <div className="content">
                <div className="title-box">
                    <h1>내가 좋아하는 캐릭터</h1>
                </div>
                <div className="img-wrap">
                    <div className="img-slide">
                        <div className="left-btn">
                            <button onClick={onClickLeft}>
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="right-btn">
                            <button onClick={onClickRight}>
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="img-slide-view">
                            <ul ref={ul}>
                                <li><a href=""  onClick={onClikcChar1}><img src="./img/main/section8/sec8_1.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar2}><img src="./img/main/section8/sec8_2.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar3}><img src="./img/main/section8/sec8_3.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar4}><img src="./img/main/section8/sec8_4.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar5}><img src="./img/main/section8/sec8_5.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar6}><img src="./img/main/section8/sec8_6.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar7}><img src="./img/main/section8/sec8_7.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar8}><img src="./img/main/section8/sec8_8.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar9}><img src="./img/main/section8/sec8_9.webp" alt="" /></a></li>
                                <li><a href=""  onClick={onClikcChar10}><img src="./img/main/section8/sec8_10.webp" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-wrap">
                    <div className="product-slide">
                        <div className="product-view">

                            <ul ref={productSlide}>
                                {
                                    chonsik.map((item,idx)=>{
                                        return(
                                            <li onClick={(e)=>onClickProduct(e,item)} key={idx}>
                                                <img src={`./img/main/section8/${item.이미지}`} alt="" />
                                                <div className="img-back"></div>
                                                <div className="text-box">
                                                    <span>{item.상품명}</span>
                                                    <span>{item.가격.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
{                       false &&                            
                            <ul ref={productSlide}>
                                {
                                    apeach.map((item,idx)=>{
                                        return(
                                            <li key={idx}>
                                                <img src={`./img/main/section8/${item.이미지}`} alt="" />
                                                <div className="img-back"></div>
                                                <div className="text-box">
                                                    <span>{item.상품명}</span>
                                                    <span>{item.가격.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
}
                        </div>
                    </div>
                    <div className="page-btn-box">
                        <div className="btn-box">
                            <button className={`left-page-btn ${state.cnt===0?'on':''}`} onClick={onClickLeftBtn}>
                                <i class="fa fa-chevron-right"></i>
                            </button>
                            <span className='page-num-box'><em>{state.cnt + 1}</em><i>/</i><em>2</em></span>
                            <button className={`right-page-btn ${state.cnt===1?'on':''}`}>
                                <i class="fa fa-chevron-left" onClick={onClickRightBtn}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};