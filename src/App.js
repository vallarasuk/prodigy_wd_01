import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FAQs from "./Components/FAQs";
import Internship from "./Components/Internship";
import Verify from "./Components/Verify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
