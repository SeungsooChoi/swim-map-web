import React from 'react';

const Input = ({ text, required, ...rest }) => {
  return (
    <label className="block mb-4 w-full">
      <span className="font-medium text-slate-700">{text}</span>
      {required ? <span className="ml-1 text-red-600">(필수)</span> : ''}
      <input
        className="block mt-3 px-3 py-2 w-full border border-slate-400 rounded-md shadow-sm"
        {...rest}
      />
    </label>
  );
};

export default Input;
