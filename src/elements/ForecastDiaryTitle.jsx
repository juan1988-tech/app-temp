import React, { forwardRef } from "react";
import '../styles/components/forecast-diary.css';

const ForecastDiaryTitle = forwardRef((props,ref)=>{
    return (
    <h4 {...props} className="title-forecast-dairy" ref={ref}>Pronóstico diario</h4>)
})


export default ForecastDiaryTitle;