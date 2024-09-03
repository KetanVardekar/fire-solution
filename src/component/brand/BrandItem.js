import React from 'react';

const Data = [
    {
        image: "/images/brand/AIIMS.jpg"
    },
    {
        image: "/images/brand/AUDA.jpg"
    },
    {
        image: "/images/brand/gujsarkar.jpg"
    },
    {
        image: "/images/brand/CONCOR.png"
    },
    {
        image: "/images/brand/PIU.JPG"
    },
    {
        image: "/images/brand/PWD.png"
    },
    {
        image: "/images/brand/RSRDC.JPG"
    },
    {
        image: "/images/brand/SMC.jpg"
    }
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;