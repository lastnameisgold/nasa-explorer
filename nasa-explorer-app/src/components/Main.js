import { Routes, Route  } from "react-router-dom"
import Home from "./Home"
import APODDetails from "./APODDetails"
import Images from "./Images"
import ImageDetails from "./ImageDetails"
import Videos from "./Videos"
import VideoDetails from "./VideoDetails"

export default function Main() {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:index" element={<APODDetails />}/>

                <Route path="/images" element={<Images />}/>
                <Route path="/images/:index" element={<ImageDetails />}/>

                <Route path="/videos" element={<Videos />}/>
                <Route path="/videos/:index" element={<VideoDetails />}/>

            </Routes>
        </div>
    )
}