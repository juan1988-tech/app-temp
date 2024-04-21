import React, { useState, useContext, useRef } from "react";
import { ToggleBurguerContext } from "../burguerContext";
import '../styles/components/general-data.css';

const GeneralWeatherImage = () =>{
    const {classNameImage} =useContext(ToggleBurguerContext) 
    return (
        <div className={classNameImage}></div>
    )
}

export default GeneralWeatherImage;