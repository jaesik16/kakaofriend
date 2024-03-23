import React from 'react';
import axios from 'axios';
import Section3ComponentChild from './Section3ComponentChild';
import './scss/Section3.scss';

export default function Section3Component(){

    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section3.json',
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
            console.log(err);
        })
    },[])

    return (
        <div id='section3'>
            <Section3ComponentChild 슬라이드={state.슬라이드} n={state.n}/>
        </div>
    );
};