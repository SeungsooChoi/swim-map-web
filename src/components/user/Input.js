import React from 'react';

const Input = props => {
  return (
    <input
      className="block mt-3 px-3 py-2 w-full border border-slate-400 rounded-md shadow-sm"
      {...props}
    />
  );
};

export default Input;
