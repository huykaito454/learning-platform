import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "mathlive";
const StudentPage = () => {
  const { register, handleSubmit } = useForm();
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [solutions, setSolutions] = useState([]);
  const topic = [
    "IntegerAddition",
    "MultiplicationOrDivisionSummary",
    "GCDLCMSummary",
    "Add3Vectors",
    "BasicIntegrate",
  ];
  const onSubmit = async (e) => {
    try {
      const res = await axios.get(
        "https://www6b3.wolframalpha.com/input/wpg/problem.jsp",
        {
          params: {
            count: 1,
            difficulty: "Beginner",
            load: 1,
            s: 16,
            type: `${e.textContent}`,
          },
        }
      );
      setQuestion(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitQuestion = async (values) => {
    try {
      const res2 = await axios.get(
        "https://www6b3.wolframalpha.com/input/wpg/checkanswer.jsp",
        {
          params: {
            attempt: 1,
            difficulty: "Beginner",
            load: true,
            problemID: `${question?.problems[0]?.problem_id}`,
            query: values?.answer,
            s: 16,
            type: "InputField",
          },
        }
      );
      alert(res2);
    } catch (error) {
      alert(error);
    }
  };
  const handleHint = async () => {
    try {
      const res = await axios.get(
        "https://api.wolframalpha.com/v2/query?appid=3ALXGK-U75P8GT6YX",
        {
          params: {
            input: `${question?.problems[0]?.string_question}`,
            format: "image",
            output: "JSON",
            podstate: "Result__Step-by-step solution",
          },
        }
      );

      setSolutions(res?.data?.queryresult?.pods);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAnswer = async () => {
    try {
      const res = await axios.get(
        "https://api.wolframalpha.com/v2/result?appid=3ALXGK-U75P8GT6YX",
        {
          params: {
            input: `${question?.problems[0]?.string_question}`,
          },
        }
      );

      setAnswer(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-start">
      <div className="page-container p-10 flex flex-col items-start justify-between gap-20 w-[50%]">
        <div className="flex gap-4 flex-wrap">
          {topic.length > 0 &&
            topic.map((item, index) => (
              <div
                key={index}
                className="button"
                onClick={(e) => {
                  onSubmit(e.target);
                }}
              >
                {item}
              </div>
            ))}
        </div>
        <div className="fex items-center justify-between">
          <div className="question py-10">
            <img src={question?.problems[0]?.problem_image} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmitQuestion)}>
            <input
              type="text"
              className="outline-none p-2 border-2 border-ef rounded-lg"
              {...register("answer")}
            />
            <button className="button">Submit</button>
            <p
              className="mt-8 cursor-pointer hover:text-primary transition-all"
              onClick={handleAnswer}
            >
              View answer
            </p>
            <math-field
              id="formula"
              virtual-keyboard-mode="manual"
              virtual-keyboard-theme="apple"
              style={{
                fontSize: "20px",
                outline: "none",
                padding: "1rem",
                border: "1px solid #eeee",
                borderRadius: "10px",
              }}
            >
              {answer}
            </math-field>
            <p
              className="mt-8 cursor-pointer hover:text-primary transition-all"
              onClick={handleHint}
            >
              View hints with step by step solutions
            </p>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[50%] p-10">
        {solutions && solutions.length > 0 ? (
          solutions.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span className="uppercase">{item.title}</span>
              {item.subpods.length > 0 &&
                item.subpods.map((item, index) => (
                  <div key={index}>
                    <p className="mb-2 uppercase">{item?.title}</p>
                    <img
                      src={item?.img?.src}
                      alt=""
                      style={{
                        width: `${item?.img?.width}px`,
                        height: `${item?.img?.height}px`,
                      }}
                    />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <span>....</span>
        )}
      </div>
    </div>
  );
};

export default StudentPage;
