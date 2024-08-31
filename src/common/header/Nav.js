import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/corporate-agency"}>HOME </Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/about-us"}>ABOUT US</Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to="#">SERVICES <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/fire-hydrant-system"}>FIRE HYDRANT SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-sprinkler-system"}>FIRE SPRINKLER SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pipeline-erection"}>PIPELINE FABRICATION & ERECTION</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-alarm-system"}>FIRE ALARM SYSTEM</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/our-work"}>Our Work</Link>

                </li>

                <li className="menu-item-has-children">
                    <a href={process.env.PUBLIC_URL + "/images/others/fire-safety-solution-brochure.pdf"} target="_blank" rel="noopener noreferrer">
                        BROCHURES
                    </a>
                </li>


                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/contact"}>CONTACT US</Link>

                </li>
            </ul>
        </nav>
    )
}

export default Nav;