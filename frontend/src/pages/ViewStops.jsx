import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import "../styles/ViewRoutes.css";

function ViewStops() {
  const [stops, setStops] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStops();
  }, []);

  const fetchStops = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/stops");
      const data = await response.json();
      setStops(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteStop = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this stop?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/stops/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to delete stop.");
        return;
      }

      alert(data.message);
      fetchStops(); // refresh the list
    } catch (error) {
      console.error("Error deleting stop:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <AdminLayout>
      <div className="table-container">
        <h1>All Stops</h1>
        {loading ? (
          <p>Loading...</p>
        ) : stops.length === 0 ? (
          <p>No stops found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Route ID</th>
                <th>Stop Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Sequence</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stops.map((stop) => (
                <tr key={stop.id}>
                  <td>{stop.id}</td>
                  <td>{stop.route_id}</td>
                  <td>{stop.name}</td>
                  <td>{stop.latitude}</td>
                  <td>{stop.longitude}</td>
                  <td>{stop.sequence}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => navigate(`/stops/edit/${stop.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteStop(stop.id)}
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

export default ViewStops;
