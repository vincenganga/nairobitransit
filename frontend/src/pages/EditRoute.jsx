import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import "../styles/AddRoute.css";

function EditRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [route, setRoute] = useState({
    name: "",
    origin: "",
    destination: "",
    operatingHours: "",
    verified: false,
  });

  useEffect(() => {
    fetchRoute();
  }, []);

  const fetchRoute = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/routes/${id}`
      );

      const data = await response.json();

      setRoute({
        name: data.name,
        origin: data.origin,
        destination: data.destination,
        operatingHours: data.operating_hours,
        verified: data.verified,
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRoute({
      ...route,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/routes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: route.name,
            origin: route.origin,
            destination: route.destination,
            operating_hours: route.operatingHours,
            verified: route.verified,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      navigate("/routes");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div className="form-container">
        <h1>Edit Route</h1>

        <form onSubmit={handleSubmit} className="route-form">

          <label>Route Name</label>
          <input
            type="text"
            name="name"
            value={route.name}
            onChange={handleChange}
            required
          />

          <label>Origin</label>
          <input
            type="text"
            name="origin"
            value={route.origin}
            onChange={handleChange}
            required
          />

          <label>Destination</label>
          <input
            type="text"
            name="destination"
            value={route.destination}
            onChange={handleChange}
            required
          />

          <label>Operating Hours</label>
          <input
            type="text"
            name="operatingHours"
            value={route.operatingHours}
            onChange={handleChange}
          />

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="verified"
              name="verified"
              checked={route.verified}
              onChange={handleChange}
            />

            <label htmlFor="verified">
              Verified Route
            </label>
          </div>

          <button type="submit">
            Update Route
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}

export default EditRoute;