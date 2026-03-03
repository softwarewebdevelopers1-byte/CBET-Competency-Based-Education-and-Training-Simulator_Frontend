// src/components/auth/LoginRoute.jsx

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../css/login.module.css";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

export function LoginRoute() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate login - replace with actual API call
    setTimeout(() => {
      if (formData.email === "demo@cbet.edu" && formData.password === "password") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>CBET Simulator</h1>
          <p>Sign in to your account</p>
        </div>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputWrapper}>
              <FiMail className={styles.icon} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <FiLock className={styles.icon} />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                disabled={loading}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={styles.button}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <FiLogIn />}
          </button>
        </form>

        <div className={styles.links}>
          <Link to="/signup">Create an account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className={styles.demo}>
          <p>Welcome Back</p>
        </div>
      </div>
    </div>
  );
}