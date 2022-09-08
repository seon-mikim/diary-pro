import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";


const LoginDB = (id, password) => {
  const [ueser, setUser] = useState('')
  const [setCookie] = useState('')
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.125.243.242/user/api/member/login",
      data: {
        email: id,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        const accessToken = res.data.token;
        //쿠키에 토큰 저장
        setCookie("is_login", `${accessToken}`);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//회원가입 API
const SignUpDB = (id, password, name) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.125.243.242/api/member/signup ",
      data: {
        email: id,
        name:name,
        password: password,
        
      },
    })
      .then((res) => {
        window.alert(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};







const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});


// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
