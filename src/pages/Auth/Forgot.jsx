import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email harus diisi!");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    // Simulasi kirim reset link (bisa dihubungkan ke API nanti)
    setTimeout(() => {
      setMessage(`Link reset password telah dikirim ke ${email}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        Forgot Your Password?
      </h2>
      
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {error && (
        <div className="bg-red-200 mb-5 p-3 text-sm text-red-700 rounded">
          {error}
        </div>
      )}

      {message && (
        <div className="bg-green-200 mb-5 p-3 text-sm text-green-700 rounded">
          {message}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-hijau hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          {loading ? "Mengirim..." : "Send Reset Link"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        <a href="/login" className="text-hijau hover:underline">Kembali ke Login</a>
      </div>
    </div>
  );
}