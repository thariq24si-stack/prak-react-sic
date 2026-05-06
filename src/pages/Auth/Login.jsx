import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.email || !dataForm.password) {
      setError("Username and password required");
      return;
    }

    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/auth/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Invalid credentials");
        } else {
          setError("Terjadi kesalahan");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-hijau hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Link ke Register dan Forgot */}
      <div className="mt-4 text-center text-sm">
        <a href="/register" className="text-hijau hover:underline">Daftar Baru</a>
        <span className="mx-2">|</span>
        <a href="/forgot" className="text-hijau hover:underline">Lupa Password?</a>
      </div>

      {/* Demo credentials */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Demo: username: emilys | password: emilyspass
      </p>
    </div>
  );
}