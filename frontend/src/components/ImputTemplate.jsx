import React from "react";

function InputTemplate({
  textPlaceholder,
  customWidth,
  value,
  methodOnChange,
  name,
  inputType,
}) {
  return (
    <label className={`cstm_styleInput ${customWidth}`}>
      <input
        className="focus:outline-none w-full border-2 rounded-lg border-gray-900 mr-2 ml-5"
        type={inputType}
        placeholder={textPlaceholder}
        value={value}
        onChange={(e) => methodOnChange(e.target.name, e.target.value)}
        name={name}
      />
    </label>
  );
}

export default InputTemplate;
