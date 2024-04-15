import React from "react";
import timetodaylogo from '../../assets/icons/time-today.svg';
import pornosticToday from '../../assets/icons/pronostic-today.svg';
import pronosticDiary from '../../assets/icons/pronostic-diary.svg';
import radarlogo from '../../assets/icons/radar.svg';
import ChangeScaleTemp from "../../elements/ChangeScaleTemp";
import '../../styles/components/header-burguer.css';
import { ToggleBurguerContext } from "../../burguerContext";
import { useContext, useRef } from "react";

const HeaderBurguer = () =>{   
        const { burguer,toggleBurguer,firstRef,secondRef,thirdRef,fourthRef } = useContext(ToggleBurguerContext) 
        
        const handleTodayTitle = (event) =>{
            toggleBurguer();
            event.preventDefault();
            firstRef.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })   
        }
        
        const handleForecastTitle = (event) =>{
            toggleBurguer();
            event.preventDefault();
            secondRef.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }

         const handleDiaryTitle = (event) =>{
            toggleBurguer();
            event.preventDefault();
            thirdRef.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }

         const handleRadarTitle = (event) =>{
            event.preventDefault();
            toggleBurguer();
            fourthRef.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'center'
            })
         }
        return(
            <aside className={burguer?'header-burguer':'header-burguer-change'}>
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
        )
}

export default HeaderBurguer;