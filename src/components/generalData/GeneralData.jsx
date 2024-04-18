import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../styles/components/general-data.css';
import soleado from '../../assets/images/cielo-claro.png';
import lluvia from '../../assets/images/lluvia.png';
import parcialLLueve from '../../assets/images/parcial-llueve.png';
import nubes from '../../assets/images/nubes.png';
import llovizna from '../../assets/images/llovizna.png';
import tormenta from '../../assets/images/tormenta.png'


import { ToggleBurguerContext } from '../../burguerContext';

const GeneralData = () =>{
const { defaultCity} = useContext(ToggleBurguerContext);
const date = new Date().getDate();
let { weatherDesc } = useContext(ToggleBurguerContext);
console.log(weatherDesc);

const today ={
    day: new Date().getDate(),
    month: new Date().getMonth(),
    months: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE',
        'OCTUBRE','NOVIEMBRE','DICIEMBRE'],
    year: new Date().getFullYear()
}

const { day } = today;
const { month } = today;
const { months} = today;
const { year } = today; 

    return(
        <section className='general-data' id="general-data">
            <article className='general-location'>
                <p className='general-city'>{defaultCity.city}</p>
                <p className='general-date'> { day } DE { months[month] } DE { year }</p>
            </article>
            <h1 className='general-temperature'>{defaultCity.temp}</h1>
            <p className='general-sensation'>{defaultCity.sens}</p>
            {weatherDesc==='CIELO CLARO'?<img className="general-weather-image" src={soleado}/>:<img className="general-weather-image" src={soleado}/> }
            {weatherDesc==='TORMENTA'?<img className="general-weather-image" src={tormenta}/>:<img className="general-weather-image" src={soleado}/>}    
            {weatherDesc==='LLOVIZNA'?<img className="general-weather-image" src={llovizna}/>:<img className="general-weather-image" src={soleado}/>}
            {weatherDesc==='LLUVIA'?<img className="general-weather-image" src={lluvia}/>:<img className="general-weather-image" src={soleado}/>}
            {weatherDesc==='NEVADO'?<img className="general-weather-image" src={nubes}/>:<img className="general-weather-image" src={soleado}/>}
        </section>
    )
}

export default GeneralData;