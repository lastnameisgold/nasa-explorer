import { useState, useEffect } from "react"
import axios from "axios"
import { format } from "date-fns"

export default function APOD() {

    // making a state to set data in
    // setting up a useEffect to control my components lifecycle
    // organize API links/url
    // make the API call
    // set our data in state and log it
    // render our data

    const [apod, setApod] = useState({})
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=2XkAKyvL0yEM9tLQOx1ZzVSjFV93EO02r69p0f3Y${date ? `&date=${date}` : ''}`

        const getApod = async() => {
            const response = await axios.get(url)
            console.log(response.data)
            setApod(response.data)
        }
        getApod()
    }, [date])

    // const handleDateChange = (e) => {
    //     setDate(e.target.value)
    // }

    // Returns go INSIDE of our If Else
    // Ternaries go INSIDE of our Returns

    if(apod) {
        return (
                <div className="apod-card">
                    {/* <input className="apod-date-picker" type="date" value={date} onChange={handleDateChange}/> */}
                    <div className="apod-image" style={{backgroundImage: `url("${apod.url}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                    <div className="apod-content">
                        <h5 className="apod-label">Astronomy Picture of the Day</h5>
                        <h2>{apod.title}</h2>
                        <p>{apod.explanation}</p>
                        <p><small>Copyright: {apod.copyright}</small></p>
                    </div>
                </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}