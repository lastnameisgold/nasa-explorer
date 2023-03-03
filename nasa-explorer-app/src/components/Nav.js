import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div className='links-container'>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
            <button className='tonal-button'><span className="material-symbols-rounded icon-size">dark_mode</span></button>
        </div>
    )
}