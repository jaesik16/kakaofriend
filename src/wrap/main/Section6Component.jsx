import React from 'react';
import axios from 'axios';
import Section6ComponentChild from './Section6ComponentChild';
import './scss/Section6.scss';

export default function Section6Component(){

    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section6.json',
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
        <div id='section6'>
            <Section6ComponentChild 슬라이드={state.슬라이드} n={state.n}/>
        </div>
    );
};