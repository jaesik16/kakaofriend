import React from 'react';
import axios from 'axios';
import Section4ComponentChild from './Section4ComponentChild';
import './scss/Section4.scss';

export default function Section4Component(){

    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section4.json',
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
        <div id='section4'>
            <Section4ComponentChild 슬라이드={state.슬라이드} n={state.n}/>
        </div>
    );
};