import React from "react";
import timetodaylogo from '../assets/icons/time-today.svg';
import pronosticToday from '../assets/icons/pronostic-today.svg';
import pronosticDiary from '../assets/icons/pronostic-diary.svg';
import radarlogo from '../assets/icons/radar.svg';
import '../styles/elements/navbar-icons.css';

const NavbarIcons = () =>{
    return(
        <aside className="navbar-icons">
            <ul className="navbar-list-images">
              <li>
                <img className="time-today-navbar" src={timetodaylogo}/>    
             </li>
             <li>
                <img className="pronostic-today-navbar" src={pronosticToday}/>
            </li>
            <li>
                <img className="pronostic-diary-navbar" src={pronosticDiary}/>    
            </li>
            <li>
                <img className="radar-navbar" src={radarlogo}/>    
            </li>  
            </ul>
        </aside>
    )
}

export default NavbarIcons;