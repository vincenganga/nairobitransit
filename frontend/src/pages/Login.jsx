import AuthLayout from "../layouts/AuthLayout";
import "../styles/auth.css";

function Login() {
  return (
    <AuthLayout>
      <div className="login-page">

        <div className="login-left">
          <h1>Nairobi Transit</h1>
          <p>Smart Transit Management System</p>
        </div>

        <div className="login-right">

          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>

          <form>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p>
            Don't have an account?
            <a href="/register"> Register</a>
          </p>

        </div>

      </div>
    </AuthLayout>
  );
}

export default Login;