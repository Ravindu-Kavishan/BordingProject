// components/NavBar.jsx
import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showOnlyFavorites,
  toggleDarkMode,
} from "../utils/Store/actionCreaters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFav = useSelector((state) => state.showOnlyFavorites);
  const dark = useSelector((state) => state.darkMode);
  const owner = useSelector((state) => state.owneremail);

  // Sync <html> class with dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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

        <div className="flex items-center space-x-3 ">
          <FontAwesomeIcon icon={faHouseChimney} className="text-teal-700 text-4xl" />
          <div className="text-left">
            <h1 className="text-xl font-serif font-bold text-teal-800 leading-tight">
              MORATUWA
            </h1>
            <h2 className="text-lg font-serif font-semibold text-teal-700">
              BORDINGS
            </h2>
          </div>
        </div>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-1 rounded-l-full secondry-bg primary-text border border-r-0 custom-border placeholder-primary-text focus:outline-none"
        />
        <button className="px-4 py-1 secondry-bg rounded-r-full custom-border border-l-0">
          <FaSearch className="m-1 primary-text" />
        </button>
      </div>

      {/* Right: Desktop only */}
      <div className="hidden md:flex items-center gap-4 text-xl">
        <button
          className="p-2 transition duration-300 rounded-full secondry-bg hover:scale-110 cursor-pointer"
          onClick={() => dispatch(showOnlyFavorites())}
        >
          {isFav ? (
            <FaHeart className="hart-color" />
          ) : (
            <FaRegHeart className="primary-text" />
          )}
        </button>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 transition duration-300 rounded-full secondry-bg hover:scale-110 cursor-pointer"
        >
          {dark ? (
            <FaSun className="icon-color" />
          ) : (
            <FaMoon className="icon-color" />
          )}
        </button>

        {owner === false ? (
          <button
            onClick={() => navigate("/Register")}
            className="flex items-center gap-2 px-4 py-2 custom-border primary-text secondry-bg rounded-full hover-color cursor-pointer"
          >
            <FaUserCircle className="text-xl" />
            <span className="text-sm font-medium">Sign in</span>
          </button>
        ) : (
          <div
            className="w-10 h-10 rounded-full secondry-bg primary-text flex items-center justify-center font-bold text-sm cursor-pointer"
            onClick={() => navigate("/MyBordings")}
          >
            {owner.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full primary-bg shadow-md py-4 px-6 md:hidden z-40">
          <div className="flex flex-col gap-4">
            <button
              className="flex items-center gap-2 secondry-bg p-2 rounded-md"
              onClick={() => {
                dispatch(showOnlyFavorites());
                setMenuOpen(false);
              }}
            >
              {isFav ? (
                <FaHeart className="icon-color" />
              ) : (
                <FaRegHeart className="icon-color" />
              )}
              <span className="text-sm primary-text">Favorite Places</span>
            </button>

            <button
              onClick={() => {
                dispatch(toggleDarkMode());
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 secondry-bg p-2 rounded-md"
            >
              {dark ? (
                <FaSun className="icon-color" />
              ) : (
                <FaMoon className="icon-color" />
              )}
              <span className="text-sm primary-text">Toggle Theme</span>
            </button>

            {owner === false ? (
              <button
                onClick={() => {
                  navigate("/Register");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 secondry-bg p-2 rounded-md primary-text"
              >
                <FaUserCircle className="text-xl" />
                <span className="text-sm font-medium">Sign in</span>
              </button>
            ) : (
              <div
                className="flex items-center gap-2 secondry-bg p-2 rounded-md"
                onClick={() => navigate("/MyBordings")}
              >
                {owner}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
