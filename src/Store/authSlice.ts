import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isLogged: boolean;
  apiKey: string;
  signinPageStatus: boolean;
  userName: string;
}
const initialState: authState = {
  isLogged: false,
  apiKey: "",
  signinPageStatus: false,
  userName: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.apiKey = action.payload[0];
      localStorage.setItem("token", action.payload[0]);
      localStorage.setItem("expirationTime", action.payload[1]);
    },
    logout(state) {
      state.isLogged = false;
      state.apiKey = "";
      state.userName = "";
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    checkForToken(state, action) {
      state.apiKey = action.payload;
      state.isLogged = true;
    },
    setToken(state, action) {
      state.apiKey = action.payload;
    },
    changeSigninPage(state, action) {
      state.signinPageStatus = action.payload;
    },
    setUsername(state, action) {
      state.userName = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
