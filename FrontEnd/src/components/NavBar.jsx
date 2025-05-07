import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between px-4 py-2 primary-bg shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-6"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-1 rounded-l-full focus:outline-none secondry-bg primary-text border border-r-0 custom-border placeholder-primary-text"
        />
        <button className="px-4 py-1 secondry-bg rounded-r-full custom-border border-l-0">
          <FaSearch className="m-1 primary-text" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 text-xl">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 transition duration-300 rounded-full secondry-bg hover:scale-110"
        >
          {darkMode ? (
            <FaSun className="icon-color" />
          ) : (
            <FaMoon className="icon-color" />
          )}
        </button>

        {/* Sign In */}
        <button className="flex items-center gap-2 px-4 py-1 custom-border primary-text rounded-full hover:secondry-bg">
          <FaUserCircle className="text-xl" />
          <span className="text-sm font-medium">Sign in</span>
        </button>
      </div>
    </div>
  );
}
