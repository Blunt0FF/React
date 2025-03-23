import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>Результат:</h2>
      <p>
        Вы правильно ответили на {score} из {totalQuestions} вопросов!
      </p>
    </div>
  );
};

export default Result;