import React, { useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = "http://localhost:3002";
const DASHBOARD_URL = "http://localhost:3001";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        window.location.href = DASHBOARD_URL;
      } else {
        setError(data.message);
      }
    } catch {
      setError("Cannot reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "420px" }}>
      <h2 className="text-center mb-4">Log in</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="text-center mt-3">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;