import React from 'react';
import axios from 'axios';
import Sub2ComponentChild from "./Sub2ComponentChild"

export default function Sub2Component(){

    const [state,setState] = React.useState({
        상품:[]
    })
    
    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub2.json',
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
        <main id ="sub2">
            <Sub2ComponentChild 상품={state.상품}/>
        </main>
    );
};
