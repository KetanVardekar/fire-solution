import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridThree = () => {

    return (
        <>
        <SEO title="Fire Fighting Pump" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Fire Fighting Pump"
                paragraph ="Offering expert pipeline fabrication and <br> erection services..
                "
                styleClass=""
                mainThumb="/images/banner/pipeline-erection.jpg"
            />
            <ProjectOne colSize="col-xl-3 col-lg-4 col-md-6" itemShow="12" columnGap="row-15" parentClass="project-column-4"/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridThree;