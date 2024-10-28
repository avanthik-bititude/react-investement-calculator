import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  console.log(userInput);

  return (
    <>
      <Header />
      <UserInput onChange={handleInput} value={userInput} />
      {userInput.duration > 0 ? (
        <Results value={userInput} />
      ) : (
        <>
          <p className="center">Enter Duration greaterthan zero</p>
        </>
      )}
    </>
  );
}

export default App;
