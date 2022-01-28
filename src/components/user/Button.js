import React from 'react';

const Button = props => {
  return (
    <button
      className={`mt-4 p-3 w-full font-semibold text-white bg-midNightGreen/70 rounded-lg`}
      {...props}
    ></button>
  );
};

export default Button;
