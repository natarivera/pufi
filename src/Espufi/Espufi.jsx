import React from "react";
import galery1  from "./galery1.png";
import galery2  from "./galery2.png";
import galery3  from "./galery3.png";
import galery4  from "./galery4.png";
import galery5  from "./galery5.png";
import galery6  from "./galery6.png";
import "./Espufi.css"



export default function Espufi(){

    return(
        <div className="espufi">
            <h1>Instagram</h1>
            <h2>#ESPUFI</h2>
            <div className="galery">
                <img src={galery1} alt="" />
                <img src={galery2} alt="" />
                <img src={galery3} alt="" />
                <img src={galery4} alt="" />
                <img src={galery5} alt="" />
                <img src={galery6} alt="" />
            </div>
        </div>
    );
}