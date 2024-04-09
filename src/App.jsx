import './styles/App.css';
import Header from './components/header/header';
import MainContainer from '../containers/maincontainer/mainContainer';
import GeneralData from './components/generalData/GeneralData';
import TimeToday from './components/timeToday/timeToday';

function App() {
  return (
     <main className='big-container'>
        <Header/> 
        <MainContainer>
          <GeneralData/>
          <TimeToday/> 
        </MainContainer>
      </main> 
  )
}

export default App
