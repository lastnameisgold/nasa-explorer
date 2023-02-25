import { useState, useEffect } from "react"
import axios from "axios"

export default function Images(){

    const [images, setImages] = useState([])

    useEffect(() => {
        const url = `https://images-api.nasa.gov/search?q=galaxies`

        const getImages = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection.items)
            setImages(response.data.collection.items)
        }
        getImages()
    }, [])

    if (images) {
        return(
            <div className="card-grid">
                {images.map((image) => {
                    if(image.links) {
                        console.log(image.links)
                        return(
                            <div className="card" style={{backgroundImage: `url("${image.links[0].href}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                                <div className="scrim">
                                    <h4>{image.data[0].title}</h4>
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