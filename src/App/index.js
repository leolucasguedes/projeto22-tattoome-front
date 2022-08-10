import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../templates/homeScreen";
import Signin from "../templates/SignIn";
import Signup from "../templates/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
