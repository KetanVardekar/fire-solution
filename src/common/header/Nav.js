import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/corporate-agency"} style={{ color: '#FF4500' }}>HOME </Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/about-us"} style={{ color: '#FF4500' }}>ABOUT US</Link>

                </li>
                <li className="menu-item-has-children">
                    <Link to="#" style={{ color: '#FF4500' }}>SERVICES <FaAngleDown /></Link>
                    <ul className="axil-submenu" >
                        <li ><Link to={process.env.PUBLIC_URL + "/fire-hydrant-system"}>FIRE HYDRANT SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-sprinkler-system"}>FIRE SPRINKLER SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-fighting-pump"}>FIRE FIGHTING PUMP</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-alarm-system"}>FIRE ALARM SYSTEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/safety-goods"}>SAFETY GOODS</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/fire-safety-training"}>FIRE SAFETY TRAINING</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/products"} style={{ color: '#FF4500' }}>PRODUCTS</Link>

                </li>

                <li className="menu-item-has-children">
                    <a href={process.env.PUBLIC_URL + "/images/others/Fire-Brochure.pdf"} target="_blank" rel="noopener noreferrer" style={{ color: '#FF4500' }}>
                        BROCHURES
                    </a>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" style={{ color: '#FF4500' }}>Licenses & Certifications <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><a href="/images/others/ISO-Certificate.pdf" target="_blank" rel="noopener noreferrer">ISO Certificate</a></li>
                        <li><a href="/images/others/SMC-Certificate-Form-E.pdf" target="_blank" rel="noopener noreferrer">SMC Certificate Form E</a></li>
                        <li><a href="/images/others/B-Class-Electrical-Contractor-License-Rajasthan.pdf" target="_blank" rel="noopener noreferrer">B Class Electrical Contractor License (Rajasthan)</a></li>
                        <li><a href="/images/others/A-Class-Registration-RB-Electrical-License.pdf" target="_blank" rel="noopener noreferrer">A Class Registration (R&B Electrical License)</a></li>
                        <li><a href="/images/others/B-Class-Registration-RB.pdf" target="_blank" rel="noopener noreferrer">B Class Registration (R&B)</a></li>
                    </ul>
                </li>


                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/contact"} style={{ color: '#FF4500' }}>CONTACT US</Link>

                </li>
            </ul>
        </nav>
    )
}

export default Nav;