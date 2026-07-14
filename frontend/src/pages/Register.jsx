import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

function Register() {
  return (
    <AuthLayout>

      <h2>Create Account</h2>
      <p>Register to continue</p>

      <form>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
        />

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

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
        />

        <button type="submit">
          Register
        </button>

      </form>

      <p className="auth-link">
        Already have an account?{" "}
        <Link to="/">Login</Link>
      </p>

    </AuthLayout>
  );
}

export default Register;