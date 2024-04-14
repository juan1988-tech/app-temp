import React, { forwardRef, useContext } from "react";
import '../styles/components/time-today.css';
import { RefContext } from "../burguerContext";

const TimeTodayTitle = forwardRef((props,ref)=>{
  const refCont = useContext(RefContext);
      return (              
        <h4 {...props} className="weather-today-title" ref={refCont}>El tiempo hoy, Bogotá</h4>
      )  
})

export default TimeTodayTitle;