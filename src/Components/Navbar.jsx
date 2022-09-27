import React from 'react'
import { Link } from 'react-router-dom'
import "./Components.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <li className="item">
                        <Link className="link" aria-current="page" to="/Home">Home</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/Students">Students</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/Contectus">Contect Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar