import './styles/App.css';
import Header from './components/header/header';
import MainContainer from '../containers/maincontainer/mainContainer';
import GeneralData from './components/generalData/GeneralData';
import TimeToday from './components/timeToday/timeToday';
import ForecastToday from './components/foreCastToday/ForecastToday';
import ForecastDay from './elements/ForecastDay';
import ForecastDiary from './components/foreCastDiary/ForecastDiary';
import Radar from './components/radar/Radar';
import Footer from './components/Footer/Footer';
import HeaderBurguer from './components/headerBurguer/HeaderBurguer';
import { forwardRef ,useRef, useState } from 'react';
import NavbarIcons from './elements/NavbarIcons';
import TimeTodayTitle from './elements/timeTodayTitle';
import ForecastTodayTitle from './elements/ForecastTodayTitle';
import ForecastDiaryTitle from './elements/ForecastDiaryTitle';
import RadarFirstTitle from './elements/RadarFirstTitle';


function App(){
   const [burguer,changeBurguer] = useState(true);
   const toggleBurguer = () =>{
      changeBurguer(!burguer);
  }
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const handleTodayTitle = (event) =>{
   event.preventDefault();
   firstRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
   })  
   }
   
   const handleForecastTitle = (event) =>{
      event.preventDefault();
      secondRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      })
   }

   const handleDiaryTitle = (event) =>{
      event.preventDefault();
      thirdRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      })
   }

   const handleRadarTitle = (event) =>{
      event.preventDefault();
      fourthRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      })
   }
   return(
      <>
      <Header burguer={burguer} changeBurguer={changeBurguer} toggleBurguer={toggleBurguer}/>
        <HeaderBurguer burguer={burguer} 
        changeBurguer={changeBurguer}
        toggleBurguer={toggleBurguer} 
        handleTodayTitle={handleTodayTitle}
        handleForecastTitle={handleForecastTitle}
        handleDiaryTitle={handleDiaryTitle}
        handleRadarTitle={handleRadarTitle}/>
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

export default App;

