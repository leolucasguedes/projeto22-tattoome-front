import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import userContext from "../contexts/userContext";

import Home from "../templates/Home";
import Signin from "../templates/SignIn";
import Signup from "../templates/SignUp";
import Schedule from "../templates/Schedule";
import Gallery from "../templates/Gallery";
import About from "../templates/About";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
