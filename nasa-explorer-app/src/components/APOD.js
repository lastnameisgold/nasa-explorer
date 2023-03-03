import { useState, useEffect } from "react"
import axios from "axios"
import { format } from "date-fns"
import { APOD_URL } from "../globals"

export default function APOD() {

    const [apod, setApod] = useState({})
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    useEffect(() => {
        const url = `${APOD_URL}${date ? `&date=${date}` : ''}`

        const getApod = async() => {
            const response = await axios.get(url)
            setApod(response.data)
        }
        getApod()
    }, [date])

    const handleDateChange = (e) => {
        e.preventDefault()
        setDate(e.target.value)
    }

    if(apod) {
        return (
            <div>
                <div className="image-container">
                    <div className="background-scrim">
                        <input className="apod-date-picker" type="date" value={date} onChange={handleDateChange}/>
                    </div>
                </div>
                <div className="apod-card">
                    <div className="apod-image" style={{backgroundImage: `url("${apod.url}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} onClick={() => {window.open(`${apod.hdurl}`,'_self')}}></div>
                    <div className="apod-content">
                        <h5 className="apod-label">Astronomy Picture of the Day</h5>
                        <h2>{apod.title}</h2>
                        <p>{apod.explanation}</p>
                        <p><small>Copyright: {apod.copyright}</small></p>
                        {/* <button className="filled-button">View full size photo</button> */}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}