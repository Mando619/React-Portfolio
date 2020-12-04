import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="container">
                <Link to="/"><h2>{name}</h2></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link> </li>
                    <li><a href={`mailto:${contact}`}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;