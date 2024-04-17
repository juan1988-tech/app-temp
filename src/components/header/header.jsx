import '../../styles/components/header.css';
import { useContext, useEffect, useState } from 'react';
import { ToggleBurguerContext } from '../../burguerContext';
import ChangeScaleTemp from '../../elements/ChangeScaleTemp';
import { useObtainCity } from '../../hooks/useObtainCity';
  
const Header = () =>{
    const { burguer,toggleBurguer } = useContext(ToggleBurguerContext);
    const { handleInputCity,handleCityInputSend } = useObtainCity();

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

