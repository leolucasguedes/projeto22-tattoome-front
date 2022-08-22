import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import userContext from "../contexts/userContext";
import budgetContext from "../contexts/budgetContext";
import Home from "../templates/Home";
import Signin from "../templates/SignIn";
import Signup from "../templates/SignUp";
import Schedule from "../templates/Schedule";
import Gallery from "../templates/Gallery";
import About from "../templates/About";
import Historic from "../templates/Historic";

function App() {
  const [userData, setUserData] = useState({});
  const [userBudget, setUserBudget] = useState({});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      <budgetContext.Provider value={{ userBudget, setUserBudget }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/budget/user/:id" element={<Historic />} />
        </Routes>
      </BrowserRouter>
      </budgetContext.Provider>
    </userContext.Provider>
  );
}

export default App;
