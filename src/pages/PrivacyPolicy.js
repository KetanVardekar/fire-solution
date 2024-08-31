import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Privacy Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Privacy Policy"
                page="Privacy Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <div className="section-title">
                                        <h5 className="title">Effective Date: August 10th, 2024</h5>
                                    </div>
                                    <h4>GDPR Compliance</h4>
                                    <p>At Fire Safety Solutions, we are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). This policy outlines how we collect, use, and protect your personal data.</p>
                                    <h4>About Fire Safety Solutions</h4>
                                    <p>Fire Safety Solutions is dedicated to delivering top-notch fire safety solutions and services. Our contact information is provided below for any inquiries regarding this Privacy Policy: <a href="mailto:example@company.com">example@company.com</a></p>
                                    <h4>When We Collect Personal Data</h4>
                                    <p>We collect personal data when you interact with our website, request information, or engage with our services. This may include your name, email address, and other contact details.</p>
                                    <h4>Why We Collect and Use Personal Data</h4>
                                    <p className="mb--20">We use personal data to provide and improve our services, respond to inquiries, and communicate important information related to our fire safety solutions. This data helps us tailor our offerings to your needs and ensure effective service delivery.</p>
                                    <h4>Type of Personal Data Collected</h4>
                                    <ul>
                                        <li>Contact Information: Name, email address, phone number</li>
                                        <li>Interaction Data: Information about your interactions with our website and services</li>
                                    </ul>
                                    <h4>Information We Collect Automatically</h4>
                                    <p>We automatically collect certain information when you visit our website, such as:</p>
                                    <ul>
                                        <li>Browser type and operating system</li>
                                        <li>Referring page and browsing path</li>
                                        <li>IP address and domain of your Internet Service Provider (ISP)</li>
                                    </ul>
                                    <p>This information helps us understand how visitors use our website and improve their experience.</p>
                                    <h4>The Use of Cookies and Web Beacons</h4>
                                    <p className="mb--20">We use cookies to enhance your experience on our website. Cookies are small data files stored on your device that help us analyze website traffic, tailor content, and detect security threats. We may also use web beacons to track email interactions and website visits. Cookies and web beacons do not personally identify you.</p>
                                    <h4>How Long We Keep Your Data</h4>
                                    <p className="mb--20">We retain personal data for as long as necessary to fulfill the purposes for which it was collected, respond to inquiries, and comply with legal requirements. This ensures we can address any legal claims, complaints, or issues that may arise.</p>
                                    <h4>Your Rights to Your Personal Data</h4>
                                    <p>You have the right to access, correct, or delete your personal data held by us. If you wish to exercise these rights, please contact us at <a href="mailto:example@company.com">safety@gmail.com</a>.</p>
                                    <h4>Hotjar’s Privacy Policy</h4>
                                    <p>We may use Hotjar to analyze user interactions on our website. Hotjar helps us understand how users engage with our content and improve their experience. For more information on how Hotjar collects and processes data, please refer to Hotjar’s Privacy Policy.</p>
                                    <h4>Changes to This Privacy Policy</h4>
                                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    );
}

export default PrivacyPolicy;
