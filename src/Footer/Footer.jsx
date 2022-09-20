import React from "react";
import "./Footer.css";
import face from "./face.png";
import twit from "./twit.png";
import insta from "./insta.png";
import compra from "./compra.png";

export default function Footer(){

    return(
        <div className="footer">
            <div>
                <h1>Pufi</h1>
            </div>
            <div className="info">
                <p>Pufi Rain</p>
                <p>Pufi Puff</p>
                <p>Pufi Cart</p>
                <p>Pufi Nap</p>
            </div>
            <div className="info">
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>COMO COMPRAR</p>
                <p>TERMINOS &amp; CONDICIONES</p>
            </div>
            <div className="info">
                <p>COMPRA 100% SEGURA</p>
                <img src={compra} alt="" />
                {/* // <img src={galery1} alt="" />
                // <img src={galery1} alt="" /> */}
            </div>
            <div>
                <p>SEGUINOS EN</p>
                <img src={face} alt="" />
                <img src={twit} alt="" />
                <img src={insta} alt="" />
            </div>
        </div>
    );
}