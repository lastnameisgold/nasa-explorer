import { useState, useEffect } from "react"
import axios from "axios"
import { SEARCH_URL } from "../globals"

export default function Videos(){

    const [videos, setVideos] = useState([])
    const [search, setSearch] = useState('galaxies')

    useEffect(() => {
        const url = `${SEARCH_URL}${search}&media_type=video`

        const getVideos = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection.items)
            setVideos(response.data.collection.items)
        }
        getVideos()
    }, [search])

    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    if (videos) {
        return(
            <div>
                <div className="image-container">
                    <div className="background-scrim">
                        <div className="search-bar-container">
                            <span class="material-symbols-rounded">search</span>
                            <input type="text" className="search-input" placeholder="Search for videos" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="card-grid">
                    {videos.map((video) => {
                        if(video.links) {
                            console.log(video.links)
                            return(
                                <div className="card">
                                    <div className="search-image" style={{backgroundImage: `url("${video.links[0].href}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                                    <div className="apod-title">
                                        <h4>{video.data[0].title}</h4>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}