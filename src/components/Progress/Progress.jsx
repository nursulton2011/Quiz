import classNames from "classnames";

export const Progress = ({ steps, activeStep }) => {
  // Вынесено наверх
  const progressPercentage = ((100 / steps) * (activeStep - 1)).toFixed(2);

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">{progressPercentage}%</span>
      </div>
      <div className="indicator__progressbar">
        {Array.from({ length: steps }).map((_, index) => (
          <div
            key={index} // Добавлено key
            className={classNames(
              `indicator__unit indicator__unit-${index + 1}`,
              {
                _active: index < activeStep,
                _current: index === activeStep - 1, // Активный шаг выделяется
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};
