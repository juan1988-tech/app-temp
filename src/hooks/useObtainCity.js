import { useState, useContext } from 'react';
import { ToggleBurguerContext } from '../burguerContext';
import axios from 'axios';

const useObtainCity = ()=>{
    const [city,setCity] = useState();
    const [inputCity,setInputCity] = useState();
    const {generalCity,setGeneralCity} = useContext(ToggleBurguerContext)
    const {globalDataCity,setGlobalDataCity} = useContext(ToggleBurguerContext);
     
    const handleInputCity = (e) =>{
        const inputCity = e.target.value;
        inputCity.replace(/\s/g, '-');
        console.log(inputCity);
        setInputCity(inputCity);   
    }
 
 function handleCityInputSend(e){
        e.preventDefault();

        const firstUrlPart = 'http://api.openweathermap.org/geo/1.0/direct?q=$';
        const secondUrlPart = '&limit=&appid=1ae718f4903ab234f9810bd6a50e0ef5';
        const latlongUrl = firstUrlPart+inputCity+secondUrlPart;

        axios.get(latlongUrl)
            .then(function(response){
                setCity(response.data);
            })
            .then(function(){
                console.log(city[0].local_names.es)
                setGeneralCity(city[0].local_names.es);
            })
    }

        /* funciones cambio de datos general data*/

    return {
        city,
        setCity,
        inputCity,
        setInputCity,
        handleInputCity,
        handleCityInputSend,
        generalCity,
        setGeneralCity
    }   
}  

export { useObtainCity }