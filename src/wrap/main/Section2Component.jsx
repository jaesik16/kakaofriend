import React from 'react';
import '../main/scss/Section2.scss'
import Section2ComponentChild from './Section2ComponentChild'
import axios from 'axios';

export default function Section2Component(){
    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section2.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                슬라이드:res.data.slide,
                n:res.data.slide.length
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div id='section2'>
            <Section2ComponentChild 슬라이드={state.슬라이드} n={state.n}/>
        </div>
    );
};