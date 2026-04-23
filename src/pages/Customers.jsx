import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div id="dashboard-container" className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Daftar Pelanggan" 
        breadcrumb={["Home", "Customers"]}
      >
        {/* Children: tombol yang hanya muncul di halaman ini */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah Pelanggan
        </button>
      </PageHeader>

      <p>INI CUSTOMERS</p>
      
    </div>
  );
}