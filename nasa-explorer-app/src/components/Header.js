import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Link to="/"><h1>NASA Explorer</h1></Link>
            </div>
                <Nav />
        </div>
    )
}