import React, { useContext, useRef, useState } from 'react';
import '../../styles/components/general-data.css';
import soleado from '../../assets/images/soleado.png';
import { ToggleBurguerContext } from '../../burguerContext';

const GeneralData = () =>{
const date = new Date().getDate()

const { globalDataCity, setGeneralCity } = useContext(ToggleBurguerContext);
const { generalCity } = useContext(ToggleBurguerContext)

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
                <p className='general-city'>{generalCity}</p>
                <p className='general-date'> { day } DE { months[month] } DE { year }</p>
            </article>
            <h1 className='general-temperature'>22°</h1>
            <p className='general-sensation'>SOLEADO</p>
            <img className="general-weather-image" src={soleado}/>
        </section>
    )
}

export default GeneralData;