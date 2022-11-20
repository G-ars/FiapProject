import React, { useEffect } from 'react'
import axios from 'axios'
// import api from "../services/api";

function GetApi() {


        useEffect(() => {

            axios.get("https://covid-api.mmediagroup.fr/v1/cases")

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
