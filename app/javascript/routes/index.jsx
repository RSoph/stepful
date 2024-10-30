import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Coach from "../components/Coach";

export default (
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coach/:id" element={<Coach />} />
    </Routes>
  </Router>
);