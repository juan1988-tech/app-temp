import React from "react";
import '../../styles/components/forecast-diary.css'


const ForecastDiary = ({children}) =>{
    return(
        <>
        <section className="forecast-diary-delay" id="forecast-diary">
            {children}
        </section>
        </>
    )
}

export default ForecastDiary