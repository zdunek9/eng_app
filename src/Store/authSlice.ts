import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isLogged: boolean;
  apiKey: string;
  preventLoading: boolean;
  signinPageStatus:boolean;
}
const initialState: authState = {
  isLogged: false,
  apiKey: "",
  preventLoading: false,
  signinPageStatus:false
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
      state.preventLoading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    checkForToken(state, action) {
      state.apiKey = action.payload;
      state.isLogged = true;
    },
    preventFetch(state) {
      state.preventLoading = true;
    },
    setToken(state, action) {
      state.apiKey = action.payload;
    },
    changeSigninPage(state){
      state.signinPageStatus = !state.signinPageStatus
    }
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
