import React from 'react';
import axios from 'axios';
import Sub1ComponentChild from './Sub1ComponentChild';

export default function Sub1Component(){

    const [state,setState] = React.useState({
        상품:[]
    })

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub1.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                상품:res.data.상품
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <main id='sub1'>
            <Sub1ComponentChild 상품={state.상품}/>
        </main>
    );
};
