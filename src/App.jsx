import './styles/App.css';
import Header from './components/header/header';
import MainContainer from '../containers/maincontainer/mainContainer';
import GeneralData from './components/generalData/GeneralData';
import TimeToday from './components/timeToday/timeToday';
import ForecastToday from './components/foreCastToday/ForecastToday';
import ForecastDay from './elements/ForecastDay';


function App() {
  return (
     <main className='big-container'>
        <Header/> 
        <MainContainer>
          <GeneralData/>
          <TimeToday/>
          <ForecastToday>
             <ForecastDay/> 
          </ForecastToday>
        </MainContainer>
      </main> 
  )
}

export default App
