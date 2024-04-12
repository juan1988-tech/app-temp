import AppUI from './appUI/AppUI';
import { forwardRef ,useRef, useState } from 'react';

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
        <AppUI
            burguer={burguer}
            changeBurguer={changeBurguer}
            toggleBurguer={toggleBurguer}
            firstRef={firstRef}
            secondRef={secondRef}
            thirdRef={thirdRef}
            fourthRef={fourthRef}
            handleTodayTitle={handleTodayTitle}
            handleForecastTitle={handleForecastTitle}
            handleDiaryTitle={handleDiaryTitle}
            handleRadarTitle={handleRadarTitle}
        />
      </>
   )
}

export default App;

