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
import { useState, useRef } from 'react';
import { BurguerContext, SecondRefContext, ThirdRefContext, FourthRefContext } from '../burguerContext';
import { ToggleBurguerContext } from '../burguerContext';
import { RefContext } from '../burguerContext';



function AppUI(){        
    const [burguer,changeBurguer] = useState(true);   
    const toggleBurguer = () =>{
        changeBurguer(!burguer);
    }   
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);

    return(
    <ToggleBurguerContext.Provider value={toggleBurguer}>
     <BurguerContext.Provider value={burguer}>
        <RefContext.Provider value={firstRef}>
         <SecondRefContext.Provider value={secondRef}>
           <ThirdRefContext.Provider value={thirdRef}>
            <FourthRefContext.Provider value={fourthRef}> 
            <Header/>
            <HeaderBurguer/>
            <NavbarIcons/> 
        <MainContainer>
         <GeneralData />
          <TimeTodayTitle/>
          <TimeToday/>
          <ForecastTodayTitle/>
          <ForecastToday>
             <ForecastDay/> 
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
          </ForecastToday>
          <ForecastDiaryTitle/>
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
        </FourthRefContext.Provider>
        </ThirdRefContext.Provider>
        </SecondRefContext.Provider> 
        </RefContext.Provider> 
      </BurguerContext.Provider>
    </ToggleBurguerContext.Provider>
    )
}

export default AppUI;