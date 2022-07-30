import React, { useEffect } from "react";
import { boolean } from "yup";

const QuestionChoice = ({ question, handleAnswer = () => {} }) => {
  const handleRemoveActive = (element) => {
    element.forEach((item) => {
      item.classList.remove("answer-active");
    });
  };
  useEffect(() => {
    const answer = document.querySelectorAll(`.question-${question.id}`);
    const answerValue = document.getElementsByName(`question-${question.id}`);
    answer.forEach((item) =>
      item.addEventListener("click", () => {
        handleRemoveActive(answer);
        item.classList.toggle("answer-active");
        for (var i = 0, length = answerValue.length; i < length; i++) {
          if (answerValue[i].checked) {
            handleAnswer(answerValue[i].value);
            break;
          }
        }
      })
    );
  }, [handleAnswer, question.id]);
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {question?.option.length > 0 &&
        question?.option.map((item, index) => (
          <label
            key={index}
            htmlFor={`choice-${index}-${question.id}`}
            className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-ef cursor-pointer question-${question.id}`}
          >
            {typeof item == "boolean" ? item.toString() : item}
            <input
              type="radio"
              name={`question-${question.id}`}
              id={`choice-${index}-${question.id}`}
              className="hidden"
              value={item}
            />
          </label>
        ))}
    </div>
  );
};

export default QuestionChoice;
