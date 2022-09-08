import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    diary:{
        id:0,
        content:"",
        date:"",
        emotion_id:3,
    },
   
}

export const diarySlice = createSlice({
    name:"diary",
    initialState,
    reducers: {
        clearDiary: (state) => {
            state.diary ={
                id: 0,
                content: "",
                date:"",
                emotion_id:null,
            }
        },

        addDiary: (state, action) => {
             return {
                ...state,
                diary:[...state.diary, action.payload]
             }
        },

        deleteDiary: (state, action) => {
            return {
                ...state,
                diary: state.todos.filter((diary)=>diary.id !== action.payload)
            }
        },

        editDiary : (state, action) => {
                return{
                    ...state.find((diary)=>parseInt(diary.id) === parseInt(action.payload))
                }
        }
    }
})

export const { clearDiary } = diarySlice.actions;
export default diarySlice.reducer