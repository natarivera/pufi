import React from "react";
import "./Pufinfo.css";

export default function Pufinfo(props){
    return(
        <div className="Pufinfo">
            <img src={props.src} alt="" className="imginfo"/>
            <h1>{props.title}</h1>
            <div className="divider"></div>
            <h2>{props.descripcion}</h2>
            <a href="#">&#62;{props.vermas}</a>
        </div>
    );
}