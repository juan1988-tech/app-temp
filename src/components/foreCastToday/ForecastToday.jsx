import React from "react";
import '../../styles/components/forecast-today.css'

const ForecastToday = ({children}) => {
    return(
        <>
            <h4 className="title-forecast-today">Pronostico diario</h4>
            <section className="forecast-today-delay">
                {children}
            </section>
        </>
    )
}

export default ForecastToday;