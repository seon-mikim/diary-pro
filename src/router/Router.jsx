import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from '../pages/Diary';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import New from '../pages/New';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router