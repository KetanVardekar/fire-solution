import React from 'react';

const Data = [
    {
        image: "/images/brand/brand-logo-1.jpg"
    },
    {
        image: "/images/brand/brand-logo-2.png"
    },
    {
        image: "/images/brand/brand-logo-3.png"
    },
    {
        image: "/images/brand/brand-logo-4.png"
    },
    {
        image: "/images/brand/brand-logo-5.png"
    },
    {
        image: "/images/brand/brand-logo-6.png"
    },
    {
        image: "/images/brand/brand-logo-7.png"
    },
    {
        image: "/images/brand/brand-logo-8.jpg  "
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