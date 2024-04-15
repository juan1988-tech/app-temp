import React, { forwardRef, useContext } from "react";
import '../styles/components/time-today.css';
import { ToggleBurguerContext } from '../burguerContext';

const TimeTodayTitle = forwardRef((props,ref)=>{
  const { firstRef } = useContext(ToggleBurguerContext);
      return (              
        <h4 {...props} className="weather-today-title" ref={firstRef}>El tiempo hoy, Bogotá</h4>
      )  
})

export default TimeTodayTitle;