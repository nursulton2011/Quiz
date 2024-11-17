import { useState } from "react";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from './pages';
import { Progress } from './components'
import "./App.css";
import "./styles/main.css";

export const App = () => {
  const [counter, setCounter] = useState(0)

  console.log(counter)


  const incrementHandler = () => {
    setCounter(counter + 1)
  }

  const decrementHandler = () => {
    setCounter(counter - 1)
  }


  return (
    <div className="App">
      <Welcome />
      <div>
        <div>{counter}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      </div>

    </div>
  );
};
