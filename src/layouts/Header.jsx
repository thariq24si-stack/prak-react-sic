import { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="header-container" className="flex justify-between items-center p-4 bg-white shadow-sm">

      {/* Search - Border hover diubah ke Biru */}
      <div id="search-bar" className="relative w-full max-w-lg cursor-pointer">
        <input
          onClick={() => setIsModalOpen(true)}
          readOnly
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-gray-100 p-2 pr-10 bg-white w-full rounded-md outline-none cursor-pointer hover:border-blue-400 transition-all"
        />
        <FaSearch id="search-icon" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
      </div>

      <div id="icons-container" className="flex items-center space-x-4">
        {/* Notif - Sudah biru */}
        <div id="notification-icon" className="relative p-3 bg-blue-50 rounded-2xl text-blue-500 cursor-pointer hover:bg-blue-100 transition-colors">
          <FaBell />
          <span id="notification-badge" className="absolute -top-1 right-0 translate-x-1/2 bg-blue-600 text-white rounded-full px-2 py-0.5 text-[10px] font-bold">
            50
          </span>
        </div>

        <div id="chart-icon" className="p-3 bg-blue-50 rounded-2xl cursor-pointer hover:bg-blue-100 transition-colors">
          <FcAreaChart size={20} />
        </div>

        <div id="settings-icon" className="p-3 bg-red-50 rounded-2xl text-red-500 cursor-pointer hover:bg-red-100 transition-colors">
          <SlSettings />
        </div>

        {/* Profile - Nama dirapikan */}
        <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
          <span className="text-sm">Hello, <b className="text-gray-800">Thariq Alfayyadh</b></span>
          <img
            src="https://api.dicebear.com/8.x/lorelei/svg?seed=Thariq&backgroundColor=bfdbfe&flip=true"
            alt="profile"
            className="w-10 h-10 rounded-full border border-gray-100 shadow-sm"
          />
        </div>
      </div>

      {/* MODAL SEARCH - Aksen Hijau diubah ke Biru */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Search Dashboard</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 text-xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="relative">
              <input 
                autoFocus
                placeholder="Find orders, customers, or reports..." 
                className="w-full border-2 border-blue-500 p-4 rounded-xl outline-none text-lg shadow-inner focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <FaSearch className="absolute right-4 top-5 text-blue-500" />
            </div>

            <div className="mt-4 flex justify-between text-xs text-gray-400">
              <span>Tip: Type # for Order IDs</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Press <b>ESC</b> to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}