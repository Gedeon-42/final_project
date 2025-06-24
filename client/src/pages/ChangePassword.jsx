// ChangePasswordForm.jsx
import React, { useState } from "react";
import axiosClient from "../axiosClient";


const ChangePasswordForm = () => {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      // Replace with your auth token logic
      const token = localStorage.getItem(" Token");
      await axiosClient.post(
        "supplier/change-password",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Password changed successfully!");
      setForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to change password. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      {message && <div className="mb-2 text-green-600">{message}</div>}
      {error && <div className="mb-2 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Current Password</label>
        <input
          type="password"
          name="current_password"
          value={form.current_password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          name="new_password"
          value={form.new_password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
          minLength={6}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Confirm New Password</label>
        <input
          type="password"
          name="new_password_confirmation"
          value={form.new_password_confirmation}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
          minLength={6}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Changing..." : "Change Password"}
      </button>
    </form>
  );
};

export default ChangePasswordForm;