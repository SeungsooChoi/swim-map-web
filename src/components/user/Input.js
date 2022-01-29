import React from 'react';

const Input = ({ text, ...rest }) => {
  return (
    <label className="block mb-4 w-full">
      <span className="block font-medium text-slate-700">{text}</span>
      <input
        className="block mt-3 px-3 py-2 w-full border border-slate-400 rounded-md shadow-sm"
        {...rest}
      />
    </label>
  );
};

export default Input;
