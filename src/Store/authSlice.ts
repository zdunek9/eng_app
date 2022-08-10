import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isLogged: boolean;
  apiKey: string;
  preventLoading: boolean;
}
const initialState: authState = {
  isLogged: false,
  apiKey: "",
  preventLoading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.apiKey = action.payload;
      localStorage.setItem("token", state.apiKey);
    },
    logout(state) {
      state.isLogged = false;
      state.apiKey = "";
      state.preventLoading = false;
      localStorage.removeItem("token");
    },
    checkForToken(state, action) {
      state.apiKey = action.payload;
      state.isLogged = true;
    },
    preventFetch(state) {
      state.preventLoading = true;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
