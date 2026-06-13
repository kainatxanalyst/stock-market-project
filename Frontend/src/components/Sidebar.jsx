import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiActivity,
  FiTrendingUp,
  FiInfo,
  FiPhone,
  FiDatabase,
} from "react-icons/fi";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800";

  const activeClass = "bg-gray-800 text-green-400";

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-4 border-r border-gray-800">
      
      {/* Logo */}
      <h1 className="text-xl font-bold mb-8 text-green-400">
        AI Stock AI
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiHome /> Dashboard
        </NavLink>

        <NavLink
          to="/prediction"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiTrendingUp /> Prediction
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiActivity /> Analytics
        </NavLink>

        <NavLink
          to="/model"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiDatabase /> Model Info
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiInfo /> About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiPhone /> Contact
        </NavLink>

      </nav>
    </div>
  );
}