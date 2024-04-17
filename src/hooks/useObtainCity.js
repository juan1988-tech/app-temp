import { useState, useContext } from 'react';
import { ToggleBurguerContext } from '../burguerContext';
import axios from 'axios';

const useObtainCity = ()=>{
    
    const [inputCity,setInputCity] = useState();
    const [city,setCity] = useState();
    const [generalCity,setGeneralCity] = useState();
    const [temp,setTemp] = useState();
    const [generalTemp,setGeneralTemp] = useState();
    const { generalData,setGeneralData } = useContext(ToggleBurguerContext);
    const {generalCityDefault,setGeneralCityDefault,generalTempDefault,setGeneralTempDefault} = useContext(ToggleBurguerContext);
    
     
    const handleInputCity = (e) =>{
        const inputCity = e.target.value;
        inputCity.replace(/\s/g, '-');
        setInputCity(inputCity);   
    }
 
 function obtainNameCity(){
    const firstUrlPart = 'http://api.openweathermap.org/geo/1.0/direct?q=';
    const secondUrlPart = '&limit=1&appid=1ae718f4903ab234f9810bd6a50e0ef5';
    const latlongUrl = firstUrlPart+inputCity+secondUrlPart;

    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    axios.get(latlongUrl)
        .then(function(response){
            setCity(response.data);
        })
        .then(function(){
            setGeneralCity(city[0].local_names.es)
        })
        .catch(function(){
            setGeneralCity(city[0].name)
        })
      
 }   
  
function obtainTempCity(){
    //https://api.openweathermap.org/data/2.5/weather?lat=4.6529539&lon=-74.0835643&appid=1ae718f4903ab234f9810bd6a50e0ef5
    const firstUrlPart = `https://api.openweathermap.org/data/2.5/weather?lat=`;
    let latUrlPart = city[0].lat;
    const secondUrlPart = `&lon=`;
    let lonUrlPart = city[0].lon;
    const thirdUrlPart = `&appid=1ae718f4903ab234f9810bd6a50e0ef5`

    const currentUrl = firstUrlPart + latUrlPart + secondUrlPart + lonUrlPart + thirdUrlPart;
        axios.get(currentUrl)
            .then(function(response){
                setTemp(response.data)
            })
            .then(function(){
                setGeneralTemp(`${Math.round(temp.main.temp/10)}°`)
            })
} 

 function handleCityInputSend(){
        // e.preventDefault();
        obtainNameCity();
        obtainTempCity();
        
        Promise.all([generalCity,generalTemp]).then(
            (values)=>{
                setGeneralData(values);
                console.log(generalData)
            }
        )

        if(generalData[0] != undefined && generalData[1] != undefined){
            setGeneralCityDefault(generalData[0])
            setGeneralTempDefault(generalData[1])    
        }
    }


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