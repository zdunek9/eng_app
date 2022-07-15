import { createSlice } from "@reduxjs/toolkit";
interface progressState {
  totalProgress: number;
}
const initialState: progressState = {
  totalProgress: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    add(state) {
      state.totalProgress = state.totalProgress + 1;
    },
  },
});
export const progressActions = progressSlice.actions;
export default progressSlice.reducer;
