import React from "react";
import {
  FaCompass,
  FaHome,
  FaBed,
  FaDoorOpen,
  FaFemale,
  FaMale,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function SideBar() {
  const items = [
    { icon: <FaCompass />, label: "All" },
    { icon: <FaHome />, label: "Homes" },
    { icon: <FaBed />, label: "Rooms" },
    { icon: <FaFemale />, label: "Girls" },
    { icon: <FaMale />, label: "Boys" },
    { icon: <FaSignInAlt />, label: "Back Gate" },
    { icon: <FaSignOutAlt />, label: "Frount Gate" },
  ];

  return (
    <div className="w-full h-screen primary-bg shadow-md sticky top-14">
      <ul className="flex flex-col gap-2 py-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 px-4 py-2 cursor-pointer  rounded-lg transition-all"
          >
            <span className="text-lg icon-color">{item.icon}</span>
            <span className="text-sm font-medium primary-text">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
