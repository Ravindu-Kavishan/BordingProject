import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserPlaceDetails from "./pages/UserPlaceDetails";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitOTP from "./pages/SubmitOTP";
import ChangePasword from "./pages/ChangePasword";
import MyBordings from "./pages/MyBordings";
import AddBordingPlace from "./pages/AddBordingPlace";
import PlaceDetails from "./pages/PlaceDetails";


import ImageUploader from "./components/ImageUploarder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ThePlace/:id" element={<UserPlaceDetails />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SubmitOTP" element={<SubmitOTP />} />
        <Route path="/ChangePasword" element={<ChangePasword />} />
        <Route path="/MyBordings" element={<MyBordings />} />
        <Route path="/AddBordingPlace" element={<AddBordingPlace />} />
        <Route path="/OwnerPlace/:id" element={<PlaceDetails />} />
        <Route path="/ImageUploader" element={<ImageUploader />} />
      </Routes>
    </Router>
  );
}

export default App;
