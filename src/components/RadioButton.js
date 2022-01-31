import React from 'react';

const RadioButton = ({ textArr, required, ...rest }) => {
  return (
    <div className="block">
      <span>수영장 레인 정보</span>
      {required ? <span className="ml-1 text-red-600">(필수)</span> : ''}
      <div className="p-4 mt-3 border-2 border-solid border-cgBlue rounded-lg">
        <label>레인 길이</label>
        <label className="block mt-2 w-full">
          {textArr.length > 0 &&
            textArr.map((text, i) => (
              <span key={i} className="mr-4">
                <input type="radio" id={text} name="poolLength" value={text} />
                <label htmlFor={text} className="ml-2">
                  {text}
                </label>
              </span>
            ))}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
