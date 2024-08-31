import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">Why Fire Safety Matters?</h3>
                                <p>Fire safety is not just a regulatory requirement; it's a commitment to safeguarding lives and property. Our expertise ensures that your fire protection systems are designed, installed, and maintained to the highest standards, providing peace of mind in every situation.</p>
                            </div>
                            {/* <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Design</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                            <FormOne />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;