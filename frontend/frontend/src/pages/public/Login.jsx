import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.avif";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        formData,
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");
      if (response.data.role == "admin") {
        navigate("/dashboard");
      } else {
        navigate("/menue");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg  shadow-green-900">
        {/* Logo + Title */}
        <div className="text-center mb-6" onClick={()=>navigate("/")} >
          <img
            src={logo}
            alt="logo"
            className="w-20 mx-auto mb-3 rounded-full cursor-pointer"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-lg hover:bg-yellow-300 transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm mt-3">
          Don't have account ?{" "}
          <Link className="text-green-900 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
