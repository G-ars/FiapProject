import React, { useEffect } from 'react'
import api from "../services/api";

function GetApi() {

    const [infos, setInfos] = useEffect([]);

    useEffect(() => {
        api
            .get("https://api.hgbrasil.com/weather")
            .then(({data}) => setInfos(data))
            .catch((err) => {
                console.log("Ops error: " + err.message)
            })

    }, [])

    return (
        <div>
            <p>Temp: {}</p>
        </div>
    )
}

export default GetApi
