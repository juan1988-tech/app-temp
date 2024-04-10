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
import { useState } from 'react';


function App() {
   const [burguer,changeBurguer] = useState(true);
   const toggleBurguer = () =>{
      changeBurguer(!burguer);
  }
  
  return (
       <>
        <Header burguer={burguer} changeBurguer={changeBurguer} toggleBurguer={toggleBurguer}/>
        <HeaderBurguer burguer={burguer} changeBurguer={changeBurguer} toggleBurguer={toggleBurguer}/> 
        <MainContainer>
          <GeneralData/>
          <TimeToday/>
          <ForecastToday>
             <ForecastDay/> 
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
          </ForecastToday>
          <ForecastDiary>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
             <ForecastDay/>
          </ForecastDiary>
          <Radar/>
        </MainContainer>
        <Footer/>
        </>
  )
}

export default App
