import React, { forwardRef } from "react";
import '../styles/components/time-today.css';

const TimeTodayTitle = forwardRef((props,ref)=>{
      return (              
        <h4 {...props} className="weather-today-title" ref={ref}>El tiempo hoy, Bogotá</h4>
      )  
})

export default TimeTodayTitle;