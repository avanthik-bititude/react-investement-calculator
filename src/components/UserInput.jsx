import React from "react";
import Input from "./Input";

const UserInput = ({ onChange, UserInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial investment"
          onChange={onChange}
          value={UserInput}
          name="initialInvestment"
        />
        <Input
          label="Annual investment"
          onChange={onChange}
          value={UserInput}
          name="annualInvestment"
        />
        <Input
          label="Expected return"
          onChange={onChange}
          value={UserInput}
          name="expectedReturn"
        />
        <Input
          label="duration"
          onChange={onChange}
          value={UserInput}
          name="duration"
        />
      </div>
    </section>
  );
};

export default UserInput;
