import React from 'react';

const Data = [
    {
        image: "/images/brand/AIIMS.jpg",
        place: "RAIPUR"
    },
    {
        image: "/images/brand/AUDA.jpg",
        place: "AHEMDABAD"
    },
    {
        image: "/images/brand/gujsarkar.jpg",
        place: "GUJARAT"
    },
    {
        image: "/images/brand/CONCOR.png",
        place: "GUJARAT"
    },
    {
        image: "/images/brand/PIU.jpg",
        place: "Indore"
    },
    {
        image: "/images/brand/PWD.png",
        place: "DAMAN"
    },
    {
        image: "/images/brand/RSRDC.jpg",
        place: "RAJASTHAN"
    },
    {
        image: "/images/brand/SMC.jpg",
        place: "SURAT"
    }
]

const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt={data.name} />
                        <div>
                        <span className="brand-name">{data.place}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;
