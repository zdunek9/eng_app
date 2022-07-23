import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  questions: [];
  favoritesQuestions: [];
  isLogged: boolean;
  randomQuestion: any;
  apiKey: string;
  preventLoading: boolean;
}
const initialState: CounterState = {
  questions: [],
  favoritesQuestions: [],
  isLogged: false,
  randomQuestion: [],
  apiKey: "",
  preventLoading: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.apiKey = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.apiKey = "";
      state.preventLoading = false;

    },
    updateQuestion(state, action) {
      state.questions = action.payload;
    },
    rollRandomQuestion(state) {
      const randomNumber = Math.floor(Math.random() * state.questions.length);
      state.randomQuestion = state.questions[randomNumber];
    },
    preventFetch(state) {
      state.preventLoading = true;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
