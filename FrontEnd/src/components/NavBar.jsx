import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { useFavorites } from "../services/FavoriteContext";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { setShowOnlyFavorites, showOnlyFavorites } = useFavorites();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between px-4 py-2 primary-bg shadow-md sticky top-0 z-50">
      {/* Left: Logo + Hamburger */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl icon-color cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-6 hidden md:block"
        />
      </div>

      {/* Middle: Search Bar */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-1 rounded-l-full focus:outline-none secondry-bg primary-text border border-r-0 custom-border placeholder-primary-text"
        />
        <button className="px-4 py-1 secondry-bg rounded-r-full custom-border border-l-0 cursor-pointer">
          <FaSearch className="m-1 primary-text cursor-pointer" />
        </button>
      </div>

      {/* Right: Desktop only */}
      <div className="hidden md:flex items-center gap-4 text-xl">
        <button
          className="p-2 transition duration-300 rounded-full secondry-bg hover:scale-110"
          onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
        >
          <FaHeart className="hart-color cursor-pointer" />
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 transition duration-300 rounded-full secondry-bg hover:scale-110 cursor-pointer"
        >
          {darkMode ? (
            <FaSun className="icon-color" />
          ) : (
            <FaMoon className="icon-color" />
          )}
        </button>

        <button className="flex items-center gap-2 px-4 py-2 custom-border primary-text secondry-bg rounded-full hover-color cursor-pointer">
          <FaUserCircle className="text-xl" />
          <span className="text-sm font-medium">Sign in</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full primary-bg shadow-md py-4 px-6 md:hidden z-40">
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 secondry-bg p-2 rounded-md">
              <FaHeart className="icon-color" />

              <span className="text-sm primary-text">Favorite Places</span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 secondry-bg p-2 rounded-md"
            >
              {darkMode ? (
                <FaSun className="icon-color" />
              ) : (
                <FaMoon className="icon-color" />
              )}
              <span className="text-sm primary-text">Toggle Theme</span>
            </button>

            <button className="flex items-center gap-2 secondry-bg p-2 rounded-md primary-text">
              <FaUserCircle className="text-xl" />
              <span className="text-sm font-medium primary-text">Sign in</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
