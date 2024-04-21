import React, { forwardRef, useContext } from "react";
import '../styles/components/forecast-diary.css';
import { ToggleBurguerContext } from "../burguerContext";


const ForecastDiaryTitle = forwardRef((props,ref)=>{
    const { thirdRef } = useContext(ToggleBurguerContext)
    return (
    <h4 {...props} className="title-forecast-dairy" ref={thirdRef}>Pronóstico diario, Bogotá</h4>)
})


export default ForecastDiaryTitle;