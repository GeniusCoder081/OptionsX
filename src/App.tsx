import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import Listing from "./pages/Listing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
