import React from "react";
import {Progress} from "../components/"; // Импорт компонента

export const StepFour = () => {
  const stepsCount = 4; // Всего шагов
  const activeStep = 4; // Текущий шаг (StepFour — это 4 шаг)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            {/* Прогрессбар */}
            <Progress stepsCount={stepsCount} activeStep={activeStep} />
          </div>
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <button type="button" id="next-btn" disabled>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
