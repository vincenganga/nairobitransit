import AdminLayout from "../layouts/AdminLayout";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>
      <p>Welcome back, Admin 👋</p>

      <div className="stats">

        <div className="card">
          <h2>120</h2>
          <p>Total Routes</p>
        </div>

        <div className="card">
          <h2>850</h2>
          <p>Total Stops</p>
        </div>

        <div className="card">
          <h2>18</h2>
          <p>Pending Suggestions</p>
        </div>

      </div>

      <div className="recent">
        <h2>Recent Activity</h2>

        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>User</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Added Route 46</td>
              <td>Admin</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>Added Stop</td>
              <td>Admin</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>Approved Suggestion</td>
              <td>Admin</td>
              <td>Yesterday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;