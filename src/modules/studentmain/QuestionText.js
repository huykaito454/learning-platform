import React, { useEffect, useState } from "react";
import "mathlive";
const QuestionText = ({ idQuestion, handleAnswer = () => {} }) => {
  useEffect(() => {
    const mf = document.getElementById(`question-${idQuestion}`);
    mf.addEventListener("input", () => {
      handleAnswer(mf.value);
    });
    return () => {
      mf.removeEventListener("input", () => {});
    };
  }, [handleAnswer, idQuestion]);

  return (
    <>
      <math-field
        id={`question-${idQuestion}`}
        virtual-keyboard-mode="manual"
        virtual-keyboard-theme="apple"
        style={{
          fontSize: "20px",
          outline: "none",
          padding: "0.5rem 1.5rem",
          border: "1px solid #eeee",
          borderRadius: "10px",
          width: "100%",
          cursor: "pointer",
        }}
      ></math-field>
    </>
  );
};

export default QuestionText;
