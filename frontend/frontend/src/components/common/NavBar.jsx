import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import logo from "../../assets/logo.avif";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "text-yellow-300 hover:text-yellow-400 transition";

  const mobileNavStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-yellow-300";

  return (
    <nav className="bg-green-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="rounded-full w-14 border-2 border-yellow-400"
            src={logo}
            alt="Coffee Logo"
          />
          <span className="text-yellow-400 font-bold text-xl">
            Coffee House
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <NavLink to="/" end className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={navLinkStyle}>
              Menu
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 rounded-lg bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-300 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-yellow-400">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-6 pb-4">
          <ul className="space-y-4 font-medium">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={mobileNavStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={mobileNavStyle}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                onClick={() => setIsOpen(false)}
                className={mobileNavStyle}
              >
                Menu
              </NavLink>
            </li>
          </ul>

          <div className="mt-4 space-y-3">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 transition">
                Login
              </button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 rounded-lg bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-300 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
