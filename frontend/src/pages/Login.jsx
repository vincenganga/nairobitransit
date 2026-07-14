import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

function Login() {
  return (
    <AuthLayout>

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

      <p className="auth-link">
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>

    </AuthLayout>
  );
}

export default Login;