import React from 'react';
import ProjectOne from './ProjectOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import HeaderOne from '../../common/header/HeaderOne';
import CtaLayoutOne from '../cta/CtaLayoutOne';
import FooterOne from '../../common/footer/FooterOne';
import SEO from '../../common/SEO';
import OurWorkProjects from './OurProducts';
import OurProducts from './OurProducts';


const Products = () => {
	

	return (
		<>
        <SEO title="Our Products" />
        <ColorSwitcher />
			<main className="main-wrapper">
            <HeaderOne />
            
           
            <OurProducts colSize="col-xl-3 col-lg-4 col-md-6" itemShow="12" columnGap="row-15" parentClass="project-column-4"/>
            
            <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
		</>
    );
}

export default Products;
