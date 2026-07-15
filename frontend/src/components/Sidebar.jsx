import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">Nairobi Transit</h2>
      <nav>
        <NavLink to="/dashboard">📊 Dashboard</NavLink>
        <NavLink to="/routes">🛣 View Routes</NavLink>
        <NavLink to="/routes/add">🚌 Add Route</NavLink>
        <NavLink to="/stops">🚏 View Stops</NavLink>
        <NavLink to="/stops/add">📍 Add Stop</NavLink>
        <NavLink to="/passenger">🗺 Passenger Map</NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
