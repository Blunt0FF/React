import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  questions: [
    {
      id: 1,
      question: 'Какое животное может спать до 22 часов в сутки?',
      options: ['Ленивец', 'Коала'],
      answer: null,
      correctAnswerIndex: 1, // Правильный ответ: "Коала"
    },
    {
      id: 2,
      question: 'Какая страна является крупнейшим производителем кофе в мире?',
      options: ['Бразилия', 'Колумбия'],
      answer: null,
      correctAnswerIndex: 0, // Правильный ответ: "Бразилия"
    },
    {
      id: 3,
      question: 'Сколько сердец у осьминога?',
      options: ['Одно', 'Три'],
      answer: null,
      correctAnswerIndex: 1, // Правильный ответ: "Три"
    },
    {
      id: 4,
      question: 'Какой металл является самым легкоплавким?',
      options: ['Ртуть', 'Галлий'],
      answer: null,
      correctAnswerIndex: 0, // Правильный ответ: "Ртуть"
    },
    {
      id: 5,
      question: 'Какое самое глубокое озеро в мире?',
      options: ['Байкал', 'Каспийское море'],
      answer: null,
      correctAnswerIndex: 0, // Правильный ответ: "Байкал"
    },
  ],
  submitted: false,
  score: 0,
};

// Срез состояния
const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      state.questions.find((q) => q.id === questionId).answer = answerIndex;
    },
    submitAnswers: (state) => {
      state.submitted = true;

      // Подсчет баллов: проверяем, совпадают ли ответы с правильными индексами
      state.score = state.questions.filter(
        (q) => q.answer === q.correctAnswerIndex
      ).length;
    },
  },
});

export const { selectAnswer, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;