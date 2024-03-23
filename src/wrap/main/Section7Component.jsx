import React from 'react';
import axios from 'axios';
import Section7ComponentChild from './Section7ComponentChild';
import './scss/Section7.scss';

export default function Section7Component(){

    const [state,setState] = React.useState({
        슬라이드:[],
        여우:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section7.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                슬라이드:res.data.slide,
                여우:res.data.fox,
                n:res.data.slide.length
            })

        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div id='section7'>
            <Section7ComponentChild 슬라이드={state.슬라이드} 여우={state.여우} n={state.n}/>
        </div>
    );
};