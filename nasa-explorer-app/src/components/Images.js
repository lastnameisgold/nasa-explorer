import { useState, useEffect } from "react"
import axios from "axios"

export default function Images(){

    const [image, setImage] = useState({})

    useEffect(() => {
        const url = `https://images-api.nasa.gov/search?q=Mars`

        const getImage = async() => {
            const response = await axios.get(url)
            console.log(response.data.collection)
            setImage(response.data.collection)
        }
        getImage()
    }, [])

    if (image) {
        return(
            <div>
                {/* {image.items.map((item) => (<img src={item.href} alt="something"/>))}  */}
                <h2>Image goes here</h2>
            </div>
        )
    } else {
        return (
            <h1>loading, please wait</h1>
        )
    }
}