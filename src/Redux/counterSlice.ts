import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  questions: [];
  favoritesQuestions: [];
  randomQuestion: {
    id: string;
    question: string;
    questionPol: string;
  };
}
const initialState: CounterState = {
  questions: [],
  favoritesQuestions: [],
  randomQuestion: {
    id: "",
    question: "",
    questionPol: "",
  },
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateQuestion(state, action) {
      state.questions = action.payload;
    },
    rollRandomQuestion(state) {
      const randomNumber = Math.floor(Math.random() * state.questions.length);
      state.randomQuestion = state.questions[randomNumber];
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
