import React from "react";
import '../../styles/components/footer.css';

 const Footer = () =>{
    return(
        <footer className="footer">
            <p className="clima-app">CLIMA APP</p>
            <p className="advert">Esta aplicación ha sido desarrollada con React y sirve para mostrar mis dotes como desarrollador </p>
            <a href="https://openweathermap.org/forecast5" className="api-link">API DEL TIEMPO</a>
            <p className="advert-support">Soporte y desarrollo</p>
            <a className="link-developer" href="https://www.linkedin.com/in/juan-david-franco-webdev/">Juan David Franco <br/> Desarrollador web</a>
        </footer>
    )
 }

 export default Footer;