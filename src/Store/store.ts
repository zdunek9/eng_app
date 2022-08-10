import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import counterReducer from "./counterSlice";
import flashcardsReducer from "./flashcardsSlice";
import authReducer from "./authSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    progress: progressReducer,
    flashcards: flashcardsReducer,
    auth: authReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
