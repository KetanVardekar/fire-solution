import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import Nav from '../../common/header/Nav';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import MobileMenu from './MobileMenu';


const HeaderOne = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        const mobileMenuPopup = document.querySelector('.mobilemenu-popup');
        const body = document.querySelector('body');

        if (mobileMenuPopup && body) {
            mobileMenuPopup.classList.toggle("show");
            body.classList.toggle("mobilemenu-show");

            const elements = mobileMenuPopup.querySelectorAll('.menu-item-has-children > a');

            elements.forEach(element => {
                element.onclick = function () {
                    const submenu = this.parentElement.querySelector('.axil-submenu');
                    if (submenu) {
                        submenu.classList.toggle("active");
                    }
                    this.classList.toggle("open");
                }
            });
        } else {
            console.error("Mobile menu or body element not found.");
        }
    };



    return (
        <>
            <header className="header axil-header header-style-1">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/fireIndia-logo.png"
                                    dimage="/images/fireIndia-logo.png"
                                    simage="/images/fireIndia-logo.png"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="sidemenu-btn d-lg-block d-none">
                                        <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <MobileMenu MobileHandler={MobileMenuHandler} />
        </>
    )
}

export default HeaderOne;