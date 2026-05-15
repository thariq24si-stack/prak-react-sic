import { useState } from "react";
import { FaMoneyBillWave, FaReceipt, FaGift, FaWhatsapp } from "react-icons/fa";
import { dataTransaksi, dataPasien, getTotalPoinPasien } from "../../data/KlinikData";

export default function PembayaranKlinik() {
  const [transaksi, setTransaksi] = useState(dataTransaksi);

  const sendInvoice = (t) => {
    const pasien = dataPasien.find(p => p.id === t.pasienId);
    const invoiceMsg = `🧾 *Kwitansi Digital*\n\nTerima kasih ${t.pasien}\nTindakan: ${t.tindakan}\nTotal: Rp ${t.total.toLocaleString()}\nStatus: ${t.status}\nPoin: ${t.poin}\n\nPoin Anda sekarang: ${getTotalPoinPasien(t.pasienId)}`;
    alert(`📱 Kwitansi dikirim ke ${pasien?.phone || "WA pasien"}:\n${invoiceMsg}`);
  };

  const totalPendapatan = transaksi.reduce((sum, t) => sum + t.total, 0);
  const totalPoin = transaksi.reduce((sum, t) => sum + t.poin, 0);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Pembayaran & Transaksi</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Pembayaran</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Total Pendapatan</span>
            <p className="font-bold text-hijau">Rp {(totalPendapatan / 1000000).toFixed(1)} Jt</p>
          </div>
          <div className="bg-yellow-100 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Total Poin</span>
            <p className="font-bold text-yellow-600">{totalPoin} poin</p>
          </div>
        </div>
      </div>

      {/* Tabel Transaksi */}
      <div className="mx-5 bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">ID Transaksi</th>
              <th className="p-3 text-left">Pasien</th>
              <th className="p-3 text-left">Tindakan</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Poin</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-3 font-mono text-sm">{t.id}</td>
                <td className="p-3">{t.pasien}</td>
                <td className="p-3">{t.tindakan}</td>
                <td className="p-3">Rp {t.total.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs text-white ${t.status === 'lunas' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {t.status === 'lunas' ? 'Lunas' : 'Cicil'}
                  </span>
                </td>
                <td className="p-3">{t.poin}</td>
                <td className="p-3">{t.tanggal}</td>
                <td className="p-3">
                  <button onClick={() => sendInvoice(t)} className="text-hijau hover:text-green-700 flex items-center gap-1">
                    <FaWhatsapp /> Kirim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MA: Loyalty Management */}
      <div className="mt-4 mx-5 bg-gradient-to-r from-hijau to-green-400 rounded-lg p-4 text-white">
        <h3 className="font-semibold flex items-center"><FaGift className="mr-2" /> 🎁 Program Loyalitas (MA)</h3>
        <p className="text-sm mt-1">Setiap transaksi otomatis mengakumulasi poin. Tukarkan poin Anda untuk diskon layanan berikutnya!</p>
        <div className="mt-3 flex gap-4 text-sm bg-white bg-opacity-20 rounded-lg p-3">
          <div>🥉 Bronze: 100 poin → Diskon 10%</div>
          <div>🥈 Silver: 300 poin → Diskon 20%</div>
          <div>🥇 Gold: 500 poin → Gratis scaling 1x</div>
        </div>
      </div>
    </div>
  );
}