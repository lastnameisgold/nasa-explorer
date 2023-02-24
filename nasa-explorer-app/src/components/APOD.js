// Give this file an appropriate name, do not use Data
// Data is just for Jeremy's demo

import { useState, useEffect } from "react"
import axios from "axios"

export default function APOD() {

    // making a state to set data in
    // setting up a useEffect to control my components lifecycle
    //  organize API links/url
    // make the API call
    // set our data in state and log it
    // render our data

    const [apod, setApod] = useState({})

    useEffect(() => {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=2XkAKyvL0yEM9tLQOx1ZzVSjFV93EO02r69p0f3Y'

        const getApod = async() => {
            const response = await axios.get(url)
            console.log(response.data)
            setApod(response.data)
        }
        getApod()
    }, [])

    // Returns go INSIDE of our If Else
    // Ternaries go INSIDE of our Returns

    if(apod) {
        return (
            <div className="apod-card">
                <img className="apod-image" src={apod.url} alt="Astronomy picture of the day"/>
                <div className="apod-content">
                    <h2>{apod.title}</h2>
                    <p>{apod.explanation}</p>
                    <p>Copyright: {apod.copyright}</p>
                </div>
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}