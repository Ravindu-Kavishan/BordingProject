import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import ErrorAlert from "../components/ErrorAllert";
import SuccessMSG from "../components/SuccessMSG";
import Button from "../components/Button";
import authService from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { owner_logedin } from "../utils/Store/actionCreaters";

export default function LogIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
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
    const { email, password } = formData;

    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const result = await authService.loginUser({
      email,
      password,
    });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg("Login successfully!");
      setFormData({
        email: "",
        password: "",
      });
      dispatch(owner_logedin(email));
      navigate("/MyBordings");
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center auth-bg ">
    <div className="min-h-screen flex items-start md:items-center justify-center auth-bg pt-10 md:-mt-10">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl  auth-secondry-bg">
        <h2 className="text-center text-2xl font-extrabold mb-6 auth-theam-text-color">
          Log In
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

        <Button
          text="LogIn"
          color="auth-button"
          tcolor="auth-button-text"
          onClick={handleSubmit}
        />
        <Button
          text="Forgot Password"
          color="auth-button-secondry"
          tcolor="auth-button-secondry-text"
          onClick={() => navigate("/ForgotPassword")}
        />
        <Button
          text="<-Back"
          color="auth-button-secondry"
          tcolor="auth-button-secondry-text"
          onClick={() => navigate("/Register")}
        />
      </div>
    </div>

    // <div className="min-h-screen flex items-start md:items-center justify-center auth-bg pt-10 md:-mt-10">
    //   <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl auth-secondry-bg">
    //     <h2 className="text-center text-2xl font-extrabold mb-6 auth-theam-text-color">
    //       Log In
    //     </h2>

    //     {errorMsg && <ErrorAlert message={errorMsg} />}
    //     {successMsg && <SuccessMSG message={successMsg} />}

    //     <InputField
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //       name="email"
    //       type="email"
    //       icon={<FontAwesomeIcon icon={faEnvelope} />}
    //     />

    //     <InputField
    //       placeholder="Password"
    //       value={formData.password}
    //       onChange={(e) =>
    //         setFormData({ ...formData, password: e.target.value })
    //       }
    //       name="password"
    //       isPassword={true}
    //       icon={<FontAwesomeIcon icon={faLock} />}
    //     />

    //     <div className="space-y-3 mt-4">
    //       <Button
    //         text="LogIn"
    //         color="auth-button"
    //         tcolor="auth-button-text"
    //         onClick={handleSubmit}
    //       />
    //       <Button
    //         text="Forgot Password"
    //         color="auth-button-secondry"
    //         tcolor="auth-button-secondry-text"
    //         onClick={() => navigate("/ForgotPassword")}
    //       />
    //       <Button
    //         text="<-Back"
    //         color="auth-button-secondry"
    //         tcolor="auth-button-secondry-text"
    //         onClick={() => navigate("/Register")}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
