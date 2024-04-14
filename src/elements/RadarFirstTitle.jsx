import React, { forwardRef, useContext } from "react";
import '../styles/components/radar.css';
import { FourthRefContext } from "../burguerContext";

const RadarFirstTitle = forwardRef((props,ref)=>{
    const refCont = useContext(FourthRefContext)
    return(
        <h4 {...props} className="radar-first-title" ref={refCont}>Radar</h4>
    )
})


export default RadarFirstTitle;