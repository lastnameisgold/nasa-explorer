import { useEffect, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function ImageDetails() {
    const [image, setImage] = useState('')
    let location = useLocation()
    let images = location.state.images

    let {index} = useParams()

    useEffect(() => {
        console.log(images)
        let selectedImage = images[index]
        setImage(selectedImage)
    },[images, index])

    return image ? (
        <div className="details-container">
            <Link className="back-button" to="/images"><span class="material-symbols-rounded icon-size">arrow_back</span>Return to Images</Link>
            <div className="details-content-container">
                <img src={image.links[0].href} alt={image.data[0].title}/>
                <div className="details-text-content-container">
                    <h1>{image.data[0].title}</h1>
                    <p>{image.data[0].description}</p>
                </div>
            </div>
        </div>
    ) : <h2>Image not found</h2>
}