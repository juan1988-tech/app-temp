import '../../styles/components/header.css';
import { useContext, useEffect, useState } from 'react';
import { ToggleBurguerContext } from '../../burguerContext';
import ChangeScaleTemp from '../../elements/ChangeScaleTemp';
import { useChangeCityData } from '../../hooks/useChangeCityData';

const Header = () =>{
    const [inputCity,setInputCity] = useState();
    const [weathCond, setWeathCond] = useState();
    const { burguer,toggleBurguer } = useContext(ToggleBurguerContext);
    const { city,setCity } = useContext(ToggleBurguerContext) 
    const { defaultCity,setDefaultcity} = useContext(ToggleBurguerContext);
    let { weatherDesc, setWeatherDesc, setClassNameImage } = useContext(ToggleBurguerContext);
     
    const handleInputCity = (e) =>{
        const inputCityValue = e.target.value;
        inputCityValue.replace(/\s/g, '-');
        setInputCity(inputCityValue);   
    }

     function handleCityInputSend(e){
        e.preventDefault(); 
        const firstUrlPart = 'https://api.openweathermap.org/data/2.5/weather?q=';
        const secondUrlPart = '&appid=1ae718f4903ab234f9810bd6a50e0ef5';
        const latlogCitiy = firstUrlPart+inputCity+secondUrlPart;
        fetch(latlogCitiy)
            .then(res=>res.json())
            .then(data=>setCity(data))
            .then(function(){
                setWeathCond(city?.weather[0]?.id)
                
                if(weatherDesc>=200 && weatherDesc<=232){
                    setWeatherDesc(`TORMENTA`)
                    setClassNameImage('general-weather-tormenta') 
                }
                else if(weatherDesc>=300 && weatherDesc<=321 ){
                    setWeatherDesc('LLOVIZNA')   
                    setClassNameImage('general-weather-llovizna')
                }
                else if(weatherDesc>=500 && weatherDesc<=531){
                    setWeatherDesc('LLUVIA')
                    setClassNameImage('general-weather-lluvia')
                }
                else if(weatherDesc>=600 && weatherDesc<=622){
                    setWeatherDesc(`NEVADO`)
                }
                else if(weatherDesc>=701 && weatherDesc<=781){
                    setWeatherDesc(`ATMOSFERA`)
                    setClassNameImage('general-weather-nubes') 
                }
                else if(weatherDesc=800){
                    setWeatherDesc('CIELO CLARO')
                    setClassNameImage('general-weather-cielo-claro') 
                }
                else if(weatherDesc<=801 && weatherDesc>=804){
                    setWeatherDesc('NUBES') 
                    setClassNameImage('general-weather-nubes')
                }
            })   
                setDefaultcity({
                    city: city.name,
                    temp: `${Math.round(city.main.temp/10)}°`,
                    sens: weatherDesc
                })}

    return(
        <header className="header">
            <section className="header-burguer-button" onClick={toggleBurguer}>
                <article className={burguer?'first-button-line':'first-button-line-change'}></article>
                <article className={burguer?"second-button-line":"second-button-line-change"}></article>
                <article className={burguer?"third-button-line":"third-button-line-change"}></article>
            </section>
            <label className="navbar-searcher">    
                <input type="text" className="navbar-text" onChange={handleInputCity}/>
                
                <button className="navbar-loop" type='submit' onClick={handleCityInputSend}>
                    <span></span>
                </button>
            </label>
            <ChangeScaleTemp classDescription="changeScaleTemp-header"/>
        </header>
        )
    }

export default Header;

