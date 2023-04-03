import React, { createContext, useEffect, useState } from "react";
import useSwitchAPI from "../hook/useSwitchAPI";

export const ThemeContext = createContext()

export const ApiProvider = ({children}) => {
    /* const [api, switchAPI] = useSwitchAPI()
    useSwitchAPI() */

    const [api, setAPI] = useState("api")
    const useSwitchAPI = () => {
     setAPI(api === "api" ? "mock" : "api")
   }

   

    return(
        <ThemeContext.Provider value={{ api, useSwitchAPI }}>
            {children}
        </ThemeContext.Provider>

    )


}

