import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FlashcardModel } from "../models/interface";

interface flashcardState {
  flashcards: FlashcardModel[];
  randomFlashcard: FlashcardModel;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: undefined | String;
}
const initialState: flashcardState = {
  flashcards: [
    {
      id: "",
      flashcardPol: "",
      flashcardAng: "",
      flashcardTipPol: "",
      flashcardTipAng: "",
    },
  ],
  randomFlashcard: {
    id: "",
    flashcardPol: "",
    flashcardAng: "",
    flashcardTipPol: "",
    flashcardTipAng: "",
  },
  status: "idle",
  error: undefined,
};

const URL_FLASHCARD = `${process.env.REACT_APP_DB_FLASHCARDS}`;

export const getFlashcardAPI = createAsyncThunk(
  "table/getFlashcardAPI",
  async (name, { getState }) => {
    const token: any = getState();
    const response = await axios.get(
      `${URL_FLASHCARD}?auth=${token.auth.apiKey}`
    );
    return response.data;
  }
);

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    rollRandomFlashcard(state) {
      const index = state.flashcards.findIndex((element) => {
        if (element.id === state.randomFlashcard.id) {
          return true;
        }
        return false;
      });
      const roll: any = (max: number) => {
        let num = Math.floor(Math.random() * max);
        return num === index ? roll(max) : num;
      };
      if (state.flashcards.length > 1) {
        const number = roll(state.flashcards.length);
        state.randomFlashcard = state.flashcards[number];
      } else {
        return;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFlashcardAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFlashcardAPI.fulfilled, (state, action) => {
        const itemTabFlashcards = [];
        for (const item in action.payload) {
          itemTabFlashcards.push({
            id: item,
            flashcardPol: action.payload[item].p1,
            flashcardAng: action.payload[item].a1,
            flashcardTipPol: action.payload[item].p2,
            flashcardTipAng: action.payload[item].a2,
          });
        }
        state.status = 'succeeded'
        state.flashcards = itemTabFlashcards;
      })
      .addCase(getFlashcardAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const flashcardActions = flashcardSlice.actions;
export default flashcardSlice.reducer;
