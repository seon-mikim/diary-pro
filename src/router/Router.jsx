import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar';
import Diary from '../pages/Diary';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import New from '../pages/New';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';
import Landing from '../pages/Landing';


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router