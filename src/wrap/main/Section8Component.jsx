import React from 'react';
import axios from 'axios';
import Section8ComponentChild from './Section8ComponentChild';
import './scss/Section8.scss';

export default function Section8Component(){
    const [state,setState] = React.useState({
        chonsik:[],
        apeach:[]
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section8.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                chonsik:res.data.chonsik,
                apeach:res.data.apeach
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div id='section8'>
            <Section8ComponentChild chonsik={state.chonsik} apeach={state.apeach}/>
        </div>
    );
};