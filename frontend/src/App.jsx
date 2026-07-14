import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ViewRoutes from "./pages/ViewRoutes";
import AddRoute from "./pages/AddRoute";
import AddStop from "./pages/AddStop";
import NotFound from "./pages/NotFound";
import ViewStops from "./pages/ViewStops";
import EditRoute from "./pages/EditRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/routes" element={<ViewRoutes />} />
      <Route path="/routes/add" element={<AddRoute />} />
      <Route path="/routes/edit/:id" element={<EditRoute />} />

      <Route path="/stops/add" element={<AddStop />} />
      <Route path="/stops" element={<ViewStops />} />

    

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;