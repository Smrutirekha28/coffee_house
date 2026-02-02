import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.avif";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        formData,
      );

      alert("Registration Successful");
      navigate("/login");

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg shadow-green-900 ">
        <div className="text-center mb-6" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="logo"
            className="w-20 mx-auto mb-3 rounded-full cursor-pointer"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

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
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
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
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>
        <p className="text-center text-sm mt-3">
          Alredy have account ?{" "}
          <Link className="text-green-900 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
