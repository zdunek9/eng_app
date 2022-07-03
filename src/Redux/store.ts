import { configureStore, createSlice } from "@reduxjs/toolkit";
export interface CounterState {
    questions: [],
    favoritesQuestions:[],
    isLogged: boolean
}
const initialState:CounterState ={
    questions: [],
    favoritesQuestions: [],
    isLogged: false,
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        login(state){
            state.isLogged = true
        },
        logout(state){
            state.isLogged = false
        }
    }
})
const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})
export const counterActions = counterSlice.actions;
export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch