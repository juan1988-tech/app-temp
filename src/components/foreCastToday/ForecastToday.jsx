import React from "react";
import '../../styles/components/forecast-today.css'

const ForecastToday = ({children}) => {
    return(
        <>
            <section className="forecast-today-delay">
                {children}
            </section>
        </>
    )
}

export default ForecastToday;