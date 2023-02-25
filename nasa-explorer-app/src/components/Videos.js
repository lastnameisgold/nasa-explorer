import { useState, useEffect } from "react"
import axios from "axios"

export default function Videos(){

    const [videos, setVideos] = useState([])

    useEffect(() => {
        const url = `https://images-api.nasa.gov/search?q=galaxies&media_type=video`

        const getVideos = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection.items)
            setVideos(response.data.collection.items)
        }
        getVideos()
    }, [])

    if (videos) {
        return(
            <div className="card-grid">
                {videos.map((video) => {
                    if(video.links) {
                        console.log(video.links)
                        return(
                            <div className="card" style={{backgroundImage: `url("${video.links[0].href}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                                <div className="scrim">
                                    <h4>{video.data[0].title}</h4>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}