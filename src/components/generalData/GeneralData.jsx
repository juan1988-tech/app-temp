import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../styles/components/general-data.css';
import GeneralWeatherImage from '../../elements/GeneralWeatherImage';
import { ToggleBurguerContext } from '../../burguerContext';

const GeneralData = () =>{
const { defaultCity} = useContext(ToggleBurguerContext);
const date = new Date().getDate();

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
            <GeneralWeatherImage/>    
        </section>
    )
}

export default GeneralData;