import React from "react";
import { createContext } from "react";

const AppContext = createContext();

function AppContextWrapper(children){
    return(
        <AppContext.Providers>
            {children}
        </AppContext.Providers>
    )
}

export default AppContextWrapper;