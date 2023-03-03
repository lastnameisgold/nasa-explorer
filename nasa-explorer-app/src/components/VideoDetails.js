import { useEffect, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VideoDetails() {
    const [video, setVideo] = useState('')
    let location = useLocation()
    let videos = location.state.videos
    let {index} = useParams()

    useEffect(() => {
        console.log(videos)
        let selectedVideo = videos[index]
        setVideo(selectedVideo)
    }, [videos, index])

    const videoURL = video.data ? `http://images-assets.nasa.gov/video/${video.data[0].nasa_id}/${video.data[0].nasa_id}~orig.mp4` : null

    return video && videoURL ? (
        <div className="details-container">
            <Link className="back-button" to="/videos"><span class="material-symbols-rounded icon-size">arrow_back</span>Return to Videos</Link>
            <div className="details-content-container">
                <div className="details-text-content-container">
                    <h2>{video.data[0].title}</h2>
                    <p>{video.data[0].description}</p>
                    <p>Photographer: {video.data[0].photographer}</p>
                    <p>Location: {video.data[0].location}</p>
                </div>
                <video src={videoURL} type="video/mp4" width="100%" height="100%" controls></video>
            </div>
        </div>
    ) : <h2>Video not found</h2>
}