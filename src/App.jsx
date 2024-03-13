import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./Compontents/Header";
import Project from "./pages/Project";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
