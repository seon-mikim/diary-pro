import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from '../pages/Diary';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import New from '../pages/New';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route  path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/sign_in" element={<Signin />} />
      <Route path="/sign_up" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router