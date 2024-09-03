import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = [
    {
        title:'FIRE HYDRANT SYSTEM'
    },
    {
        title:'FIRE SPRINKLER SYSTEM'
    },
    {
        title:'FIRE FIGHTING PUMP'
    },
    {
        title:'FIRE ALARM SYSTEM'
    },
    {
        title:'SAFETY GOODS'
    }
];

const FooterOne = ({ parentClass }) => {

    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                {/* <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/"><FaXTwitter /></Link></li>
                            <li><Link to="https://www.pinterest.com/"><FaPinterestP /></Link></li>
                            <li><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                            <li><Link to="https://vimeo.com/"><FaVimeoV /></Link></li>
                            <li><Link to="https://dribbble.com/"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li>
                            <li><Link to="https://www.tiktok.com/en/"><FaTiktok /></Link></li>
                        </ul>
                    </div>
                </div> */}
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="map-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.001358781479!2d72.79712277431088!3d21.192104982150035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd415abe8c5%3A0xb1bce9a312da88f4!2sSUPER%20INDIA%20BUILDPRO%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1725300619753!5m2!1sen!2sin"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '15px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 5).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resources</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/case-study"}>Case Studies</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Portfolio</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">SUPER INDIA BUILDPRO PVT. LTD.</a>.</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;
