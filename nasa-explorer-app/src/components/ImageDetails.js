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
            <Link className="back-button" to="/images">Return to Images</Link>
            <h1>This is the ImageDetails page</h1>
            <h2>{image.data[0].description}</h2>
        </div>
    ) : <h2>Image not found</h2>
}