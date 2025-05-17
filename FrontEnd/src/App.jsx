import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitOTP from "./pages/SubmitOTP";
import ChangePasword from "./pages/ChangePasword";
function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ThePlace/:id" element={<PlaceDetails/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/LogIn" element={<LogIn/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/SubmitOTP" element={<SubmitOTP/>} />
          <Route path="/ChangePasword" element={<ChangePasword/>} />
        </Routes>
    </Router>
  );
}

export default App;
