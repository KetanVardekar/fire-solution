import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFive from '../component/project/ProjectFive';


const ProjectGridFour = () => {

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
            <ProjectFive />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridFour;