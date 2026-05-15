import { useState } from "react";
import { FaCommentDots, FaCheckCircle, FaSpinner, FaPaperPlane, FaStar } from "react-icons/fa";
import { dataKeluhan, dataPasien } from "../../data/KlinikData";

export default function Keluhan() {
  const [keluhan, setKeluhan] = useState(dataKeluhan);
  const [selectedKeluhan, setSelectedKeluhan] = useState(null);
  const [respon, setRespon] = useState("");

  const updateStatus = (id, newStatus, responseText = "") => {
    setKeluhan(keluhan.map(k => 
      k.id === id ? { ...k, status: newStatus, respon: responseText || k.respon } : k
    ));
    if (responseText) {
      alert(`✅ Respon telah dikirim ke pasien via WhatsApp`);
    }
    setSelectedKeluhan(null);
    setRespon("");
  };

  const unanswered = keluhan.filter(k => k.status === "proses").length;

  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Manajemen Keluhan & Feedback</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Keluhan</span>
          </div>
        </div>
        <div className="bg-red-100 px-4 py-2 rounded-lg">
          <span className="text-sm text-gray-600">Belum Ditanggapi</span>
          <p className="font-bold text-red-500">{unanswered} keluhan</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4 flex items-center"><FaCommentDots className="mr-2 text-hijau" /> Daftar Keluhan Pasien</h3>
          {keluhan.map((k) => (
            <div key={k.id} className="border-b pb-3 mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{k.pasien}</p>
                  <p className="text-sm text-gray-600 mt-1">{k.keluhan}</p>
                  <p className="text-xs text-gray-400 mt-1">{k.tanggal}</p>
                  {k.respon && <p className="text-xs text-green-600 mt-1">✓ Respon: {k.respon}</p>}
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded ${k.status === 'proses' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {k.status === 'proses' ? <><FaSpinner className="inline mr-1 animate-spin" /> Proses</> : <><FaCheckCircle className="inline mr-1" /> Selesai</>}
                  </span>
                  {k.status === 'proses' && (
                    <button onClick={() => setSelectedKeluhan(k)} className="block mt-2 text-hijau text-sm">
                      Tanggapi
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedKeluhan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-2">Tanggapi Keluhan</h3>
              <p className="text-sm text-gray-600 mb-3">Pasien: {selectedKeluhan.pasien}</p>
              <p className="text-sm bg-gray-50 p-3 rounded mb-3">"{selectedKeluhan.keluhan}"</p>
              <textarea 
                className="w-full p-2 border rounded mb-3" 
                rows="3" 
                placeholder="Tulis respon Anda..."
                value={respon}
                onChange={(e) => setRespon(e.target.value)}
              />
              <div className="flex gap-3">
                <button onClick={() => updateStatus(selectedKeluhan.id, "selesai", respon)} className="bg-hijau text-white px-4 py-2 rounded flex-1 flex items-center justify-center gap-2">
                  <FaPaperPlane /> Kirim Respon
                </button>
                <button onClick={() => setSelectedKeluhan(null)} className="bg-gray-300 px-4 py-2 rounded flex-1">Batal</button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4 flex items-center"><FaStar className="mr-2 text-yellow-500" /> ⭐ Survei Kepuasan Pasien (H+1)</h3>
          <p className="text-sm text-gray-600 mb-4">
            Survei dikirim otomatis 1 hari setelah kunjungan via WhatsApp
          </p>
          <div className="space-y-3">
            {dataPasien.slice(0, 3).map((p) => (
              <div key={p.id} className="border rounded-lg p-3">
                <p className="font-medium">{p.nama}</p>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map((star) => (
                    <button key={star} className="text-yellow-400 text-xl hover:scale-110 transition">★</button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Survei dikirim: {new Date().toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 mx-5 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold mb-2">📱 Sistem Notifikasi Otomatis (Service Automation)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <div className="bg-white rounded p-2">✓ Follow-up pasca tindakan (H+1)</div>
          <div className="bg-white rounded p-2">✓ Reminder kontrol (H-7, H-3, H-1)</div>
          <div className="bg-white rounded p-2">✓ Survei kepuasan otomatis (H+1)</div>
        </div>
      </div>
    </div>
  );
}