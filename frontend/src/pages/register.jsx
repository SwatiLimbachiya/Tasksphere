import { Link } from "react-router-dom";
import "../styles/login.css";

function Register() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Create Account</h1>

        <p className="subtitle">
          Register for TaskSphere
        </p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Register
          </button>
        </form>

        <p className="register-link">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;