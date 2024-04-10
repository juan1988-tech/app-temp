import '../../styles/components/header.css'

const Header = ({burguer,changeBurguer,toggleBurguer}) =>{
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
        </header>
    )
}

export default Header;