import React, { forwardRef, useContext } from "react";
import '../styles/components/forecast-diary.css';
import { ThirdRefContext } from "../burguerContext";

const ForecastDiaryTitle = forwardRef((props,ref)=>{
    const refCont = useContext(ThirdRefContext);
    return (
    <h4 {...props} className="title-forecast-dairy" ref={refCont}>Pronóstico diario</h4>)
})


export default ForecastDiaryTitle;