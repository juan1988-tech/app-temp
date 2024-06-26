import React from "react";
import soleado from '../../assets/images/cielo-claro.png';
import '../../styles/components/time-today.css';
import maxmin from '../../assets/icons/max-min.svg';
import humidity from '../../assets/icons/humidity.svg';
import pressure from '../../assets/icons/pressure.svg';
import wind from '../../assets/icons/wind.svg';
import visibility from '../../assets/icons/wind.svg'
import pointrose from '../../assets/icons/point-rose.svg';

const TimeToday = () =>{
    return(
        <>  
        <section className="weather-today-delay">
            <article className="weather-today">
                <h1 className="weather-today-temp">22°</h1>
                <p className="weather-general-state">SOLEADO</p>
                <img  className="weather-general-image" src={ soleado }/>
            </article>
            <article className="weather-general-data">
                <img src={maxmin}/>
                <p>Max/min</p>
                <p>21/11°</p>
                <img src={humidity} />
                <p>Humedad</p>
                <p>45°</p>
                <img src={pressure}/>
                <p>Presión</p>
                <p>1029,1mb</p>
                <img src={visibility}/>
                <p>Visibilidad</p>
                <p>9.66 km</p>
                <img src={wind}/>
                <p>Viento</p>
                <p>23 km/h</p>
                <img src={pointrose}/>
                <p>Punto de Rocío</p>
                <p>7°</p>
            </article>
        </section>
    </>
    )
} 

export default TimeToday;