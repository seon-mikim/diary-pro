import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from '../pages/Diary';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import New from '../pages/New';
import Login from '../pages/Login'
import Signup from '../pages/Signup';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router