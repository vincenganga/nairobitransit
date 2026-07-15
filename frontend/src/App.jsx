import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddRoute from "./pages/AddRoute";
import AddStop from "./pages/AddStop";
import NotFound from "./pages/NotFound";
import RoutesPage from "./pages/RoutesPage";
import ViewRoutes from "./pages/ViewRoutes";
import ViewStops from "./pages/ViewStops";
import EditRoute from "./pages/EditRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public routes — no login required */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Passenger-facing map view — public */}
      <Route path="/passenger" element={<RoutesPage />} />

      {/* Protected admin routes — redirect to /login if no token */}
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

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
