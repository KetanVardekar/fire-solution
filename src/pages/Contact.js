import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import FormTwo from '../component/contact/FormTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ContactLocation from '../component/contact/ContactLocation';



const Contact = () => {
    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne
                    title="Contact"
                    page="Contact"
                />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h4 className="title" style={{ marginBottom: '25px', fontWeight: 'bold' }}>Get in Touch With Us</h4>
                                    <FormTwo />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="contact-info mb--30 mb_md--30 mt_md--0">
                                    <h4 className="title" style={{ marginBottom: '12px' }}>Phone</h4>
                                    <p style={{ marginBottom: '15px' }}>As a fire safety solutions company, we're available 24/7 to assist you.</p>
                                    <h4 className="phone-number">
                                        <a href="tel:9328914774">93289 14774</a> / <a href="tel:9825468504">98254 68504</a>
                                    </h4>
                                </div>
                                <div className="contact-info">
                                    <h4 className="title" style={{ marginBottom: '12px' }}>Email</h4>
                                    <p style={{ marginBottom: '15px' }}>Our support team will get back to in 48-h during standard business hours.</p>
                                    <h4
                                        className="phone-number"
                                        style={{
                                            wordWrap: 'break-word',
                                            whiteSpace: 'normal',
                                            display: 'inline-block',
                                            wordBreak: 'break-all'
                                        }}
                                    >
                                        <a href="mailto:superindiabuild@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            superindiabuild@gmail.com
                                        </a>
                                    </h4>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-12">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Bubble" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="Circle" /></li>
                    </ul>
                </div>

                <div className="section section-padding bg-color-dark overflow-hidden">
                    <div className="container">
                        <SectionTitle
                            subtitle="Find Us"
                            title="Our office"
                            description=""
                            textAlignment="heading-light-left"
                            textColor=""
                        />
                        <div className="row">
                            <ContactLocation />
                        </div>
                    </div>
                    <ul className="shape-group-11 list-unstyled">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                    </ul>
                </div>

                <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
        </>
    )
}

export default Contact;