import { useState } from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash, FaHistory } from "react-icons/fa";
import { dataPasien, dataTransaksi, getTotalPoinPasien } from "../../data/KlinikData";

export default function PasienKlinik() {
  const [pasien, setPasien] = useState(dataPasien);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({ nama: "", email: "", phone: "" });
  const [selectedPasien, setSelectedPasien] = useState(null);
  const [showRiwayat, setShowRiwayat] = useState(false);

  const handleAddPasien = (e) => {
    e.preventDefault();
    const newPasien = {
      id: pasien.length + 1,
      ...formData,
      riwayat: "Pemeriksaan Awal",
      loyalitas: "Bronze",
      lastVisit: new Date().toISOString().split('T')[0],
      poin: 0
    };
    setPasien([...pasien, newPasien]);
    setShowForm(false);
    setFormData({ nama: "", email: "", phone: "" });
    alert(`✅ ${newPasien.nama} berhasil ditambahkan! WhatsApp reminder akan dikirim otomatis.`);
  };

  const filteredPasien = pasien.filter(p => 
    p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showRiwayatPasien = (p) => {
    setSelectedPasien(p);
    setShowRiwayat(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Manajemen Pasien</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Pasien</span>
          </div>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2">
          <FaPlus /> Tambah Pasien
        </button>
      </div>

      {/* Search Bar */}
      <div className="mx-5 mb-4 relative">
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama atau email..."
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-hijau"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Form Tambah Pasien - Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Tambah Pasien Baru</h3>
            <form onSubmit={handleAddPasien}>
              <input type="text" placeholder="Nama Lengkap" className="w-full p-2 border rounded mb-3" 
                value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" 
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="tel" placeholder="No. WhatsApp" className="w-full p-2 border rounded mb-3" 
                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <div className="flex gap-3">
                <button type="submit" className="bg-hijau text-white px-4 py-2 rounded flex-1">Simpan</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 px-4 py-2 rounded flex-1">Batal</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Riwayat Perawatan - SFA Extended */}
      {showRiwayat && selectedPasien && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Riwayat Perawatan: {selectedPasien.nama}</h3>
              <button onClick={() => setShowRiwayat(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded">
              <p><strong>Status Loyalitas:</strong> {selectedPasien.loyalitas}</p>
              <p><strong>Total Poin:</strong> {getTotalPoinPasien(selectedPasien.id)}</p>
              <p><strong>Kunjungan Terakhir:</strong> {selectedPasien.lastVisit}</p>
            </div>
            <h4 className="font-semibold mb-2">Histori Transaksi:</h4>
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr><th className="p-2 text-left">Tanggal</th><th className="p-2 text-left">Tindakan</th><th className="p-2 text-left">Total</th><th className="p-2 text-left">Poin</th></tr>
              </thead>
              <tbody>
                {dataTransaksi.filter(t => t.pasienId === selectedPasien.id).map(t => (
                  <tr key={t.id} className="border-t">
                    <td className="p-2">{t.tanggal}</td><td className="p-2">{t.tindakan}</td><td className="p-2">Rp {t.total.toLocaleString()}</td><td className="p-2">{t.poin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tabel Pasien */}
      <div className="mx-5 bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Kontak</th>
              <th className="p-3 text-left">Riwayat Terakhir</th>
              <th className="p-3 text-left">Loyalitas</th>
              <th className="p-3 text-left">Last Visit</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredPasien.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{p.nama}</td>
                <td className="p-3 text-sm">{p.email}<br/>{p.phone}</td>
                <td className="p-3">{p.riwayat}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs text-white ${
                    p.loyalitas === 'Gold' ? 'bg-kuning' : p.loyalitas === 'Silver' ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>{p.loyalitas}</span>
                </td>
                <td className="p-3">{p.lastVisit}</td>
                <td className="p-3">
                  <button onClick={() => showRiwayatPasien(p)} className="text-hijau mr-2 hover:text-green-700">
                    <FaHistory />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}