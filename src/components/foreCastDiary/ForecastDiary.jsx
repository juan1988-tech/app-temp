import React from "react";
import '../../styles/components/forecast-diary.css'


const ForecastDiary = ({children}) =>{
    return(
        <>
        <h4 className="title-forecast-dairy">Pronóstico diario</h4>
        <section className="forecast-diary-delay">
            {children}
        </section>
        </>
    )
}

export default ForecastDiary