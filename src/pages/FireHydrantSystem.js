    import React from 'react';
    import FooterOne from '../common/footer/FooterOne';
    import HeaderOne from '../common/header/HeaderOne';
    import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
    import ColorSwitcher from '../elements/switcher/ColorSwitcher';
    import SEO from '../common/SEO';
    import CtaLayoutOne from '../component/cta/CtaLayoutOne';
    import ProjectOne from '../component/project/ProjectOne';


    const FireHydrantSystem = () => {

        return (
            <>
            <SEO title="Fire Hydrant Systemn" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                    title="Fire Hydrant <br>System"
                    paragraph ="Designing and installing robust  Fire Hydrant Systems that provide a <br> reliable source of 
                water for firefighting. Our hydrant solutions are built to <br> ensure quick response and  efficient fire 
                suppression in case of emergencies.<br> Ideal for industrial, commercial, and residential areas, our systems 
                comply <br> with safety regulations and offer seamless protection."
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

    export default FireHydrantSystem;