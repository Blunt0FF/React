import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './components/features/questionnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { questions, submitted, score } = useSelector((state) => state.questionnaire);

  // Обработчик отправки анкеты
  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="App">
      <h1>Интересный квиз</h1>

      {/* Список вопросов */}
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}

      {/* Кнопка отправки */}
      <button onClick={handleSubmit} disabled={submitted}>
        {submitted ? 'Отправлено!' : 'Отправить'}
      </button>

      {/* Отображение результата */}
      {submitted && <Result score={score} totalQuestions={questions.length} />}
    </div>
  );
}

export default App;