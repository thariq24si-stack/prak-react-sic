import { FaHome, FaPlus, FaClipboardList, FaUserFriends } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-white p-8 shadow-lg">

      {/* Logo - Titik jadi Biru */}
      <div id="sidebar-logo" className="mb-10 flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] font-bold text-gray-900 leading-tight">
          Sedap<span className="text-blue-600">.</span>
        </span>
        <span id="logo-subtitle" className="text-sm font-medium text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu - Aksen Hijau diganti Biru */}
      <div id="sidebar-menu">
        <ul id="menu-list" className="space-y-2">
          
          {/* Dashboard - Active State (Blue) */}
          <li>
            <div className="flex cursor-pointer items-center rounded-xl p-4 text-blue-600 bg-blue-50 font-bold transition-all">
              <FaHome className="mr-4 text-2xl" />
              <span className="text-lg">Dashboard</span>
            </div>
          </li>

          {/* Orders */}
          <li>
            <div className="flex cursor-pointer items-center rounded-xl p-4 text-gray-400 hover:bg-blue-50 transition-all group">
              <FaClipboardList className="mr-4 text-2xl group-hover:text-blue-600" />
              <span className="text-lg group-hover:text-blue-600">Orders</span>
            </div>
          </li>

          {/* Customers */}
          <li>
            <div className="flex cursor-pointer items-center rounded-xl p-4 text-gray-400 hover:bg-blue-50 transition-all group">
              <FaUserFriends className="mr-4 text-2xl group-hover:text-blue-600" />
              <span className="text-lg group-hover:text-blue-600">Customers</span>
            </div>
          </li>

        </ul>
      </div>

      {/* Footer - Banner Biru */}
      <div id="sidebar-footer" className="mt-auto">
        <div className="bg-blue-600 p-6 rounded-[2rem] shadow-xl mb-8 relative overflow-hidden group">
          
          {/* Gambar Kartun dengan aksen biru */}
          <img 
            src="https://api.dicebear.com/8.x/lorelei/svg?seed=Fikri&backgroundColor=bfdbfe&flip=true"
            alt="Organize Menu Illustration"
            className="absolute -right-4 -bottom-6 w-32 h-32 object-contain z-0 transition-transform group-hover:scale-110" 
          />

          <div className="relative z-10 pr-12">
            <p className="text-white text-xs mb-4 leading-relaxed font-medium">
              Please organize your menus through button below!
            </p>
            <button className="flex items-center justify-center w-full py-2 bg-white rounded-xl space-x-2 shadow-sm hover:bg-blue-50 transition-colors">
              <FaPlus className="text-blue-600 text-xs" />
              <span className="text-blue-600 font-bold text-sm">Add Menus</span>
            </button>
          </div>
          
          {/* Dekorasi lingkaran biru muda */}
          <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-400 rounded-full opacity-30"></div>
        </div>

        <div className="px-2">
          <p className="font-bold text-gray-800 text-sm">
            Sedap Restaurant Admin Dashboard
          </p>
          <p className="text-xs text-gray-400 mt-1">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}