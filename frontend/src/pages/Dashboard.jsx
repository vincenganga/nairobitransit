import {
  Route,
  MapPinned,
  WalletCards,
  CheckCircle,
  Plus,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

function Dashboard() {
  const username = localStorage.getItem("username") || "Administrator";

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back, {username}. Here's an overview of the Nairobi
            Transit Management System.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Routes */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 uppercase text-xs font-bold">
                  Total Routes
                </p>

                <h2 className="text-4xl font-bold text-emerald-700 mt-3">
                  7
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Active transport routes
                </p>
              </div>

              <div className="bg-emerald-100 p-3 rounded-xl">
                <Route size={26} className="text-emerald-700" />
              </div>
            </div>
          </div>

          {/* Stops */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 uppercase text-xs font-bold">
                  Total Stops
                </p>

                <h2 className="text-4xl font-bold text-blue-700 mt-3">
                  35
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Registered bus stops
                </p>
              </div>

              <div className="bg-blue-100 p-3 rounded-xl">
                <MapPinned size={26} className="text-blue-700" />
              </div>
            </div>
          </div>

          {/* Fares */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 uppercase text-xs font-bold">
                  Fare Records
                </p>

                <h2 className="text-4xl font-bold text-purple-700 mt-3">
                  7
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Route fare information
                </p>
              </div>

              <div className="bg-purple-100 p-3 rounded-xl">
                <WalletCards size={26} className="text-purple-700" />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 uppercase text-xs font-bold">
                  System Status
                </p>

                <h2 className="text-2xl font-bold text-green-700 mt-4">
                  Operational
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  All core services available
                </p>
              </div>

              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle size={26} className="text-green-700" />
              </div>
            </div>
          </div>

        </div>

        {/* System Overview */}
        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            System Overview
          </h2>

          <p className="text-gray-500 mt-2">
            Manage Nairobi public transport information from one central
            administration portal.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <Link
              to="/routes/add"
              className="border rounded-xl p-6 hover:bg-emerald-50 hover:border-emerald-500 transition"
            >
              <Plus className="text-emerald-700 mb-4" />

              <h3 className="font-semibold text-lg">
                Add Route
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Register a new public transport route.
              </p>
            </Link>

            <Link
              to="/stops/add"
              className="border rounded-xl p-6 hover:bg-blue-50 hover:border-blue-500 transition"
            >
              <Plus className="text-blue-700 mb-4" />

              <h3 className="font-semibold text-lg">
                Add Stop
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Add a stop and its geographic coordinates.
              </p>
            </Link>

            <Link
              to="/routes"
              className="border rounded-xl p-6 hover:bg-purple-50 hover:border-purple-500 transition"
            >
              <ArrowRight className="text-purple-700 mb-4" />

              <h3 className="font-semibold text-lg">
                View Routes
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                View and manage registered routes.
              </p>
            </Link>

          </div>
        </div>

        {/* Demo Data */}
        <div className="bg-gradient-to-r from-emerald-700 to-green-600 rounded-2xl p-8 text-white shadow-lg">

          <h2 className="text-2xl font-bold">
            Nairobi Transit Network
          </h2>

          <p className="mt-2 text-emerald-50">
            The system currently contains demonstration transport data
            covering routes, stops and fare information across Nairobi.
          </p>

          <div className="flex flex-wrap gap-8 mt-6">

            <div>
              <p className="text-3xl font-bold">7</p>
              <p className="text-sm text-emerald-100">Routes</p>
            </div>

            <div>
              <p className="text-3xl font-bold">35</p>
              <p className="text-sm text-emerald-100">Stops</p>
            </div>

            <div>
              <p className="text-3xl font-bold">7</p>
              <p className="text-sm text-emerald-100">Fare Records</p>
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Dashboard;