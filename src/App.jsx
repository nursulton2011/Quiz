import React from "react";
import { Routes, Route } from "react-router";

import {
  Welcome,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  Step,
  Thanks,
} from "./pages";

import "./App.css";
import "./styles/main.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
          <Route path="/step" element={<Step />}>
            <Route index path="1" element={<StepOne />} />
            <Route path="2" element={<StepTwo />} />
            <Route path="3" element={<StepThree />} />
            <Route path="4" element={<StepFour />} />
          </Route>

        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};
