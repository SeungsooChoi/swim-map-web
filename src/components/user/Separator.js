import React from 'react';

const Separator = () => {
  return (
    <div className="mt-5 mb-6 flex justify-center items-center w-full uppercase">
      <div className="w-full h-px bg-stone-400"></div>
      <span className="mx-2.5 font-semibold text-slate-600">Or</span>
      <div className="w-full h-px bg-stone-400"></div>
    </div>
  );
};

export default Separator;
