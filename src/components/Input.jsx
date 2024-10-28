import React from "react";

const Input = ({ label, onChange, value, name }) => {
  return (
    <div>
      <p>
        <label>{label}</label>
        <input type="number" name={name} value={value} onChange={onChange} />
      </p>
    </div>
  );
};

export default Input;
