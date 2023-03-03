import { useState, useEffect } from "react" // import statements for React hooks
import axios from "axios" // import statements for Axios (a promise-based HTTP client used for making API requests)
import { format } from "date-fns" // import statement for date utility library
import { APOD_URL } from "../globals" // import statement for a URL to retrieve NASA's Astronomy Picture of the Day

export default function APOD() { // function component to display NASA's Astronomy Picture of the Day

    const [apod, setApod] = useState({}) // state variables to hold APOD information and current date
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    useEffect(() => { // effect hook runs when the component mounts and whenever date changes
        const url = `${APOD_URL}${date ? `&date=${date}` : ''}` // concatenates the base APOD URL with optional query dates depending on whether date exists or not

        const getApod = async() => { // callback function that makes an API request using Axios
            const response = await axios.get(url) // waits until the response object is received before executing next line 
            setApod(response.data) // sets the value of apod by extracting data from the response object
        }
        getApod() // calls the getApod function
    }, [date])

    const handleDateChange = (e) => { // function to update the state variable (date) when users change the date input field
        e.preventDefault()
        setDate(e.target.value)
    }

    if(apod) { // returns the following JSX if apod is truthy (exists)
        return (
            <div>
                <div className="image-container" style={{backgroundImage: `url("https://images.unsplash.com/photo-1614727187346-ec3a009092b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="background-scrim">
                        <input className="apod-date-picker" type="date" value={date} onChange={handleDateChange}/> {/* adds a date picker input that dynamically updates state upon new user input */}
                    </div>
                </div>
                <div className="apod-card"> {/* displays two divs holding the Astronomy Picture of the day links and description */}
                    <div className="apod-image" style={{backgroundImage: `url("${apod.url}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} onClick={() => {window.open(`${apod.hdurl}`,'_self')}}></div> {/* displays the picture of the day as a background image with a clickable link to the high definition version of this image */}
                    <div className="apod-content">
                        <h5 className="apod-label">Astronomy Picture of the Day</h5>
                        <h2>{apod.title}</h2>
                        <p>{apod.explanation}</p>
                        <p><small>Copyright: {apod.copyright}</small></p>
                    </div>
                </div>
            </div>
        )
    } else { // returns the following JSX if apod is falsy (does not exist)
        return (
            <h1>loading, please wait</h1> // renders a simple loading message to indicate that the component is mounted but is waiting for data from the NASA API
        )
    }
}
