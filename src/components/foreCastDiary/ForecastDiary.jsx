import React, { useState } from "react";
import '../../styles/components/forecast-diary.css';
import { useEffect } from "react";
import axios from "axios";
import ForecastDay from "../../elements/ForecastDay";

const ForecastDiary = () =>{
const [forecastData, setForecastData] = useState();
let meses =[
    'ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEPT','OCT','NOV','DIC'
]

useEffect(()=>{
    axios.get('https://api.weatherapi.com/v1/forecast.json?key=d1882c6ee140493b8e9190408241804&q=bogota&days=5&aqi=no&alerts=no')
    .then(function(data){
        setForecastData(data)
    })
    .catch(function(error){
        console.log(error)
    })

},[])
const day = forecastData?.data?.forecast?.forecastday

    return(
         <section className="forecast-diary-delay">
            {day?.map(({date,day})=>{
           
                let partdate = date.split('-');
                let year = partdate[0];
                let month = parseInt(partdate[1]);
                let monthDesc = meses[month - 1]
                let dayDate = parseInt(partdate[2])
                const completeDate = `${monthDesc} ${dayDate}, ${year}`;
           
                const {avgtemp_c} = day
                let temp = `${Math.floor(avgtemp_c)}°`;

              
                const { maxtemp_c } = day
                let maxTemp = Math.floor(maxtemp_c);
                const { mintemp_c } = day;
                let minTemp = Math.floor(mintemp_c )
                const MaxMin = `${maxTemp}/${minTemp}°`

                return <ForecastDay forecasDate={completeDate}
                                    forecastTemp={temp}
                                    forecastMaxMin={MaxMin}
                                    key={completeDate}
                />
            })} 
       </section>
    )
}

export default ForecastDiary