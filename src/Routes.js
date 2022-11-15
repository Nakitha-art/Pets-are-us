import React from "react";
import Petsareus from "pages/Petsareus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/petsareus" element={<Petsareus />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
