import React, { forwardRef } from "react";
import '../styles/components/forecast-today.css';

const ForecastTodayTitle = forwardRef((props,ref)=>{
    return (
    <h4 {...props} className="title-forecast-today" id="forecast-today" ref={ref}>Pronostico hoy</h4>)
})


export default ForecastTodayTitle;