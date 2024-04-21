import React from "react";
import '../../src/styles/elements/forecast-day.css';
import sunny from '../assets/images/cielo-claro.png';

const ForecastDay = ({forecasDate,forecastTemp,forecastMaxMin}) =>{
    return(
        <article className="forecast-day">
            <div className="forecast-target">
                <p className="forecast-hour">{forecasDate}</p>
                <h1 className="forecast-target-temp">{forecastTemp}</h1>
                <img className="forecast-target-img" src={sunny}/>
            </div>
            <article className="forecast-min-max"> 
                    <p>Max/min</p>
                    <p>{forecastMaxMin}</p>
                </article>
        </article>
    )
}

export default ForecastDay;