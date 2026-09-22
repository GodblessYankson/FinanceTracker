import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./auth/Auth";
import Signup from "./pages/Signup";
import LoginAuth from "./auth/LoginAuth";
import Zodtrials from "./pages/Zodtrials";
import Dashboard from "./pages/Dashboard"
import UserDashboard from "./pages/User/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";


function App() {
  return (
    <div className="bg-violet-500 w-full h-auto ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/loginAuth" element={<LoginAuth />} />
        <Route path="/zodtrials" element={<Zodtrials />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* User routes */}
        <Route path="userdashboard" element={<UserDashboard />} />  

        {/* Admin routes */}
        <Route path="admindashboard" element={<AdminDashboard />}  />    
      </Routes>
    </div>
  );
}

export default App;
