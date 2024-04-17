import React, { useContext, useRef, useState } from 'react';
import '../../styles/components/general-data.css';
import soleado from '../../assets/images/soleado.png';
import { ToggleBurguerContext } from '../../burguerContext';

const GeneralData = () =>{
const date = new Date().getDate()
const {generalCityDefault,setGeneralCityDefault,generalTempDefault,setGeneralTempDefault} = useContext(ToggleBurguerContext)

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
                <p className='general-city'>{generalCityDefault}</p>
                <p className='general-date'> { day } DE { months[month] } DE { year }</p>
            </article>
            <h1 className='general-temperature'>{generalTempDefault}</h1>
            <p className='general-sensation'>SOLEADO</p>
            <img className="general-weather-image" src={soleado}/>
        </section>
    )
}

export default GeneralData;