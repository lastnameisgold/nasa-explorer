import { useState, useEffect } from "react"
import axios from "axios"
import { SEARCH_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Images(){

    // Initializing state variables for images and user search queries
    const [images, setImages] = useState([])
    const [search, setSearch] = useState('galaxies')

    // Using useEffect to get images from NASA API based on users search query
    useEffect(() => {
        const url = `${SEARCH_URL}${search}`

        const getImages = async() => {
            const response = await axios.get(url)
            setImages(response.data.collection.items)
        }
        getImages()
    }, [search])

    // Handling user input by updating search state variable.
    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
        /* Update state by setting search value to
        whatever the user has inputted */
    }

    // Initializing useNavigate hook for navigating to different routes in the app
    let navigate = useNavigate()

    // The showImage function takes the index of a specific image as argument.
    // and navigates to a new route and passes along an array of images as props.
    const showImage = (index) => {
        navigate(`${index}`, {state:{images:images}})
    }

    // Rendering images to the UI via mapping over state.array of images
    if (images) {
        return(
            <div className="main-search-container">
                <div className="image-container" style={{backgroundImage: `url("https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
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
    }

    // Conditionally rendering loading message until the images are fetched successfully. 
    else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}