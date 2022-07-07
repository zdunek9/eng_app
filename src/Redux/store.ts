import { configureStore, createSlice } from "@reduxjs/toolkit";
export interface CounterState {
    questions: [],
    favoritesQuestions:[],
    isLogged: boolean,
    randomQuestion: any
    apiKey:string
}
const initialState:CounterState ={
    questions: [],
    favoritesQuestions: [],
    isLogged: false,
    randomQuestion:[],
    apiKey:""
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        login(state, action){
            state.isLogged = true
            state.apiKey = action.payload
        },
        logout(state){
            state.isLogged = false
            state.apiKey = ''
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