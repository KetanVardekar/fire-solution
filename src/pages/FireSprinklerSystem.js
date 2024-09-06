import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const FireSprinklerSystem = () => {

    return (
        <>
        <SEO title="Fire Sprinkler System" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Fire Sprinkler <br> System"
                paragraph ="Delivering advanced fire sprinkler systems <br> designed for rapid and effective fire suppression."
                styleClass=""
                mainThumb="/images/banner/fire-sprinkler-system.jpg"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default FireSprinklerSystem;