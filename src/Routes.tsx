import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from 'views/pages/Home';

export default function RoutePage(){
  return (
    <Routes>
      <Route path="/repos1" element={<Home/>} />
      <Route path="/repos2" element={<Home/>} />
      <Route path="/" element={<Navigate replace to="/repos1" />} />
      {/* <Route path="*" element={} /> */}
    </Routes>
  );
}