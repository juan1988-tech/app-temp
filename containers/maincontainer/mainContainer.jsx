import React from "react";
import '../../src/styles/containers/main-container.css'

function MainContainer({ children }){
    return(
        <main className="main-container">
            { children }
        </main>
    )
}

export default MainContainer