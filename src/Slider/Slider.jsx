import React from 'react';
import './Slider.css';
import sea from './sea.jpg'; 

export default function Slider(){

    return ( 
        <div className='sea'>
            <h1>ESTAR COMODO, NUNCA FUE TAN FACIL.</h1>
            <img src={sea} alt="sea"></img>            
        </div>
        );
}