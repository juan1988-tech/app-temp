import '../../styles/components/header.css';
import { useContext } from 'react';
import { BurguerContext } from '../../burguerContext';
import { ToggleBurguerContext } from '../../burguerContext';

const Header = () =>{
    const burguerCont = useContext(BurguerContext);
    const toggleBurguerCont = useContext(ToggleBurguerContext);
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
        </header>
    )
}

export default Header;