import "../styles/Auth.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-left">
          <h1>Nairobi Transit</h1>
          <p>Smart Transit Management System</p>
          <p className="subtitle">
            Helping commuters and administrators manage Nairobi's public transport efficiently.
          </p>
        </div>

        <div className="auth-right">
          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;