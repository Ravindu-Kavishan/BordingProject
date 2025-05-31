// import React, { useState } from "react";

// export default function InputField({
//   placeholder,
//   value,
//   onChange,
//   icon,
//   type = "text",
//   isPassword = false,
// }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const renderIcon = () => {
//     if (!icon) return null;
//     if (typeof icon === "string") {
//       return <img src={icon} className="w-4 mr-2 self-center" alt="icon" />;
//     } else {
//       return <span className="mr-2 self-center auth-theam-text-color text-sm">{icon}</span>;
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="rounded-4xl auth-inp-bg-color w-11/12 flex items-center px-3 mb-2 py-1 border-2 border-transparent  transition duration-300">
//         {renderIcon()}
//         <input
//           type={isPassword ? (showPassword ? "text" : "password") : type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="bg-transparent outline-none auth-theam-placeholder-color auth-theam-text-color w-full text-sm "
//           style={{
//             outline: "none" /* Remove outline */,
//             boxShadow: "none" /* Remove focus box shadow */,
//           }}

//         />
//         {isPassword && (
//           <img
//             src={
//               showPassword
//                 ? "https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743068059/eye-closed.svg"
//                 : "https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743068241/eye.svg"
//             }
//             className="w-4 ml-2 cursor-pointer auth-theam-text-color"
//             onClick={() => setShowPassword(!showPassword)}
//             alt="Toggle Password"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function InputField({
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  isPassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} className="w-4 mr-2 self-center" alt="icon" />;
    } else {
      return (
        <span className="mr-2 self-center auth-theam-text-color text-sm">
          {icon}
        </span>
      );
    }
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-4xl auth-inp-bg-color w-11/12 flex items-center px-3 mb-2 py-1 border-2 border-transparent  transition duration-300">
        {renderIcon()}
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none auth-theam-placeholder-color auth-theam-text-color w-full text-sm"
          style={{
            outline: "none",
            boxShadow: "none",
          }}
        />
        {isPassword && (
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="w-4 ml-2 cursor-pointer auth-theam-text-color"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
}
