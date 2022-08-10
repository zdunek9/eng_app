import { createSlice } from "@reduxjs/toolkit";
import { FlashcardModel } from "../models/flashcard";

interface flashcardState {
  flashcards: [FlashcardModel];
  randomFlashcard: FlashcardModel;
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
};
const flashcardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    updateFlashcard(state, action) {
      state.flashcards = action.payload;
    },
    rollRandomFlashcard(state) {
      const index = state.flashcards.findIndex((element) => {
        if (element.id === state.randomFlashcard.id) {
          return true;
        }
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
});
export const flashcardActions = flashcardSlice.actions;
export default flashcardSlice.reducer;
