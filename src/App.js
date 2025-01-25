import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  //Sets states for the User Input Value$.
  const [isValue, setIsValue] = useState({
    initialInvestment: 100,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 8,
  });

  const inputIsValid = isValue.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setIsValue((prevIsValue) => {
      return {
        ...prevIsValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleReset() {
    console.log("handle");
    setIsValue({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }

  return (
    <>
      <Header />
      {!inputIsValid && (
        <p className="center">
          Please enter a <b>duration</b> greater than zero.
        </p>
      )}
      {inputIsValid && <Results input={isValue} />}
      <UserInputs isValue={isValue} onChange={handleChange} />
      <div className="btn">
        <button className="reset-btn" onClick={handleReset}>
          RESET
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
