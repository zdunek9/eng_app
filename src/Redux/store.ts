import { configureStore } from "@reduxjs/toolkit";
import progressReducer from './progress'
import counterReducer from "./counterSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    progress: progressReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
