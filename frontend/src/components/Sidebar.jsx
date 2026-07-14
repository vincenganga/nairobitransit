import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Nairobi Transit</h2>

      <nav>
        <NavLink to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink to="/routes">
          🛣 View Routes
        </NavLink>

        <NavLink to="/routes/add">
          🚌 Add Route
        </NavLink>

        <NavLink to="/stops/add">
          📍 Add Stop
        </NavLink>

        <NavLink to="/stops">
  🚏 View Stops
</NavLink>

        {/* We'll create this page next */}
        {/* <NavLink to="/stops">
          🚏 View Stops
        </NavLink> */}

        <NavLink to="/login">
          🚪 Logout
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;