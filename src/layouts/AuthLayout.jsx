import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-poppins font-extrabold text-gray-800">
            Klinik<span className="text-hijau">.</span>
          </h1>
        </div>
        <div className="text-center mb-4">
          <p className="text-xs text-gray-400">Gigi Permata</p>
        </div>

        <Outlet />

        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 Klinik Gigi Permata. All rights reserved.
        </p>
      </div>
    </div>
  );
}