import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./auth/Auth";
import Signup from "./pages/signup";
import LoginAuth from "./auth/LoginAuth";
import Zodtrials from "./pages/Zodtrials";
import ReactForm from "./pages/ReactForm";

function App() {
  return (
    <div className="bg-violet-500 w-full h-auto ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/loginAuth" element={<LoginAuth />} />
        <Route path="/zodtrials" element={<Zodtrials />} />
        <Route path="/forms" element={<ReactForm />} />
      </Routes>
    </div>
  );
}

export default App;
