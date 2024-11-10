import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/corporate-agency"} style={{color:'#FF4500'}}>HOME </Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/about-us"} style={{color:'#FF4500'}}>ABOUT US</Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to="#" style={{color:'#FF4500'}}>SERVICES <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/fire-hydrant-system"}>FIRE HYDRANT SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-sprinkler-system"}>FIRE SPRINKLER SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-fighting-pump"}>FIRE FIGHTING PUMP</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-alarm-system"}>FIRE ALARM SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/safety-goods"}>SAFETY GOODS</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/products"} style={{color:'#FF4500'}}>PRODUCTS</Link>

                </li>

                <li className="menu-item-has-children">
                    <a href={process.env.PUBLIC_URL + "/images/others/Catalogue.pdf"} target="_blank" rel="noopener noreferrer" style={{color:'#FF4500'}}>
                        BROCHURES
                    </a>
                </li>


                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/contact"} style={{color:'#FF4500'}}>CONTACT US</Link>

                </li>
            </ul>
        </nav>
    )
}

export default Nav;