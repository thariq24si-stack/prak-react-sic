import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="bg-gray-50 min-h-screen">
   <PageHeader 
           title="Dashboard" 
           breadcrumb={["Home", "Dashboard"]}
         >
           <button className="bg-blue-600 text-white px-4 py-2 rounded">
             Tambah Data
           </button>
         </PageHeader>

      {/* Statistik Cards */}
      <div id="dashboard-grid" className="p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Card 1: Total Orders (DIUBAH KE BIRU) */}
        <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-blue-500">
          <div className="bg-blue-100 p-4 rounded-full text-blue-600">
            <FaShoppingCart size={24}/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">75</h3>
            <p className="text-gray-400 text-sm">Total Orders</p>
          </div>
        </div> 

        {/* Card 2: Total Delivered (Tetap Biru/Cyan) */}
        <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-cyan-500">
          <div className="bg-cyan-100 p-4 rounded-full text-cyan-600">
            <FaTruck size={24}/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">175</h3>
            <p className="text-gray-400 text-sm">Total Delivered</p>
          </div>
        </div>

        {/* Card 3: Total Canceled (Tetap Merah untuk alert) */}
        <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-red-500">
          <div className="bg-red-100 p-4 rounded-full text-red-500">
            <FaBan size={24}/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">40</h3>
            <p className="text-gray-400 text-sm">Total Canceled</p>
          </div>
        </div>

        {/* Card 4: Total Revenue (Tetap Kuning/Emas) */}
        <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-yellow-500">
          <div className="bg-yellow-100 p-4 rounded-full text-yellow-600">
            <FaDollarSign size={24}/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Rp.128</h3>
            <p className="text-gray-400 text-sm">Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Improvisasi 3: Komponen Baru (Recent Orders) - Nuansa Biru */}
      <div className="p-6 pt-0">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
            <span className="text-blue-600 text-xs font-bold cursor-pointer hover:underline">View All</span>
          </div>
          <div className="border-t border-dashed pt-10 pb-10 text-gray-400 text-center flex flex-col items-center">
            <div className="bg-blue-50 p-4 rounded-full mb-2">
               <FaShoppingCart className="text-blue-200 text-3xl" />
            </div>
            <p>Belum ada pesanan terbaru hari ini.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}