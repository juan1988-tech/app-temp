import React from "react";
import expand from '../assets/icons/expand-down.svg';
import '../styles/components/header-burguer.css';
import { useState } from "react";


const ChangeScaleTemp = ({classDescription}) =>{
    const [logo,setLogo] = useState(true);
    
    const handleScale = () =>{
        setLogo(!logo)
        console.log(logo)
    }


    return(
        <section className={classDescription} onClick={handleScale}>
            <p className="temp-string">{ logo?'°C':'°F' }</p>
            <img className={ logo?"expand-down":"expand-up"} src={expand}/>
        </section> 
    )
}

export default ChangeScaleTemp