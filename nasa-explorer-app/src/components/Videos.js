import { useState, useEffect } from "react"
import axios from "axios"
import { SEARCH_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Videos(){

    const [videos, setVideos] = useState([])
    const [search, setSearch] = useState('galaxies')

    useEffect(() => {
        const url = `${SEARCH_URL}${search}&media_type=video`

        const getVideos = async() => {
            const response = await axios.get(url)
            // console.log(response.data.collection.items)
            setVideos(response.data.collection.items)
        }
        getVideos()
    }, [search])

    // Handles the user query
    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
        /* Update state by setting search value to
        whatever the user has inputted */
    }

    let navigate = useNavigate()

    const showVideo = (index) => {
        navigate(`${index}`, {state:{videos:videos}})
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
                    {videos.map((video, index) => {
                        if(video.links) {
                            console.log(video.links)
                            return(
                                <div className="card" key={video.data[0].title} onClick={() => showVideo(index)}>
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