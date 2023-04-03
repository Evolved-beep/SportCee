import urlAPI from "../utils/const/urlAPI"
import urlMock from "../utils/const/urlMock"
import { useState } from "react"

const useSwitchAPI = () => {
    const [api, setApi] = useState(urlMock)
    const [typeApi, setTypeApi ] = useState(" mock")
    const switchAPI = () => {
        setApi(api === urlMock ? urlAPI : urlMock)
        setTypeApi(typeApi === "mock" ? "api" : "mock")
    }
    return [api,switchAPI, typeApi];
}

export default useSwitchAPI