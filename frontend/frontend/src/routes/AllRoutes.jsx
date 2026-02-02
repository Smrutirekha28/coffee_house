import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Menue from "../pages/public/Menue";
import Register from "../pages/public/Register";
import Login from "../pages/public/Login";
import Profile from "../pages/user/Profile";
import Dashboard from "../pages/admin/Dashboard";
import NotFound from "../pages/public/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menue />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
