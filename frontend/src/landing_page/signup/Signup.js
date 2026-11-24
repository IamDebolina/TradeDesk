import React, { useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = "http://localhost:3002";
const DASHBOARD_URL = "http://localhost:3001";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
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
      const res = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // needed so the cookie gets saved
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        window.location.href = DASHBOARD_URL;
      } else {
        setError(data.message);
      }
       } catch (err) {
      console.error(err);
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "420px" }}>
      <h2 className="text-center mb-4">Create your account</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-control"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

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
            minLength={6}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Signup;
