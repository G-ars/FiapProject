import React, { useEffect } from 'react'
import axios from 'axios'
// import api from "../services/api";

function GetApi() {


        useEffect(() => {

            axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil")

            .then((res) => {
                console.log(res.data)
            })

            .catch(() => {
                console.log('Deu ruim')
            })
            
        }, [])

    return (
        <div>
            <p>Temp: {}</p>
        </div>
    )
}

export default GetApi
