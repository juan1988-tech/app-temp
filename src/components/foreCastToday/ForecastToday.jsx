import React, { useEffect } from "react";
import '../../styles/components/forecast-today.css'
import axios from "axios";
import ForecastDay from "../../elements/ForecastDay";

const ForecastToday = () => {
const [forecastHours,setForecastHours] = React.useState();
useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=venecia&appid=1ae718f4903ab234f9810bd6a50e0ef5')
    .then(function(data){
        setForecastHours(data);
    })
},[])

const currentHour = new Date().getHours()

const listHours = forecastHours?.data?.list

let currentHourList = listHours?.slice(currentHour,currentHour+5);

    return(
        <>
            <section className="forecast-today-delay">
                {currentHourList.map(({dt_txt,main})=>{
          
                    let dateTex = dt_txt
                    const patron = /(\d{2}:\d{2})/
                    let hour = dateTex.match(patron)
        
                    const {temp} = main;
                    const editedTemp = Math.floor(temp/10) 

                    const {temp_max} =main;
                    const editedTempMax = Math.floor(temp_max/10)

                    const {temp_min} = main;
                    const editedTempMin = Math.floor(temp_min/10)
                    const maxMin = `${editedTempMax}/${editedTempMin}°`

                    return <ForecastDay 
                    forecasDate={hour[1]}
                    forecastTemp={`${editedTemp}°`}
                    forecastMaxMin={maxMin}
                        />
                })}
            </section>
        </>
    )
}

export default ForecastToday;