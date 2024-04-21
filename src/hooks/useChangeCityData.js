import { useContext, useEffect, useState } from 'react';
import { ToggleBurguerContext } from '../burguerContext';

const useChangeCityData = () =>{
    const [inputCity,setInputCity] = useState();

    return(inputCity,setInputCity)
}

export { useChangeCityData }