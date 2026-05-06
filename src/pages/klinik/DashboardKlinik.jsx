import { useState, useEffect } from "react";
import { FaTooth, FaUserMd, FaMoneyBillWave, FaCalendarCheck, FaChartLine } from "react-icons/fa";
import { dataPasien, dataTransaksi, dataJadwal } from "../../data/klinikData";

export default function DashboardKlinik() {
  const [stats, setStats] = useState({
    totalPasien: 0,
    totalKunjungan: 0,
    pendapatan: 0,
    retensiPasien: 78,
    pendapatanBulanLalu: 0
  });

  useEffect(() => {
    const total = dataPasien.length;
    const kunjungan = dataJadwal.length;
    const pendapatan = dataTransaksi.reduce((sum, t) => sum + t.total, 0);
    
    setStats({
      totalPasien: total,
      totalKunjungan: kunjungan,
      pendapatan: pendapatan,
      retensiPasien: 78,
      pendapatanBulanLalu: pendapatan * 0.85
    });
  }, []);

  const persentaseKenaikan = ((stats.pendapatan - stats.pendapatanBulanLalu) / stats.pendapatanBulanLalu * 100).toFixed(0);

  const cards = [
    { id: "pasien", title: "Total Pasien", value: stats.totalPasien, icon: FaTooth, color: "bg-hijau", trend: `+${Math.floor(stats.totalPasien * 0.12)} bulan ini` },
    { id: "kunjungan", title: "Kunjungan Bulan Ini", value: stats.totalKunjungan, icon: FaCalendarCheck, color: "bg-biru", trend: "+5% dari bulan lalu" },
    { id: "pendapatan", title: "Pendapatan", value: `Rp ${(stats.pendapatan / 1000000).toFixed(1)} Jt`, icon: FaMoneyBillWave, color: "bg-kuning", trend: `+${persentaseKenaikan}% YoY` },
    { id: "retensi", title: "Retensi Pasien", value: `${stats.retensiPasien}%`, icon: FaUserMd, color: "bg-merah", trend: "Loyalitas meningkat" }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Dashboard Klinik Gigi Permata</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Dashboard</span>
          </div>
        </div>
        <button className="bg-hijau text-black px-4 py-2 rounded-lg hover:bg-green-600">
          📊 Export Laporan
        </button>
      </div>

      {/* Cards */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
              <div className={`${card.color} rounded-full p-4`}>
                <Icon className="text-3xl text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">{card.title}</span>
                <span className="text-2xl font-bold">{card.value}</span>
                <span className="text-xs text-green-500">{card.trend}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity - SFA Reporting */}
      <div className="mt-2 bg-white rounded-lg shadow-md p-6 mx-5">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <FaChartLine className="mr-2 text-hijau" />
          Aktivitas Terkini
        </h3>
        <div className="space-y-3">
          {dataJadwal.slice(0, 3).map((j) => (
            <div key={j.id} className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">{j.pasien} - {j.tindakan}</p>
                <p className="text-sm text-gray-500">{j.tanggal} | {j.jam} | {j.dokter}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${j.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {j.status === 'confirmed' ? '✓ Terkonfirmasi' : '⏳ Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}