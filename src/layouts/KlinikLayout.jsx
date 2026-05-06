import { Outlet, NavLink } from "react-router-dom";
import { 
  FaHome, FaUser, FaCalendarAlt, FaMoneyBillWave, 
  FaCommentDots, FaGift, FaSignOutAlt 
} from "react-icons/fa";

export default function KlinikLayout() {
  const menuClass = ({ isActive }) => `
    flex cursor-pointer items-center rounded-xl p-3 space-x-3 
    ${isActive 
      ? "text-hijau bg-green-200 font-extrabold" 
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }
  `;

  const menuItems = [
    { path: "/klinik", name: "Dashboard", icon: FaHome },
    { path: "/klinik/pasien", name: "Data Pasien", icon: FaUser },
    { path: "/klinik/jadwal", name: "Penjadwalan", icon: FaCalendarAlt },
    { path: "/klinik/pembayaran", name: "Pembayaran", icon: FaMoneyBillWave },
    { path: "/klinik/keluhan", name: "Keluhan", icon: FaCommentDots },
    { path: "/klinik/loyalitas", name: "Loyalitas", icon: FaGift },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="w-72 bg-white shadow-lg flex flex-col p-6">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-poppins font-extrabold">
            Klinik<span className="text-hijau">.</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Gigi Permata</p>
        </div>

        {/* Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink to={item.path} className={menuClass}>
                    <Icon className="text-xl" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="pt-6 border-t">
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
            className="flex cursor-pointer items-center rounded-xl p-3 space-x-3 text-gray-600 hover:text-merah hover:bg-red-100 w-full"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}