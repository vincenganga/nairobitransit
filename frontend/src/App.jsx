import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ViewRoutes from "./pages/ViewRoutes";
import AddRoute from "./pages/AddRoute";
import AddStop from "./pages/AddStop";
import ViewStops from "./pages/ViewStops";
import EditRoute from "./pages/EditRoute";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/routes"
        element={
          <ProtectedRoute>
            <ViewRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/routes/add"
        element={
          <ProtectedRoute>
            <AddRoute />
          </ProtectedRoute>
        }
      />

      <Route
        path="/routes/edit/:id"
        element={
          <ProtectedRoute>
            <EditRoute />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stops"
        element={
          <ProtectedRoute>
            <ViewStops />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stops/add"
        element={
          <ProtectedRoute>
            <AddStop />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;