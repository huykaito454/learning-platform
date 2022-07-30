import React, { useState } from "react";
import QuestionChoice from "./QuestionChoice";
import QuestionText from "./QuestionText";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../../store/modal/modalSlice";
import { setQuestion } from "../../store/question/questionSlice";
import { useSelector } from "react-redux";
const QuestionCard = ({ item, index }) => {
  const { questionList } = useSelector((state) => state.questionList);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("no answer");
  const handleAnswer = (answer) => {
    setAnswer(answer);
  };
  const onSubmit = async (index) => {
    if (answer === "no answer") {
      Swal.fire({
        title: "Warning",
        text: "Please choose your answer",
        icon: "warning",
        confirmButtonColor: "#005CFF",
        confirmButtonText: "OK",
      });
    } else {
      const question = { ...questionList[index] };
      if (typeof question?.result == "boolean") {
        question.result = question?.result.toString();
      }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1ed760",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          if (answer == question?.result) {
            Swal.fire({
              title: "Exactly!",
              text: `Correct answer : ${question?.result}`,
              icon: "success",
              showCancelButton: true,
              cancelButtonColor: "#d33",
              confirmButtonColor: "#005CFF",
              confirmButtonText: "View explanation",
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(setIsOpen(true));
                dispatch(setQuestion(question));
              }
            });
          } else {
            Swal.fire({
              title: "Wrong!",
              text: `Correct answer : ${question?.result}`,
              icon: "error",
              showCancelButton: true,
              cancelButtonColor: "#d33",
              confirmButtonColor: "#005CFF",
              confirmButtonText: "View explanation",
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(setIsOpen(true));
                dispatch(setQuestion(question));
              }
            });
          }
        }
      });
    }
  };
  return (
    <div className="flex flex-col items-start justify-between p-5 rounded-lg bg-white shadow gap-8">
      <div className="flex items-center gap-2 text-lg w-full flex-wrap">
        <p className="font-semibold">Question {index + 1}:</p>
        <math-field
          id="formula"
          read-only
          style={{
            outline: "none",
            fontSize: "18px",
            width: "77%",
          }}
        >
          {item?.question?.plaintext}
        </math-field>
      </div>
      <div className="flex items-center justify-center w-full">
        <img
          src={
            item?.question?.img
              ? `data:image/png;base64, ${item?.question?.img}`
              : "https://img.freepik.com/premium-vector/person-people-question-mark-answer-illustration-concept-action_159757-131.jpg?w=1380"
          }
          alt=""
          className="w-40"
        />
      </div>

      <div className="w-full flex flex-col gap-3 text-sm">
        {item.questionType === "TEXT" ? (
          <QuestionText
            idQuestion={item.id}
            handleAnswer={handleAnswer}
          ></QuestionText>
        ) : (
          <QuestionChoice
            question={item}
            handleAnswer={handleAnswer}
          ></QuestionChoice>
        )}
        <div
          className="w-full flex justify-end"
          onClick={() => {
            onSubmit(index);
          }}
        >
          <div className="button border-primary px-6 text-base">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
