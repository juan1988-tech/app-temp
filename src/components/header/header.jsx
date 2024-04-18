import '../../styles/components/header.css';
import { useContext, useEffect, useState } from 'react';
import { ToggleBurguerContext } from '../../burguerContext';
import ChangeScaleTemp from '../../elements/ChangeScaleTemp';
  
const Header = () =>{
    const { burguer,toggleBurguer } = useContext(ToggleBurguerContext);
    const [inputCity,setInputCity] = useState('');
    const { city,setCity } = useContext(ToggleBurguerContext) 
    const { defaultCity,setDefaultcity} = useContext(ToggleBurguerContext);
    const [weathCond, setWeathCond] = useState();
    let { weatherDesc, setWeatherDesc } = useContext(ToggleBurguerContext);

    const handleInputCity = (e) =>{
        const inputCityValue = e.target.value;
        inputCityValue.replace(/\s/g, '-');
        setInputCity(inputCityValue);   
        console.log(inputCity);
    }

    function handleCityInputSend(e){
        e.preventDefault(); 
        //https://api.openweathermap.org/data/2.5/weather?q=londres&appid=1ae718f4903ab234f9810bd6a50e0ef5
        const firstUrlPart = 'https://api.openweathermap.org/data/2.5/weather?q=';
        const secondUrlPart = '&appid=1ae718f4903ab234f9810bd6a50e0ef5';
        const latlogCitiy = firstUrlPart+inputCity+secondUrlPart;
        fetch(latlogCitiy)
            .then(res=>res.json())
            .then(data=>setCity(data))
            .then(function(){
                setWeathCond(city.weather[0].id)
                
                if(weatherDesc>=200 && weatherDesc<=232){
                    setWeatherDesc(`TORMENTA`) 
                }
                else if(weatherDesc>=300 && weatherDesc<=321 ){
                    setWeatherDesc('LLOVIZNA')   
                }
                else if(weatherDesc>=500 && weatherDesc<=531){
                    setWeatherDesc('LLUVIA')
                }
                else if(weatherDesc>=600 && weatherDesc<=622){
                    setWeatherDesc(`NEVADO`)
                }
                else if(weatherDesc>=701 && weatherDesc<=781){
                    setWeatherDesc(`ATMOSFERA`) 
                }
                else if(weatherDesc=800){
                    setWeatherDesc('CIELO CLARO') 
                }
                else if(weatherDesc<=801 && weatherDesc>=804){
                    setWeatherDesc('NUBES') 
                }
            })   
                setDefaultcity({
                    city: city.name,
                    temp: `${Math.round(city.main.temp/10)}°`,
                    sens: weatherDesc
                })
    } 


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

