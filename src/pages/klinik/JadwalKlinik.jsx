import { useState } from "react";
import { FaCalendarAlt, FaClock, FaUserMd, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { dataJadwal, dataPasien } from "../../data/klinikData";

export default function JadwalKlinik() {
  const [jadwal, setJadwal] = useState(dataJadwal);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const sendReminder = (jadwalItem, method = "whatsapp") => {
    const pasien = dataPasien.find(p => p.id === jadwalItem.pasienId);
    const message = `🔔 Reminder Jadwal Kontrol\n\nHalo ${jadwalItem.pasien},\nJadwal ${jadwalItem.tindakan} Anda besok pukul ${jadwalItem.jam} bersama ${jadwalItem.dokter}.\n\nMohon datang tepat waktu. Terima kasih 🙏`;
    
    if (method === "whatsapp") {
      alert(`📱 WhatsApp ke ${pasien?.phone || "nomor pasien"}:\n${message}`);
    } else {
      alert(`📧 Email ke ${pasien?.email || "email pasien"}:\n${message}`);
    }
    
    setJadwal(jadwal.map(j => j.id === jadwalItem.id ? { ...j, reminderSent: true } : j));
  };

  const filteredJadwal = jadwal.filter(j => j.tanggal === selectedDate);
  
  const upcomingJadwal = jadwal.filter(j => j.tanggal > new Date().toISOString().split('T')[0]);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Penjadwalan & Reminder Otomatis</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Jadwal</span>
          </div>
        </div>
        <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600">
          <FaCalendarAlt className="inline mr-2" /> + Buat Jadwal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5">
        {/* Kalender Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4 flex items-center"><FaCalendarAlt className="mr-2 text-hijau" /> Pilih Tanggal</h3>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          
          <h4 className="font-medium mb-2">📋 Jadwal Hari Ini</h4>
          {filteredJadwal.length === 0 ? (
            <p className="text-gray-400 text-sm">Tidak ada jadwal</p>
          ) : (
            filteredJadwal.map(j => (
              <div key={j.id} className="border-l-4 border-hijau pl-3 py-2 mb-3">
                <p className="font-medium">{j.pasien} - {j.tindakan}</p>
                <p className="text-sm text-gray-500 flex items-center"><FaClock className="mr-1 text-xs" /> {j.jam} | {j.dokter}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => sendReminder(j, "whatsapp")} className="text-green-500 text-xs flex items-center"><FaWhatsapp className="mr-1" /> WA</button>
                  <button onClick={() => sendReminder(j, "email")} className="text-blue-500 text-xs flex items-center"><FaEnvelope className="mr-1" /> Email</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Daftar Jadwal */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4">📅 Semua Jadwal</h3>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Tanggal</th>
                <th className="p-2 text-left">Pasien</th>
                <th className="p-2 text-left">Tindakan</th>
                <th className="p-2 text-left">Dokter</th>
                <th className="p-2 text-left">Jam</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Reminder</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map(j => (
                <tr key={j.id} className="border-t">
                  <td className="p-2">{j.tanggal}</td>
                  <td className="p-2">{j.pasien}</td>
                  <td className="p-2">{j.tindakan}</td>
                  <td className="p-2">{j.dokter}</td>
                  <td className="p-2">{j.jam}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs text-white ${j.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      {j.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                  </td>
                  <td className="p-2">
                    {j.reminderSent ? (
                      <span className="text-green-500 text-xs">✓ Terkirim</span>
                    ) : (
                      <button onClick={() => sendReminder(j)} className="text-hijau text-xs">Kirim</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SA: Customer Communications Management - Info Sistem Reminder */}
      <div className="mt-4 mx-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
        <h3 className="font-semibold mb-2 flex items-center"><FaWhatsapp className="mr-2 text-green-500" /> 🤖 Sistem Reminder Otomatis (SA)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded p-2">📅 <strong>H-3</strong> Sebelum jadwal: "Jadwal kontrol Anda dalam 3 hari"</div>
          <div className="bg-white rounded p-2">⏰ <strong>H-1</strong> Sebelum jadwal: "Besok jadwal kontrol Anda pukul ..."</div>
          <div className="bg-white rounded p-2">📋 <strong>H+1</strong> Pasca tindakan: "Terima kasih, isi survei kepuasan kami"</div>
        </div>
        <p className="text-xs text-gray-500 mt-3">✓ Reminder otomatis via WhatsApp & Email untuk mengurangi no-show pasien</p>
      </div>
    </div>
  );
}