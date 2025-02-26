import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const SafetyGoods = () => {

    return (
        <>
        <SEO title="Safety Goods" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Safety Goods"
                paragraph="Providing high-quality safety goods to ensure <br> protection in various industrial and commercial 
                environments. <br>  From personal protective equipment (PPE) to fire-resistant gear, <br>  our products meet industry 
                standards and help create a safer workspace. <br>  Because your safety is our top priority."
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

export default SafetyGoods;