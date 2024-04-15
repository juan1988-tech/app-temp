import '../../styles/components/header.css';
import { useContext, useEffect, useState } from 'react';
import { BurguerContext } from '../../burguerContext';
import { ToggleBurguerContext } from '../../burguerContext';
import ChangeScaleTemp from '../../elements/ChangeScaleTemp';



const useChangeCity = () =>{
    const [city,setCity] = useState()
    const APIcity = `http://api.openweathermap.org/geo/1.0/direct?q=bogota&limit=1&appid=1ae718f4903ab234f9810bd6a50e0ef5`
    const BurguerCont = useContext(BurguerContext)
    useEffect(()=>{
        fetch(APIcity)
        .then(result=>result.json())
        .then((result)=>{setCity(result)})
        .catch(console.log('juepuchis esa ciudad no existe'))
    },[])        

    return {city, BurguerCont}
}

const Header = () =>{
    const burguerCont = useContext(BurguerContext);
    const toggleBurguerCont = useContext(ToggleBurguerContext);
    const {city, BurguerCont} = useChangeCity();
    console.log(city)

    return(
        <header className="header">
            <section className="header-burguer-button" onClick={toggleBurguerCont}>
                <article className={burguerCont?'first-button-line':'first-button-line-change'}></article>
                <article className={burguerCont?"second-button-line":"second-button-line-change"}></article>
                <article className={burguerCont?"third-button-line":"third-button-line-change"}></article>
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

