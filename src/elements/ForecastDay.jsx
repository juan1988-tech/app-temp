import React from "react";
import '../../src/styles/elements/forecast-day.css';
import sunny from '../assets/images/cielo-claro.png';

const ForecastDay = () =>{
    return(
        <article className="forecast-day">
            <div className="forecast-target">
                <p className="forecast-hour">01:00 a.m.</p>
                <h1 className="forecast-target-temp">22°</h1>
                <img className="forecast-target-img" src={sunny}/>
            </div>
            <article className="forecast-min-max"> 
                    <p>Max/min</p>
                    <p>21/11°</p>
                </article>
        </article>
    )
}

export default ForecastDay;