import '../styles/App.css';
import React, { createContext } from 'react';
import Header from '../components/header/header';
import MainContainer from '../../containers/maincontainer/mainContainer';
import GeneralData from '../components/generalData/GeneralData';
import TimeToday from '../components/timeToday/timeToday';
import ForecastToday from '../components/foreCastToday/ForecastToday';
import ForecastDay from '../elements/ForecastDay';
import ForecastDiary from '../components/foreCastDiary/ForecastDiary';
import Radar from '../components/radar/Radar';
import Footer from '../components/Footer/Footer';
import HeaderBurguer from '../components/headerBurguer/HeaderBurguer';
import NavbarIcons from '../elements/NavbarIcons';
import TimeTodayTitle from '../elements/timeTodayTitle';
import ForecastTodayTitle from '../elements/ForecastTodayTitle';
import ForecastDiaryTitle from '../elements/ForecastDiaryTitle';
import RadarFirstTitle from '../elements/RadarFirstTitle';
import { useState } from 'react';
import { BurguerContext } from '../burguerContext';
import { ToggleBurguerContext } from '../burguerContext';

function AppUI({firstRef,secondRef,
    thirdRef,fourthRef,handleTodayTitle,handleForecastTitle,handleDiaryTitle,
    handleRadarTitle}){        
    const [burguer,changeBurguer] = useState(true);   
    const toggleBurguer = () =>{
        changeBurguer(!burguer);
    }

    return(
        <>
        <ToggleBurguerContext.Provider value={toggleBurguer}>
        <BurguerContext.Provider value={burguer}>
            <Header toggleBurguer={toggleBurguer}/>
            <HeaderBurguer  
                toggleBurguer={toggleBurguer} 
                handleTodayTitle={handleTodayTitle}
                handleForecastTitle={handleForecastTitle}
                handleDiaryTitle={handleDiaryTitle}
                handleRadarTitle={handleRadarTitle}/>
            </BurguerContext.Provider>
        </ToggleBurguerContext.Provider>
        <NavbarIcons/> 
        <MainContainer>
         <GeneralData />
          <TimeTodayTitle ref={firstRef}/>
          <TimeToday/>
          <ForecastTodayTitle ref={secondRef}/>
          <ForecastToday>
             <ForecastDay/> 
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
          </ForecastToday>
          <ForecastDiaryTitle ref={thirdRef}/>
          <ForecastDiary>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
          </ForecastDiary>
          <RadarFirstTitle ref={fourthRef}/>
          <Radar/>
        </MainContainer>
        <Footer/>
        </>
    )
}

export default AppUI;