import React from 'react';
import './Header.css';
import pufi from './pufi.png';
import umbrella from './umbrella.png';
import nap from './nap.png';
import card from './card.png'; 

export default function Header(){

  return(
    <div className='Header'>
      <div className='pufi'>
        pufi
      </div>
      <div className='images'>
        <div className='imageCnt'>
          <img src={pufi} alt="pufi"></img>
          <p>PUFI PUFF</p>
        </div>
        <div className='imageCnt'>
          <img src={umbrella} alt="umbrella" ></img>
          <p> PUFI RAIN</p>
        </div>
        <div className='imageCnt'>
          <img src={nap} alt="nap"></img>
          <p>PUFI NAP</p>
        </div>
        <div className='imageCnt'>
          <img src={card} alt="card"></img>
          <p>PUFI CARD</p>
        </div>
        
      </div>
      <div className='register'>
        <div>MI CUENTA</div>
        <div>MI COMPRA</div>
      </div>
    </div>
  );

}



