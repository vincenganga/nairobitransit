import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import "../styles/ViewRoutes.css";

function ViewRoutes() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRoutes();
  }, []);

  // Fetch all routes
  const fetchRoutes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/routes");
      const data = await response.json();

      setRoutes(data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading routes:", error);
      setLoading(false);
    }
  };

  // Delete a route
  const deleteRoute = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this route?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/routes/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to delete route.");
        return;
      }

      alert(data.message);

      // Refresh the routes list
      fetchRoutes();

    } catch (error) {
      console.error("Error deleting route:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <AdminLayout>
      <div className="table-container">
        <h1>All Routes</h1>

        {loading ? (
          <p>Loading routes...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Route</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Operating Hours</th>
                <th>Verified</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>{route.id}</td>
                  <td>{route.name}</td>
                  <td>{route.origin}</td>
                  <td>{route.destination}</td>
                  <td>{route.operating_hours}</td>
                  <td>{route.verified ? "✅" : "❌"}</td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => navigate(`/routes/edit/${route.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteRoute(route.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}
      </div>
    </AdminLayout>
  );
}

export default ViewRoutes;