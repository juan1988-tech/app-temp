import React, { forwardRef, useContext, useState } from "react";
import '../styles/components/forecast-today.css';
import { SecondRefContext } from "../burguerContext";
 


const ForecastTodayTitle = forwardRef((props,ref)=>{  
    const refCont = useContext(SecondRefContext);
    return (    
        <h4 {...props} className="title-forecast-today" ref={refCont}>Pronostico hoy</h4> 
    )
})


export default ForecastTodayTitle;