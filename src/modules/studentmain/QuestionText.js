import React, { useEffect, useState } from 'react';
import 'mathlive';
const QuestionText = ({ idQuestion, handleAnswer = () => {} }) => {
  const [mathMode, setMathMode] = useState(false);

  const handleSwitchMode = () => {
    const mf = document.getElementById(`question-${idQuestion}`);
    setMathMode(!mathMode);
    if (!mathMode) {
      mf.executeCommand(['switch-mode', 'text']);
    } else {
      mf.executeCommand(['switch-mode', 'math']);
    }
  };

  useEffect(() => {
    const mf = document.getElementById(`question-${idQuestion}`);
    mf.addEventListener('input', () => {
      handleAnswer(mf.value);
    });
    return () => {
      mf.removeEventListener('input', () => {});
    };
  }, [handleAnswer, idQuestion]);

  return (
    <div className='flex flex-row gap-3'>
      <math-field
        id={`question-${idQuestion}`}
        virtual-keyboard-mode='manual'
        virtual-keyboard-theme='apple'
        style={{
          fontSize: '20px',
          outline: 'none',
          padding: '0.5rem 1.5rem',
          border: '1px solid #eeee',
          borderRadius: '10px',
          width: '100%',
          cursor: 'pointer',
        }}></math-field>
      <button
        onClick={handleSwitchMode}
        className='border rounded-lg outline-none w-[10%]'>
        {mathMode === true ? 'Math mode' : 'Text mode'}
      </button>
    </div>
  );
};

export default QuestionText;
