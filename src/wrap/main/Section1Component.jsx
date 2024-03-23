import React from 'react';
import './scss/Section1.scss'
import Section1ComponentChild from './Section1ComponentChild';
import axios from 'axios';

export default function Section1Component(){

    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section1.json',
            method:'GET'
        })
        .then((result)=>{
            setState({
                ...state,
                슬라이드:result.data.slide,
                n:result.data.slide.length
            })
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])


    return (
        <div id='section1'>
            <Section1ComponentChild 슬라이드={state.슬라이드} n={state.n}/>
        </div>
    );
};