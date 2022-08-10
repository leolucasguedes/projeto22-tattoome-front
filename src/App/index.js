import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../templates/Home";
import Signin from "../templates/SignIn";
import Signup from "../templates/SignUp";
import Gallery from "../templates/Gallery";
import About from "../templates/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
