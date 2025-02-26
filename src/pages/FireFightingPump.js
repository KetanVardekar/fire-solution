import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const FireFightingPump = () => {

    return (
        <>
            <SEO title="Fire Fighting Pump" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne
                    title="Fire Fighting Pump"
                    paragraph="Delivering high-performance Fire Fighting Pumps <br> designed to ensure a reliable water supply 
                    for fire suppression. <br>  Our pumps are built for efficiency and durability, providing <br>  optimal pressure 
                    and flow to combat fires effectively. <br>  Suitable for industrial, commercial, and residential applications, <br> 
                    our solutions comply with stringent safety standards."
                    styleClass=""
                    mainThumb="/images/banner/pipeline-erection.jpg"
                />
                <ProjectOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default FireFightingPump;