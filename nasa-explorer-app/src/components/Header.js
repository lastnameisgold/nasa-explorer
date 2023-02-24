import Nav from "./Nav";

export default function Header() {
    return(
        <div>
            <div className="logo-container">
                <h1>NASA Explorer</h1>
            </div>
            <div className="nav-container">
                <Nav />
            </div>
        </div>
    )
}