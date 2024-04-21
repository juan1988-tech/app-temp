import React, { forwardRef, useContext, useState } from "react";
import '../styles/components/forecast-today.css';
import { ToggleBurguerContext } from "../burguerContext";
 
const ForecastTodayTitle = forwardRef((props,ref)=>{  
   const { secondRef } = useContext(ToggleBurguerContext)
    return (    
        <h4 {...props} className="title-forecast-today" ref={secondRef}>Pronostico hoy,Bogotá</h4> 
    )
})


export default ForecastTodayTitle;