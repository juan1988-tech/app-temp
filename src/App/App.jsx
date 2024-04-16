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
import { ToggleBurguerContext } from '../burguerContext';



function App(){        
    const [burguer,changeBurguer] = useState(true);   
    const toggleBurguer = () =>{
        changeBurguer(!burguer);
    }   
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    
    const [globalDataCity,setGlobalDataCity] = useState();
    const [generalCity,setGeneralCity] = useState('Bogotá')

    
    return(
    <ToggleBurguerContext.Provider value={{burguer,changeBurguer,toggleBurguer,firstRef,
    secondRef,thirdRef,fourthRef,globalDataCity,setGlobalDataCity,generalCity,setGeneralCity}}>
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
     <RadarFirstTitle/>
     <Radar/>
   </MainContainer>
   <Footer/>
</ToggleBurguerContext.Provider>
    )
}

export default App;


