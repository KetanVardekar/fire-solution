import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';

const FireSafetyTraining = () => {
    return (
        <>
        <SEO title="Fire Safety Training" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Fire Safety Training"
                paragraph="Empowering individuals and organizations with <br> essential fire safety knowledge and training. <br>  
                Our expert-led sessions cover fire prevention, emergency response, <br> and proper use of firefighting equipment. 
                Designed for workplaces, <br>  residential communities, and industries, our training ensures preparedness, <br> 
                compliance with safety regulations, and the ability to respond effectively in emergencies."
                styleClass=""
                mainThumb="/images/banner/fire-safety-training.jpg"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default FireSafetyTraining;
