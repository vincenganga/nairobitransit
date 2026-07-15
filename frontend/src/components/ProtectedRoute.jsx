import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to /login (not just /) so the path is explicit
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;