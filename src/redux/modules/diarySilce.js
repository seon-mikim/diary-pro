import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const url = "http://13.125.243.242/"

export const __AddDiary = createAsyncThunk("DIARY_LIST", async (payload, thunkAPI) =>{
    try{
    const {data} = await axios.post(`${url}//api/post`, payload,{
        headers: {
            Authorization: localStorage.getItem("token"),
            RefreshToken: localStorage.getItem("RefreshToken")
        }
    });
   console.log(payload)
   return thunkAPI.fulfillWithValue(data);
}catch (error) {
    return thunkAPI.rejectWithValue(error)
}



}
)





export const diarySlice = createSlice({
    name:"diary",
    initialState: {
        diaries:[],
        success:false,
        error:null,
    },
    reducers:{
        removeDiary: (state, action)=> {
            const  index = state.diaries.findIndex(diary =>  diary.id === action.payload);
            state.diaries.splice(index,1);
      axios.delete(`url/${action.payload}`);
        }
    },
    extraReducers: {
        [__AddDiary.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__AddDiary.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.costs = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__AddDiary.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },

    
    })

export const { clearDiary } = diarySlice.actions;
export default diarySlice.reducer