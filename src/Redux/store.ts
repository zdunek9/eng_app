import { configureStore, createSlice } from "@reduxjs/toolkit";
export interface CounterState {
    questions: [],
    favoritesQuestions:[],
    isLogged: boolean,
    randomQuestion: any
}
const initialState:CounterState ={
    questions: [],
    favoritesQuestions: [],
    isLogged: false,
    randomQuestion:[]
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
        },
        updateQuestion(state, action){
            state.questions = action.payload
        },
        rollRandomQuestion(state){
            const randomNumber = Math.floor(Math.random() * state.questions.length)
            state.randomQuestion = state.questions[randomNumber]
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