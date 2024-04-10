import React from "react";
import timetodaylogo from '../../assets/icons/time-today.svg';
import pornosticToday from '../../assets/icons/pronostic-today.svg';
import pronosticDiary from '../../assets/icons/pronostic-diary.svg';
import radarlogo from '../../assets/icons/radar.svg';
import expand from '../../assets/icons/expand-down.svg';
import '../../styles/components/header-burguer.css';

const HeaderBurguer = ({burguer,changeBurguer,toggleBurguer}) =>{    
        return(
            <aside className={burguer?'header-burguer':'header-burguer-change'}>
                <h2 className="clima-app-header">CLIMA APP</h2>
                <ul className="header-list-right">
                    <li>
                        <img src={timetodaylogo}/>
                        <a href="#time-today">El tiempo hoy</a>
                    </li>
                    <li>
                        <img src={pornosticToday}/>
                        <a href="#forecast-today">Pronóstico hoy</a>
                    </li>
                    <li>
                        <img  src={pronosticDiary}/>
                        <a href="#forecast-diary">Pronóstico Diario</a>
                    </li>
                    <li>
                        <img src={radarlogo}/>
                        <a href="#radar">Radar</a>
                    </li>
                </ul>
                <section className="changeScaleTemp">
                    <p className="temp-string">°C</p>
                    <img className="expand" src={expand}/>
                </section>
            </aside>
        )
}

export default HeaderBurguer;