import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Link to="/"><h2>NASA Explorer</h2></Link>
            </div>
                <Nav />
        </div>
    )
}