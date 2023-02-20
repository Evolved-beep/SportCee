import React, { createContext, useState } from "react";
import urlAPI from "../utils/const/urlAPI";
import urlMock from "../utils/const/urlMock";

export const ThemeContext = createContext()

export const ApiProvider = ({children}) => {
    const [api, setApi] = useState(urlAPI)
    const switchAPI = () => {
        setApi(api === urlMock ? urlAPI : urlMock)
    }

    console.log(api)
    return(
        <ThemeContext.Provider value={{ api, switchAPI }}>
            {children}
        </ThemeContext.Provider>
    )
}