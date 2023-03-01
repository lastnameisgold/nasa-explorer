import { useState, useEffect } from "react"
import axios from "axios"
import { SEARCH_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Images(){

    const [images, setImages] = useState([])
    const [search, setSearch] = useState('galaxies')

    // Using useEffect to get images from API
    useEffect(() => {
        const url = `${SEARCH_URL}${search}`

        const getImages = async() => {
            const response = await axios.get(url)
            // console.log(response.data.collection.items)
            setImages(response.data.collection.items)
        }
        getImages()
    }, [search])

    // Handles the user query
    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
        /* Update state by setting search value to
        whatever the user has inputted */
    }

    let navigate = useNavigate()

    const showImage = (index) => {
        navigate(`${index}`, {state:{images:images}})
    }

    // Mapping over images array here
    if (images) {
        return(
            <div className="main-search-container">
                <div className="image-container">
                    <div className="background-scrim">
                        <div className="search-bar-container">
                            <span class="material-symbols-rounded">search</span>
                            <input type="text" className="search-input" placeholder="Search for images" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="card-grid">
                    {images.map((image, index) => {
                        if(image.links) {
                            console.log(image.links)
                            return(
                                <div className="card" key={image.data[0].title} onClick={() => showImage(index)}>
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