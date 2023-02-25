import { useState, useEffect } from "react"
import axios from "axios"

export default function Images(){

    const [images, setImages] = useState([])

    useEffect(() => {
        const url = `https://images-api.nasa.gov/search?q=Mars`

        const getImages = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection.items)
            setImages(response.data.collection.items)
        }
        getImages()
    }, [])

    if (images) {
        return(
            <div>
                {images.map((image) => {
                    if(image.links) {
                        console.log(image.links)
                        return(
                        <img src={image.links[0].href}/>
                        )
                    }
                })}
                <h2>Image goes here</h2>
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}