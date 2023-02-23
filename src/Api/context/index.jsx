import React, { createContext, useState } from "react";
import urlAPI from "../utils/const/urlAPI";
import urlMock from "../utils/const/urlMock";

export const ThemeContext = createContext()

export const ApiProvider = ({children}) => {
    const [api, setApi] = useState(urlMock)
    const switchAPI = () => {
        setApi(api === urlAPI ? urlMock : urlAPI)
    }

    console.log(api)
    return(
        <ThemeContext.Provider value={{ api, switchAPI }}>
            {children}
        </ThemeContext.Provider>
    )
}