import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Section5ComponentChild({슬라이드,n}){

    const productWrap=React.useRef();
    const navigate = useNavigate()

    const [state,setState]=React.useState({
        btnOn:false,
        cnt:0
    })

    const onClickProduct=(e,item)=>{
        e.preventDefault();
        navigate('/productView',{
            state:{
                상품:item,
                주소:'section5'
            }
        })
    }

    const onClickRightBtn=(e)=>{
        e.preventDefault();
        if(state.cnt<2){
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
    React.useEffect(()=>{
        productWrap.current.style.left=`${-100*state.cnt}%`
        productWrap.current.style.transition='all 0.6s'
    },[state.cnt])
    return (
        <div className="container">
            <div className="title-box">
                <div className="title">
                    <strong>제일 잘 나가요</strong>
                    <a href="#">
                        <span>더보기</span>
                        <i class="material-icons">keyboard_arrow_right</i>
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="product-view">
                    <div className="product-wrap" ref={productWrap}>
                    {
                        슬라이드.map((item,idx)=>{
                        return(  
                                <div className="product-box">
                                    <div  onClick={(e)=>onClickProduct(e,item)} className="product">
                                        <div className="product-list" key={item.번호}>
                                            <div className="list1">
                                                <div className="img-box">
                                                    <img src={`./img/main/section5/${item.이미지}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="list2">
                                                <span>
                                                    {item.순서}
                                                </span>
                                            </div>
                                            <div className="list3">
                                                <span>{item.상품명}</span>
                                                <em>{item.가격.toLocaleString('ko-KR')}원</em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }           
                        <div className="product-right"></div>
                    </div>
                </div>
            </div>
            <div className="page-btn-box">
                <div className="btn-box">
                    <button className={`left-page-btn ${state.cnt===0?'on':''}`} onClick={onClickLeftBtn}>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                    <span className='page-num-box'><em>{state.cnt + 1}</em><i>/</i><em>3</em></span>
                    <button className={`right-page-btn ${state.cnt===2?'on':''}`}>
                        <i class="fa fa-chevron-left" onClick={onClickRightBtn}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
