import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div className='links-container'>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
            <button>Dark Mode</button>
        </div>
    )
}