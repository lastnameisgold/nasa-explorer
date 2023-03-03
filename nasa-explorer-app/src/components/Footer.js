export default function Footer() {
    return(
        <div className="footer-content-container">
            <div className="footer-text-container about-container">
                <h5>About this app</h5>
                <p>
                NASA Explorer is a ReactJS application developed by Fernando Dorado. The app utilizes NASA's APIs to allow people to search and view a collection of captivating images and videos. All visual content is the sole property of NASA and its rightful owners.
                </p>
            </div>

            <div className="footer-text-container">
                <h5>APIs and Resources</h5>
                <p><a target={"_blank"} rel="noreferrer" href="https://api.nasa.gov/">Astronomy Picture of the Day</a></p>
                <p><a target={"_blank"} rel="noreferrer" href="https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf">NASA Image and Video Library</a></p>
                <p><a target={"_blank"} rel="noreferrer" href="https://m3.material.io/theme-builder#/dynamic">Material Theme Builder</a></p>
                <p><a target={"_blank"} rel="noreferrer" href="https://unsplash.com/s/photos/space">Unsplash</a></p>
            </div>

        </div>
    )
}