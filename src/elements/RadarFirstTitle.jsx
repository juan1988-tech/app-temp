import React, { forwardRef } from "react";
import '../styles/components/radar.css';

const RadarFirstTitle = forwardRef((props,ref)=>{
    return(
        <h4 {...props} className="radar-first-title" ref={ref}>Radar</h4>
    )
})


export default RadarFirstTitle;