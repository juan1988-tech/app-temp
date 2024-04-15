import React, { forwardRef, useContext } from "react";
import '../styles/components/radar.css';
import { ToggleBurguerContext } from "../burguerContext";

const RadarFirstTitle = forwardRef((props,ref)=>{
    const { fourthRef } = useContext(ToggleBurguerContext);
    return(
        <h4 {...props} className="radar-first-title" ref={fourthRef}>Radar</h4>
    )
})


export default RadarFirstTitle;