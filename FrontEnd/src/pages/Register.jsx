import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import ErrorAlert from "../components/ErrorAllert";
import SuccessMSG from "../components/SuccessMSG";
import Button from "../components/Button";
import authService from "../services/authService";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const dark = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSubmit = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    const {
      name,
      email,
      contactNumber,
      whatsappNumber,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !contactNumber ||
      !whatsappNumber ||
      !password ||
      !confirmPassword
    ) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    const result = await authService.registerUser({
      name,
      email,
      contactNumber,
      whatsappNumber,
      password,
    });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg("Registered successfully!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        whatsappNumber: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/MyBordings");
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center auth-bg">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl auth-secondry-bg">
        <h2 className="text-center text-2xl font-extrabold mb-6 auth-theam-text-color">
          Register
        </h2>

        {errorMsg && <ErrorAlert message={errorMsg} />}
        {successMsg && <SuccessMSG message={successMsg} />}

        <InputField
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          name="name"
          icon={<FontAwesomeIcon icon={faUser} />}
        />

        <InputField
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email"
          type="email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
        />

        <InputField
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={(e) =>
            setFormData({ ...formData, contactNumber: e.target.value })
          }
          name="contactNumber"
          type="tel"
          icon={<FontAwesomeIcon icon={faPhone} />}
        />

        <InputField
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={(e) =>
            setFormData({ ...formData, whatsappNumber: e.target.value })
          }
          name="whatsappNumber"
          type="tel"
          icon={<FontAwesomeIcon icon={faCommentDots} />}
        />

        <InputField
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          name="password"
          isPassword={true}
          icon={<FontAwesomeIcon icon={faLock} />}
        />

        <InputField
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          name="confirmPassword"
          isPassword={true}
          icon={<FontAwesomeIcon icon={faLock} />}
        />

        <Button
          text="Register"
          color="auth-button"
          tcolor="auth-button-text"
          onClick={handleSubmit}
        />
        <Button
          text="LogIn"
          color="auth-button-secondry"
          tcolor="auth-button-secondry-text"
          onClick={() => navigate("/Login")}
        />
        <Button
          text="<-Back"
          color="auth-button-secondry"
          tcolor="auth-button-secondry-text"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
