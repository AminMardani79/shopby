import React from "react";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </>
  );
};

export default App;
