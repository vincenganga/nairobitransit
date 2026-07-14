import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Admin.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <main>
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;