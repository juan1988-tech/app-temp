import '../../styles/components/header.css';
import { useContext, useEffect, useState } from 'react';
import { ToggleBurguerContext } from '../../burguerContext';
import ChangeScaleTemp from '../../elements/ChangeScaleTemp';

/* const useCityData = () =>{
    const [city,setCity] = useState()
    const APIcity = `http://api.openweathermap.org/geo/1.0/direct?q=bogota&limit=1&appid=1ae718f4903ab234f9810bd6a50e0ef5`
    useEffect(()=>{
        fetch(APIcity)
        .then(result=>result.json())
        .then((result)=>{setCity(result)})
        .catch((error)=>{
            error = new Error('lo siento no encontramos tu ciudad ');
            console.log(error)})
    },[])        

    return city
}
 */
const Header = () =>{
    const { burguer,changeBurguer,toggleBurguer } = useContext(ToggleBurguerContext);
    const [city,setCity] = useState()
    const APIcity = `http://api.openweathermap.org/geo/1.0/direct?q=${'bogota'}&limit=1&appid=1ae718f4903ab234f9810bd6a50e0ef5`;

    useEffect(()=>{
        fetch(APIcity)
        .then(result=>result.json())
        .then((result)=>{setCity(result)})
        .catch((error)=>{
            error = new Error('lo siento no encontramos tu ciudad ');
            console.log(error)});    
        },[])

    console.log(city);

    return(
        <header className="header">
            <section className="header-burguer-button" onClick={toggleBurguer}>
                <article className={burguer?'first-button-line':'first-button-line-change'}></article>
                <article className={burguer?"second-button-line":"second-button-line-change"}></article>
                <article className={burguer?"third-button-line":"third-button-line-change"}></article>
            </section>
            <label className="navbar-searcher">    
                <input type="text" className="navbar-text"/>
                <button className="navbar-loop">
                    <span></span>
                </button>
            </label>
            <ChangeScaleTemp classDescription="changeScaleTemp-header"/>
        </header>
    )
}

export default Header;

