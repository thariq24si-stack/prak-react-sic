import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan Confirm Password tidak cocok!");
      return;
    }

    setLoading(true);
    setError("");
    
    // Simulasi registrasi (bisa dihubungkan ke API nanti)
    setTimeout(() => {
      alert(`Registrasi berhasil! Silakan login dengan email: ${formData.email}`);
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Your Account ✨
      </h2>

      {error && (
        <div className="bg-red-200 mb-5 p-3 text-sm text-red-700 rounded">
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-gray-200 mb-5 p-3 text-sm rounded text-center">
          Memproses registrasi...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-hijau hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          {loading ? "Memproses..." : "Register"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        <span className="text-gray-500">Sudah punya akun? </span>
        <a href="/login" className="text-hijau hover:underline">Login</a>
      </div>
    </div>
  );
}