import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import ErrorAlert from "../components/ErrorAllert";
import SuccessMSG from "../components/SuccessMSG";
import Button from "../components/Button";
import authService from "../services/authService";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SubmitOTP() {
  const [formData, setFormData] = useState({
    OTP: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const dark = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSubmit = async () => {
    const { OTP } = formData;

    if (!OTP) {
      setErrorMsg("Please fill the field.");
      return;
    }

    const result = await authService.compareOTP({ OTP });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg(result.data.message);
      setFormData({ OTP: "" });
      navigate("/ChangePasword");
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center auth-bg">
    <div className="min-h-screen flex items-start md:items-center justify-center auth-bg pt-10 md:-mt-10">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl  auth-secondry-bg">
        <h2 className="text-center text-2xl font-extrabold mb-6 auth-theam-text-color">
          Submit OTP
        </h2>

        {errorMsg && <ErrorAlert message={errorMsg} />}
        {successMsg && <SuccessMSG message={successMsg} />}

        <InputField
          placeholder="OTP"
          value={formData.OTP}
          onChange={(e) => setFormData({ ...formData, OTP: e.target.value })}
          name="OTP"
          type="OTP"
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
          onClick={() => navigate("/ForgotPassword")}
        />
      </div>
    </div>
  );
}
