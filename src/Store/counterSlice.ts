import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { QuestionModel } from "../models/interface";

interface CounterState {
  questions: QuestionModel[];
  randomQuestion: QuestionModel;
  favoritesArray: QuestionModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: undefined | String;
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
  status: "idle",
  error: undefined,
};

const URL_TAB = `${process.env.REACT_APP_DB_TAB}`;

export const getQuestionsAPI = createAsyncThunk(
  "table/getQuestionsAPI",
  async (name, { getState }) => {
    const token: any = getState();
    const response = await axios.get(`${URL_TAB}?auth=${token.auth.apiKey}`);
    return response.data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
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
      state.questions.forEach((item) => {
        if (item.id === action.payload) {
          item.isFavorites = !item.isFavorites;
          if (item.isFavorites) {
            state.favoritesArray.unshift(item);
          } else {
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
  extraReducers(builder) {
    builder
      .addCase(getQuestionsAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQuestionsAPI.fulfilled, (state, action) => {
        const itemTab = [];
        for (const item in action.payload) {
          itemTab.push({
            id: item,
            question: action.payload[item].Ang,
            questionPol: action.payload[item].Pol,
            isFavorites: false,
          });
        }
        state.status = "succeeded";
        state.questions = itemTab;
      })
      .addCase(getQuestionsAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
