import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridOne = () => {

    return (
        <>
        <SEO title="Fire Hydrant Systemn" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Fire Hydrant <br>System"
                paragraph ="Designing and installing robust <br> Fire Hydrant System.
                "
                styleClass=""
                mainThumb="/images/banner/fire-hydrant-banner.jpg"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridOne;