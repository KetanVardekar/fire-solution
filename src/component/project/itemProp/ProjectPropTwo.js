import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';

const PropOne = ({ projectStyle, portfolio }) => {
  return (
    <>
      <div className={`project-grid ${projectStyle}`}>
        <div
          className="thumbnail"
          style={{
            width: '300px', 
            height: '440px', 
            overflow: 'hidden',
            borderRadius: '15px',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + portfolio.image}
            alt="icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="content">
          <span className="subtitle" style={{fontSize:'16px'}} >
            {portfolio.category.map((cat, i) => (
              <span key={i}>{cat}</span>
            ))}
          </span>
          <h3 className="title" style={{fontSize:'30px'}}>{portfolio.title}</h3>
        </div>
      </div>
    </>
  );
};

export default PropOne;
