import { Routes, Route  } from "react-router-dom"
import Home from "./Home"
import Images from "./Images"
import Videos from "./Videos"

export default function Main() {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/images" element={<Images />}/>
                <Route path="/videos" element={<Videos />}/>
            </Routes>
        </div>
    )
}