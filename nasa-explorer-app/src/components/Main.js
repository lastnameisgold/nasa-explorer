import { Routes, Route  } from "react-router-dom"
import Home from "./Home"
import APOD from "./APOD"

export default function Main() {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />}/>
                {/* <Route path="/picture-of-the-day" element={<APOD />} /> */}
            </Routes>
        </div>
    )
}