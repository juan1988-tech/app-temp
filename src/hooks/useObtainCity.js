import { useState, useContext } from 'react';
import { ToggleBurguerContext } from '../burguerContext';

const useObtainCity = ()=>{
    const [city,setCity] = useState();
    const [inputCity,setInputCity] = useState();
    const {globalDataCity,setGlobalDataCity} = useContext(ToggleBurguerContext);
     
    const handleInputCity = (e) =>{
        const inputCity = e.target.value
        inputCity.replace(/\s/g, '-');
        setInputCity(inputCity);   
    }

    function handleCityInputSend(e){
        e.preventDefault();
        const firstUrlPart = 'http://api.openweathermap.org/geo/1.0/direct?q=$';
        const secondUrlPart = '&limit=&appid=1ae718f4903ab234f9810bd6a50e0ef5';
        const completUrl = firstUrlPart+inputCity+secondUrlPart;
        
        /**url para llevar a la ubicacion conocida más cercana */
        const otherUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=4.6529539&lon=-74.0835643&limit=1&appid=1ae718f4903ab234f9810bd6a50e0ef5`

        fetch(completUrl)
            .then(res=>res.json())
            .then(res=>setCity(res))
            .then(()=>{
                let { name,lat,lon } = city[0]
                setGlobalDataCity({ name,lat,lon })      
            })
    }

    return {
        city,
        setCity,
        inputCity,
        setInputCity,
        handleInputCity,
        handleCityInputSend,
    }   
}  

export { useObtainCity }