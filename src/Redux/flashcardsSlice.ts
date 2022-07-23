import { createSlice } from "@reduxjs/toolkit";

interface flashcardState {
  flashcards: [];
  randomFlashcard: {
    id: string;
    flashcardPol: string;
    flashcardAng: string;
    flashcardTipPol: string;
    flashcardTipAng: string;
  };
}
const initialState: flashcardState = {
  flashcards: [],
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
      const randomNumber = Math.floor(Math.random() * state.flashcards.length);
      state.randomFlashcard = state.flashcards[randomNumber];
    },
  },
});
export const flashcardActions = flashcardSlice.actions;
export default flashcardSlice.reducer;
