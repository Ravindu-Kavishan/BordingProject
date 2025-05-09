import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import Register from "./pages/Register";
function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ThePlace/:id" element={<PlaceDetails/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default App;
