import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const FireAlarmSystem = () => {

    return (
        <>
        <SEO title="Fire Alarm System" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Fire Alarm System"
                paragraph ="Implementing cutting-edge fire alarm systems <br> designed for swift detection and alerting.
                "
                styleClass=""
                mainThumb="/images/banner/fire-alarm.jpg"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default FireAlarmSystem;