import React from 'react';
import ProjectOne from './ProjectOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import HeaderOne from '../../common/header/HeaderOne';
import CtaLayoutOne from '../cta/CtaLayoutOne';
import FooterOne from '../../common/footer/FooterOne';
import SEO from '../../common/SEO';
import OurWorkProjects from './OurWorkProjects';


const OurWork = () => {
	

	return (
		<>
        <SEO title="Our Work" />
        <ColorSwitcher />
			<main className="main-wrapper">
            <HeaderOne />
            
           
            <OurWorkProjects parentClass="bg-color-light"/>
            
            <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
		</>
    );
}

export default OurWork;
