import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const url = "http://13.125.243.242/"

export const getDiary = createAsyncThunk("GET_DIARY", async () =>{
    const res = await axios.get(url);
    return res.data
})



let num = 0

const initialState ={
    diary:{
        id:0,
        content:"",
        date:"",
        emotion_id:3,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion${num}.png`,
        emotion_descript:'',
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
                emotion_img: process.env.PUBLIC_URL + `/assets/emotion${num}.png`,
                emotion_descript:'',
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