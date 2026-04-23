import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div id="dashboard-container" className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Daftar Orderan" 
        breadcrumb={["Home", "Orders"]}
      >
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah OrderanMu
        </button>
      </PageHeader>

      <p>INI ORDERS</p>
      
    </div>
  );
}