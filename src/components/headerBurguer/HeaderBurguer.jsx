import React from "react";
import timetodaylogo from '../../assets/icons/time-today.svg';
import pornosticToday from '../../assets/icons/pronostic-today.svg';
import pronosticDiary from '../../assets/icons/pronostic-diary.svg';
import radarlogo from '../../assets/icons/radar.svg';
import ChangeScaleTemp from "../../elements/ChangeScaleTemp";
import '../../styles/components/header-burguer.css';
import { BurguerContext, RefContext, ToggleBurguerContext, SecondRefContext, ThirdRefContext, FourthRefContext } from "../../burguerContext";
import { useContext, useRef } from "react";

const HeaderBurguer = () =>{   
        const burguerCont = useContext(BurguerContext);
        const firstRefCont = useContext(RefContext);
        const seconRefCont = useContext(SecondRefContext);
        const thirdRefCont = useContext(ThirdRefContext);
        const fourthRefCont = useContext(FourthRefContext);
        const toggleBurguerCont = useContext(ToggleBurguerContext);
        
        const handleTodayTitle = (event) =>{
            toggleBurguerCont();
            event.preventDefault();
            firstRefCont.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })   
        }
        
        const handleForecastTitle = (event) =>{
            toggleBurguerCont();
            event.preventDefault();
            seconRefCont.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }

         const handleDiaryTitle = (event) =>{
            toggleBurguerCont();
            event.preventDefault();
            thirdRefCont.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }


         const handleRadarTitle = (event) =>{
            toggleBurguerCont();
            event.preventDefault();
            fourthRefCont.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }
        return(
            <ToggleBurguerContext.Provider value={burguerCont}>
            <aside className={burguerCont?'header-burguer':'header-burguer-change'}>
                <h2 className="clima-app-header">CLIMA APP</h2>
                <ul className="header-list-right">
                    <li>
                        <img src={timetodaylogo}/>
                        <a onClick={handleTodayTitle}>El tiempo hoy</a>
                    </li>
                    <li>
                        <img src={pornosticToday}/>
                        <a onClick={handleForecastTitle}>Pronóstico hoy</a>
                    </li>
                    <li>
                        <img  src={pronosticDiary}/>
                        <a  onClick={handleDiaryTitle}>Pronóstico Diario</a>
                    </li>
                    <li>
                        <img src={radarlogo}/>
                        <a  onClick={handleRadarTitle}>Radar</a>
                    </li>
                </ul>
               <ChangeScaleTemp classDescription="changeScaleTemp"/>
            </aside>
         </ToggleBurguerContext.Provider>
        )
}

export default HeaderBurguer;