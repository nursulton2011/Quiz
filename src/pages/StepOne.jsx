import React from "react";
import { Progress } from "../components"; // Импорт компонента

export const StepOne = () => {
  const stepsCount = 4; // Всего шагов
  const activeStep = 1; // Текущий шаг (StepFour — это 4 шаг)
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
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
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
