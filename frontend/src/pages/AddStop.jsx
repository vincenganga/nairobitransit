import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import "../styles/AddStop.css";

function AddStop() {
  const [stop, setStop] = useState({
    routeId: "",
    name: "",
    latitude: "",
    longitude: "",
    sequence: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStop({
      ...stop,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stopData = {
      route_id: Number(stop.routeId),
      name: stop.name,
      latitude: parseFloat(stop.latitude),
      longitude: parseFloat(stop.longitude),
      sequence: Number(stop.sequence),
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/stops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stopData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Stop added successfully!");

        setStop({
          routeId: "",
          name: "",
          latitude: "",
          longitude: "",
          sequence: "",
        });

      } else {
        alert(data.error || "Failed to add stop");
      }

    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend.");
    }
  };

  return (
    <AdminLayout>
      <div className="form-container">
        <h1>Add Stop</h1>

        <form onSubmit={handleSubmit} className="route-form">

          <label>Route ID</label>
          <input
            type="number"
            name="routeId"
            value={stop.routeId}
            onChange={handleChange}
            required
          />

          <label>Stop Name</label>
          <input
            type="text"
            name="name"
            value={stop.name}
            onChange={handleChange}
            required
          />

          <label>Latitude</label>
          <input
            type="number"
            step="any"
            name="latitude"
            value={stop.latitude}
            onChange={handleChange}
            required
          />

          <label>Longitude</label>
          <input
            type="number"
            step="any"
            name="longitude"
            value={stop.longitude}
            onChange={handleChange}
            required
          />

          <label>Sequence</label>
          <input
            type="number"
            name="sequence"
            value={stop.sequence}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Add Stop
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}

export default AddStop;