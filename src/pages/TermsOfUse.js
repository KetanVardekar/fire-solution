import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const TermsOfUse = () => {

    return (
        <>
            <SEO title="Terms Of Use" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Terms Of Use"
                page="Terms Of Use"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <p>Welcome to Safety Solutions, a provider of comprehensive fire safety solutions. By accessing and using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
                                <h4>Acceptance of Terms </h4>
                                <p>By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as our Privacy Policy. If you do not agree to these terms, please do not use our website.
                                </p>
                                <h4>Services Provided</h4>
                                <p>Safety Solutions offers a range of fire safety services including design and consultancy, supply, installation, testing, and commissioning (SITC) of fire protection and detection systems, as well as operation and maintenance (O&M) and annual maintenance contracts (AMC). All services provided are subject to the terms outlined herein</p>
                                <h4>Use of Website</h4>
                                <p>You agree to use our website for lawful purposes only. You shall not use the website in any manner that could damage, disable, or impair the website or interfere with any other party's use and enjoyment of the website.</p>
                                <h4>Intellectual Property </h4>
                                <p>All content on our website, including text, graphics, logos, and images, is the property of Safety Solutions or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or otherwise use any content without our express written permission.</p>
                                <h4>Limitation of Liability</h4>
                                <p>To the fullest extent permitted by law, Safety Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services, even if we have been advised of the possibility of such damages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default TermsOfUse;