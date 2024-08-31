import React from 'react';
import ProjectOne from './ProjectOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import HeaderOne from '../../common/header/HeaderOne';
import CtaLayoutOne from '../cta/CtaLayoutOne';
import FooterOne from '../../common/footer/FooterOne';



const OurWork = () => {
	

	return (
		<>
        <ColorSwitcher />
			<main className="main-wrapper">
            <HeaderOne />
            </main>
            <ProjectOne/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
		</>
    );
}

export default OurWork;
