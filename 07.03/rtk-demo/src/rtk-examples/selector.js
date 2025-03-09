import { createSelector } from '@reduxjs/toolkit';

const selectCounter = (state) => state.counter

// мемоизированное значение
const selectCounterValue = createSelector(
  [selectCounter],
  (counter) => counter.value
)