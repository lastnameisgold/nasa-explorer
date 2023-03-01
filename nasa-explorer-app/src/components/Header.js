import Nav from "./Nav";
import { Link } from "react-router-dom";
import logo from "../logo.svg"

export default function Header() {
    return(
        <div className="nav-container">
                <Link to="/">
                    <div className="logo-container">
                        <img className="nasa-logo" src={logo} alt="NASA logo" />
                        <h2 className="explorer-logo">Explorer</h2>
                    </div>
                </Link>
                <Nav />
        </div>
    )
}