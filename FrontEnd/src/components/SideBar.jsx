import React from "react";
import {
  FaHome,
  FaFire,
  FaRegCompass,
  FaMusic,
  FaGamepad,
  FaFilm,
  FaTv,
  FaHistory,
} from "react-icons/fa";

export default function SideBar() {
  const items = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaFire />, label: "Trending" },
    { icon: <FaRegCompass />, label: "Explore" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaFilm />, label: "Movies" },
    { icon: <FaTv />, label: "Live" },
    { icon: <FaHistory />, label: "History" },
  ];

  return (
    <div className="w-full h-screen primary-bg shadow-md sticky top-0 overflow-y-auto">
      <ul className="flex flex-col gap-2 py-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:secondry-bg rounded-lg transition-all"
          >
            <span className="text-lg icon-color">{item.icon}</span>
            <span className="text-sm font-medium primary-text">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
