import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import ErrorAlert from "../components/ErrorAllert";
import SuccessMSG from "../components/SuccessMSG";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import authService from "../services/authService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const dark = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSubmit = async () => {
    const { email } = formData;

    if (!email) {
      setErrorMsg("Please fill the field.");
      return;
    }

    console.log("LogIn Data:", {
      email,
    });

    const result = await authService.sendOTP({
      email,
    });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg("OTP sent successfully!");
      setFormData({
        email: "",
      });
      navigate("/SubmitOTP");
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center auth-bg">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl  auth-secondry-bg">
        <h2 className="text-center text-2xl font-extrabold mb-6 auth-theam-text-color">
          Forgot Password
        </h2>

        {errorMsg && <ErrorAlert message={errorMsg} />}
        {successMsg && <SuccessMSG message={successMsg} />}

        <InputField
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email"
          type="email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
        />

        <Button
          text="Send OTP"
          color="auth-button"
          tcolor="auth-button-text"
          onClick={handleSubmit}
        />
        <Button
          text="<-Back"
          color="auth-button-secondry"
          tcolor="auth-button-secondry-text"
          onClick={() => navigate("/LogIn")}
        />
      </div>
    </div>
  );
}
