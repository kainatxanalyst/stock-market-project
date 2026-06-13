import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Prediction from "../pages/Prediction";
import Analytics from "../pages/Analytics";
import ModelInfo from "../pages/ModelInfo";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/model" element={<ModelInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}