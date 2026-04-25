import PageHeader from "../components/PageHeader";
import { orders } from "../data/orders";
import { useState } from "react";

export default function Orders() {
  const [open, setOpen] = useState(false); // ✅ state

  return (
    <div id="dashboard-container" className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Daftar Orderan" 
        breadcrumb={["Home", "Orders"]}
      >
        <button 
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tambah OrderanMu
        </button>
      </PageHeader>

      <div className="p-6">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-200 text-left">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Status</th>
              <th className="p-2">Total</th>
              <th className="p-2">Tanggal</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.orderId} className="border-t">
                <td className="p-2">{o.orderId}</td>
                <td className="p-2">{o.customerName}</td>
                <td className="p-2">{o.status}</td>
                <td className="p-2">Rp {o.totalPrice}</td>
                <td className="p-2">{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ FORM MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[300px]">
            <h2 className="font-bold mb-2">Tambah Order</h2>

            <input placeholder="Order ID" className="border p-2 w-full mb-2" />
            <input placeholder="Customer Name" className="border p-2 w-full mb-2" />

            <select className="border p-2 w-full mb-2">
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <input type="number" placeholder="Total Price" className="border p-2 w-full mb-2" />
            <input type="date" className="border p-2 w-full mb-2" />

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