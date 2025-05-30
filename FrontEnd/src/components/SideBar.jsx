// import React, { useState, useEffect } from "react";
// import {
//   FaCompass,
//   FaHome,
//   FaBed,
//   FaFemale,
//   FaMale,
//   FaSignInAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function SideBar() {
//   const items = [
//     { icon: <FaCompass />, label: "All", category: "all" },
//     { icon: <FaHome />, label: "Homes", category: "home_room" },
//     { icon: <FaBed />, label: "Rooms", category: "home_room" },
//     { icon: <FaFemale />, label: "Girls", category: "gender" },
//     { icon: <FaMale />, label: "Boys", category: "gender" },
//     { icon: <FaSignInAlt />, label: "Back Gate", category: "gate" },
//     { icon: <FaSignOutAlt />, label: "Front Gate", category: "gate" },
//   ];
//   const navigate = useNavigate();

//   const [selectedByCategory, setSelectedByCategory] = useState({});

//   const handleSelect = (item) => {
//     if (item.category === "all") {
//       setSelectedByCategory({});
//       navigate("/");
//     } else {
//       setSelectedByCategory((prev) => ({
//         ...prev,
//         [item.category]: item.label,
//       }));
//     }
//   };

//   // 👇 Log whenever selectedByCategory changes
//   useEffect(() => {
//     console.log("Selected Items:", selectedByCategory);
//   }, [selectedByCategory]);

//   return (
//     <div className="w-full h-screen primary-bg shadow-md sticky top-14">
//       <ul className="flex flex-col gap-2 py-4">
//         {items.map((item, index) => {
//           const isSelected = selectedByCategory[item.category] === item.label;

//           return (
//             <React.Fragment key={index}>
//               <li
//                 className={`flex items-center gap-4 px-4 py-2 cursor-pointer rounded-lg transition-all ${
//                   isSelected ? "secondry-bg primary-text" : "hover-color"
//                 }`}
//                 onClick={() => handleSelect(item)}
//               >
//                 <span className="text-lg icon-color">{item.icon}</span>
//                 <span className="text-sm font-medium primary-text">
//                   {item.label}
//                 </span>
//               </li>
//               {index % 2 === 0 && <hr className="mx-4 border-gray-300" />}
//             </React.Fragment>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  FaCompass,
  FaHome,
  FaBed,
  FaFemale,
  FaMale,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterd_places,
  update_filter,
  reset_filter,
} from "../utils/Store/actionCreaters";

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    { icon: <FaCompass />, label: "All", category: "all" },
    { icon: <FaHome />, label: "House", category: "type" },
    { icon: <FaBed />, label: "Room", category: "type" },
    { icon: <FaFemale />, label: "Girls", category: "forWhome" },
    { icon: <FaMale />, label: "Boys", category: "forWhome" },
    { icon: <FaSignInAlt />, label: "Frount Gate", category: "gate" },
    { icon: <FaSignOutAlt />, label: "Back Gate", category: "gate" },
  ];

  const filter = useSelector((state) => state.filter);
  const [selectedByCategory, setSelectedByCategory] = useState(filter);

  const handleSelect = (item) => {
    if (item.category === "all") {
      const resetFilters = { type: "", forWhome: "", gate: "" };
      dispatch(reset_filter());
      setSelectedByCategory(resetFilters);
      dispatch(update_filter(resetFilters));
      navigate("/");
    } else {
      const updatedFilter = {
        ...selectedByCategory,
        [item.category]: item.label,
      };
      setSelectedByCategory(updatedFilter);
      dispatch(update_filter(updatedFilter));
    }
  };

  useEffect(() => {
    dispatch(filterd_places());
  }, [selectedByCategory, dispatch]);

  return (
    <div className="w-full h-screen primary-bg shadow-md sticky top-14">
      <ul className="flex flex-col gap-2 py-4">
        {items.map((item, index) => {
          const isSelected =
            item.category !== "all" &&
            selectedByCategory[item.category] === item.label;

          return (
            <React.Fragment key={index}>
              <li
                className={`flex items-center gap-4 px-4 py-2 cursor-pointer rounded-lg transition-all ${
                  isSelected ? "secondry-bg primary-text" : "hover-color"
                }`}
                onClick={() => handleSelect(item)}
              >
                <span className="text-lg icon-color">{item.icon}</span>
                <span className="text-sm font-medium primary-text">
                  {item.label}
                </span>
              </li>
              {index % 2 === 0 && (
                <hr className="mx-4 border-gray-300 " />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
