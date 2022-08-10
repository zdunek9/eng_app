import { createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../models/question";

interface CounterState {
  questions: QuestionModel[];
  randomQuestion: QuestionModel;
  favoritesArray: QuestionModel[];
}
const initialState: CounterState = {
  questions: [],
  randomQuestion: {
    id: "",
    question: "",
    questionPol: "",
    isFavorites: false,
  },
  favoritesArray: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateQuestion(state, action) {
      state.questions = action.payload;
    },
    rollRandomQuestion(state) {
      const index = state.questions.findIndex(
        (element) => element.id === state.randomQuestion.id
      );
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
      state.questions.find((item) => {
        if (item.id === action.payload) {
          item.isFavorites = !item.isFavorites;
          if (item.isFavorites) {
            state.favoritesArray.unshift(item);
          } else {
            state.favoritesArray.splice(state.favoritesArray.indexOf(action.payload, 1))
            const filtredArray = state.favoritesArray.filter(
              (item) => item.id !== action.payload
            );
            state.favoritesArray = filtredArray;
          }
        }
      });
      state.randomQuestion.isFavorites = !state.randomQuestion.isFavorites;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
