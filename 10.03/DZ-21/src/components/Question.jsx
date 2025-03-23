import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAnswer } from './features/questionnaire/questionnaireSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <label key={index} style={{ display: 'block', margin: '5px 0' }}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={index}
            checked={question.answer === index}
            onChange={() => dispatch(selectAnswer({ questionId: question.id, answerIndex: index }))}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;