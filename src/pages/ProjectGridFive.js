import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFive from '../component/project/ProjectFive';


const ProjectGridFive = () => {

    return (
        <>
        <SEO title="Project Full Width Four Column" />
        <ColorSwitcher />
        <main className="main-wrapper">
            
            <HeaderOne />
            <BcrumbBannerOne 
                title="About Us"
                paragraph ="At Fire Safety Solutions, we specialize in delivering end-to-end fire safety services, from design to maintenance.
                "
                styleClass=""
                mainThumb="/images/banner/service-3.jpg"
            />
            <ProjectFive colSize ="row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" parentClass="project-column-4" perPageShow="8"/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridFive;