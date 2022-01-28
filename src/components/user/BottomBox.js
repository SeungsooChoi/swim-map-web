import React from 'react';
import { Link } from 'react-router-dom';

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <div className="mb-5 text-center">
      <span className="mr-3">{cta}</span>
      <Link to={link} className="text-cgBlue/80 font-semibold">
        {linkText}
      </Link>
    </div>
  );
};

export default BottomBox;
