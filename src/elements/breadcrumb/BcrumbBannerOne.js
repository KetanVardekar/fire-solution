import React from 'react';
import Tilty from 'react-tilty';

const BcrumbBannerOne = ({ title, paragraph, styleClass, mainThumb }) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h1 className="title h2" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <span style={{color:"#0A1931"}} dangerouslySetInnerHTML={{ __html: paragraph }}></span>
                </div>
                {/* <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                        <img
                            src={process.env.PUBLIC_URL + mainThumb}
                            alt="Illustration"
                            style={{
                                width: '70%',
                                height: 'auto',
                                '@media (min-width: 768px)': {
                                    width: '500px',
                                    height: '300px'
                                }
                            }}
                        />
                    </Tilty>
                </div> */}
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerOne;