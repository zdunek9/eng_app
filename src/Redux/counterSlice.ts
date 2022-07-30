import { createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../models/question";

interface CounterState {
  questions: [QuestionModel];
  randomQuestion: QuestionModel;
}
const initialState: CounterState = {
  questions: [
    {
      id: "",
      question: "",
      questionPol: "",
      isFavorites: false,
    },
  ],
  randomQuestion: {
    id: "",
    question: "",
    questionPol: "",
    isFavorites: false,
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
      const index = state.questions.findIndex((element) => {
        if (element.id === state.randomQuestion.id) {
          return true;
        }
      });
      const roll: any = (max: number) => {
        let num = Math.floor(Math.random() * max);
        return num === index ? roll(max) : num;
      };
      if (state.questions.length > 1) {
        const number = roll(state.questions.length);
        state.randomQuestion = state.questions[number];
      } else {
        return;
      }
    },
    favoritesHandler(state, action) {
      state.questions.find((item) =>
        item.id === action.payload
          ? (item.isFavorites = !item.isFavorites)
          : null
      );
      state.randomQuestion.isFavorites = !state.randomQuestion.isFavorites;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
