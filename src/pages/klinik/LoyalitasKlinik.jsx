import { useState } from "react";
import { FaGift, FaTrophy, FaMedal, FaRocket, FaWhatsapp } from "react-icons/fa";
import { dataPasien, dataRekomendasi, getTotalPoinPasien } from "../../data/KlinikData";

export default function LoyalitasKlinik() {
  const [pasien] = useState(dataPasien);
  const [rekomendasi] = useState(dataRekomendasi);

  const sendRecommendation = (p, rekom) => {
    const message = `🎁 *Rekomendasi Layanan Personal*\n\nHalo ${p.nama},\n\nBerdasarkan riwayat perawatan Anda, kami merekomendasikan:\n✨ *${rekom.rekomendasi}*\n📝 Alasan: ${rekom.alasan}\n\nManfaatkan poin loyalitas Anda (${getTotalPoinPasien(p.id)} poin) untuk diskon spesial!\n\nHubungi kami untuk jadwalkan konsultasi.`;
    alert(`📱 Rekomendasi dikirim ke ${p.phone || "WA pasien"}:\n${message}`);
  };

  const getTierInfo = (poin) => {
    if (poin >= 500) return { tier: "Gold", color: "bg-kuning", icon: FaTrophy, diskon: "30%", benefit: "Gratis scaling 1x" };
    if (poin >= 300) return { tier: "Silver", color: "bg-gray-400", icon: FaMedal, diskon: "20%", benefit: "Diskon 20% semua layanan" };
    return { tier: "Bronze", color: "bg-orange-500", icon: FaMedal, diskon: "10%", benefit: "Diskon 10%" };
  };

  const triggerCampaign = (type) => {
    const messages = {
      birthday: "🎂 Selamat Ulang Tahun! Dapatkan diskon 25% untuk layanan apapun bulan ini!",
      scalingReminder: "🦷 6 bulan pasca scaling Anda! Waktunya perawatan rutin. Booking sekarang!",
      tierUp: "🎉 Selamat! Poin Anda naik tier. Nikmati benefit lebih eksklusif!"
    };
    alert(`📢 Kampanye Trigger: ${messages[type]}`);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Program Loyalitas & Marketing Otomatis</h1>
          <div className="flex items-center font-medium space-x-2 mt-1 text-sm">
            <span className="text-hijau">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Loyalitas</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5">
        {/* Daftar Poin Pasien */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4 flex items-center"><FaGift className="mr-2 text-hijau" /> 🏆 Poin Loyalitas Pasien</h3>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Pasien</th>
                <th className="p-2 text-left">Poin</th>
                <th className="p-2 text-left">Tier</th>
                <th className="p-2 text-left">Benefit</th>
                <th className="p-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pasien.map((p) => {
                const poin = getTotalPoinPasien(p.id);
                const tierInfo = getTierInfo(poin);
                const TierIcon = tierInfo.icon;
                const rekom = rekomendasi.find(r => r.pasienId === p.id);
                return (
                  <tr key={p.id} className="border-t">
                    <td className="p-2">{p.nama}</td>
                    <td className="p-2 font-bold">{poin}</td>
                    <td className="p-2">
                      <span className={`${tierInfo.color} text-white px-2 py-1 rounded text-xs flex items-center gap-1 w-fit`}>
                        <TierIcon /> {tierInfo.tier}
                      </span>
                    </td>
                    <td className="p-2 text-sm">{tierInfo.benefit}</td>
                    <td className="p-2">
                      {rekom && (
                        <button onClick={() => sendRecommendation(p, rekom)} className="bg-hijau text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <FaWhatsapp className="text-xs" /> Kirim Reward
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Trigger Marketing - MA */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4 flex items-center"><FaRocket className="mr-2 text-hijau" /> 🎯 Trigger Marketing (Event-based)</h3>
          <div className="space-y-3">
            <button onClick={() => triggerCampaign("birthday")} className="w-full text-left border-l-4 border-pink-500 pl-3 py-2 hover:bg-gray-50">
              <p className="font-medium">🎂 Ulang Tahun Pasien</p>
              <p className="text-xs text-gray-500">Diskon 25% + notifikasi WhatsApp otomatis</p>
            </button>
            <button onClick={() => triggerCampaign("scalingReminder")} className="w-full text-left border-l-4 border-hijau pl-3 py-2 hover:bg-gray-50">
              <p className="font-medium">🦷 6 Bulan Pasca Scaling</p>
              <p className="text-xs text-gray-500">Reminder kontrol + promo periodik</p>
            </button>
            <button onClick={() => triggerCampaign("tierUp")} className="w-full text-left border-l-4 border-kuning pl-3 py-2 hover:bg-gray-50">
              <p className="font-medium">🎁 Akumulasi Poin Tier Up</p>
              <p className="text-xs text-gray-500">Notifikasi naik tier + benefit baru</p>
            </button>
          </div>
        </div>
      </div>

      {/* Rekomendasi Personal - Customer Segmentation */}
      <div className="mt-4 mx-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border">
        <h3 className="font-semibold mb-2 flex items-center"><FaGift className="mr-2 text-purple-500" /> 🤖 Rekomendasi Layanan Personal (Customer Segmentation)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
          {rekomendasi.map((r) => {
            const pasienData = pasien.find(p => p.id === r.pasienId);
            return (
              <div key={r.id} className="bg-white rounded-lg p-3 shadow-sm">
                <p className="font-medium text-hijau">{r.pasien}</p>
                <p className="text-sm font-semibold mt-1">✨ {r.rekomendasi}</p>
                <p className="text-xs text-gray-500">📝 {r.alasan}</p>
                <button onClick={() => sendRecommendation(pasienData, r)} className="mt-2 text-hijau text-sm flex items-center gap-1">
                  <FaWhatsapp /> Kirim ke Pasien
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Tier Benefits */}
      <div className="mt-4 mx-5 bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-center">🏅 Tier & Benefit Loyalitas</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-orange-100 rounded-lg p-3">
            <FaMedal className="text-orange-500 text-2xl mx-auto mb-2" />
            <p className="font-bold">Bronze</p>
            <p className="text-sm">100 poin</p>
            <p className="text-xs text-gray-600">Diskon 10%</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-3">
            <FaMedal className="text-gray-500 text-2xl mx-auto mb-2" />
            <p className="font-bold">Silver</p>
            <p className="text-sm">300 poin</p>
            <p className="text-xs text-gray-600">Diskon 20%</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-3">
            <FaTrophy className="text-yellow-500 text-2xl mx-auto mb-2" />
            <p className="font-bold">Gold</p>
            <p className="text-sm">500 poin</p>
            <p className="text-xs text-gray-600">Gratis scaling</p>
          </div>
        </div>
      </div>
    </div>
  );
}