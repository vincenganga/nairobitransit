import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddRoute from "./pages/AddRoute";
import AddStop from "./pages/AddStop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/routes/add" element={<AddRoute />} />
      <Route path="/stops/add" element={<AddStop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;