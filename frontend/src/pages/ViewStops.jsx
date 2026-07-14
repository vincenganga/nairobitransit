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

  return (
    <AdminLayout>
      <div className="table-container">
        <h1>All Stops</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Route ID</th>
                <th>Stop</th>
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
                      onClick={() =>
                        navigate(`/stops/edit/${stop.id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
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