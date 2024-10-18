import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';

const PropOne = ({ projectStyle, portfolio }) => {
    return (
        <>
            <div className={`project-grid ${projectStyle}`}>
                <div className="thumbnail">
                    <img
                        src={process.env.PUBLIC_URL + portfolio.image}
                        alt="icon"
                    />
                </div>

                <h3
                    className="text-center"
                    style={{
                        marginTop: '10px', // Adjust this value as needed
                        marginBottom: '5px', // Adjust this value as needed
                        lineHeight: '1.4', // Optional: Adjust the line height
                    }}
                >
                    {portfolio.category.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                </h3>

                <h6
                    className="text-center"
                    style={{
                        marginTop: '5px', // Adjust this value as needed
                        marginBottom: '15px', // Adjust this value as needed
                    }}
                >
                    {portfolio.title}
                </h6>
            </div>
        </>
    );
};

export default PropOne;
