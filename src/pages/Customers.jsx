import PageHeader from "../components/PageHeader";
import { customers } from "../data/customers";
import { useState } from "react";

export default function Customers() {
  const [open, setOpen] = useState(false); // ✅ state modal

  return (
    <div id="dashboard-container" className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Daftar Pelanggan" 
        breadcrumb={["Home", "Customers"]}
      >
        {/* ✅ button sudah aktif */}
        <button 
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tambah Pelanggan
        </button>
      </PageHeader>

      <div className="p-6">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.customerId} className="border-t">
                <td className="p-2">{c.customerId}</td>
                <td className="p-2">{c.customerName}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.phone}</td>
                <td className="p-2">{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ FORM MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[300px]">
            <h2 className="font-bold mb-2">Tambah Customer</h2>

            <input placeholder="Nama" className="border p-2 w-full mb-2" />
            <input placeholder="Email" className="border p-2 w-full mb-2" />
            <input placeholder="Phone" className="border p-2 w-full mb-2" />

            <select className="border p-2 w-full mb-2">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

            <button 
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white px-3 py-1 mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}