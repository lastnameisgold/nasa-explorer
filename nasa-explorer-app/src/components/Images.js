import { useState, useEffect } from "react"
import axios from "axios"

export default function Images(){

    const [images, setImages] = useState([])

    // The Images page shows a search result of galaxies by default
    // The user should be able to type a query in the search input to change the content

    // Using useEffect to get images from API
    useEffect(() => {
        const url = `https://images-api.nasa.gov/search?q=galaxies`

        const getImages = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection.items)
            setImages(response.data.collection.items)
        }

        getImages()
    }, [])

    // Mapping over images array here
    if (images) {
        return(
            <div className="main-search-container">
                <div className="image-container">
                    <div className="search-bar-container">
                        <span class="material-symbols-rounded">search</span>
                        <input type="text" className="search-input" placeholder="Search for images"/>
                    </div>
                </div>
                <div className="card-grid">
                    {images.map((image) => {
                        if(image.links) {
                            console.log(image.links)
                            return(
                                <div className="card">
                                    <div className="search-image" style={{backgroundImage: `url("${image.links[0].href}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                                    <div className="apod-title">
                                        <h4>{image.data[0].title}</h4>
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