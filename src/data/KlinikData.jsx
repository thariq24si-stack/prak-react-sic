// ========== SFA: Contact Management - Data Pasien ==========
export const dataPasien = [
  { id: 1, nama: "Budi Santoso", email: "budi@email.com", phone: "08123456789", riwayat: "Scaling", loyalitas: "Gold", lastVisit: "2025-03-15", poin: 680 },
  { id: 2, nama: "Siti Aminah", email: "siti@email.com", phone: "08123456788", riwayat: "Behel", loyalitas: "Silver", lastVisit: "2025-03-10", poin: 245 },
  { id: 3, nama: "Agus Wijaya", email: "agus@email.com", phone: "08123456787", riwayat: "Cabut Gigi", loyalitas: "Bronze", lastVisit: "2025-03-05", poin: 45 },
  { id: 4, nama: "Dewi Kartika", email: "dewi@email.com", phone: "08123456786", riwayat: "Scaling", loyalitas: "Silver", lastVisit: "2025-03-12", poin: 180 },
  { id: 5, nama: "Rina Febriani", email: "rina@email.com", phone: "08123456785", riwayat: "Behel", loyalitas: "Gold", lastVisit: "2025-03-08", poin: 520 },
];

// ========== SFA: Order Management - Data Transaksi ==========
export const dataTransaksi = [
  { id: "TRX001", pasienId: 1, pasien: "Budi Santoso", tindakan: "Scaling", total: 350000, status: "lunas", poin: 35, tanggal: "2025-04-09" },
  { id: "TRX002", pasienId: 2, pasien: "Siti Aminah", tindakan: "Pasang Behel", total: 3500000, status: "cicil", poin: 350, tanggal: "2025-04-08" },
  { id: "TRX003", pasienId: 3, pasien: "Agus Wijaya", tindakan: "Cabut Gigi", total: 250000, status: "lunas", poin: 25, tanggal: "2025-04-07" },
  { id: "TRX004", pasienId: 4, pasien: "Dewi Kartika", tindakan: "Scaling", total: 350000, status: "lunas", poin: 35, tanggal: "2025-04-06" },
  { id: "TRX005", pasienId: 5, pasien: "Rina Febriani", tindakan: "Kontrol Behel", total: 150000, status: "lunas", poin: 15, tanggal: "2025-04-05" },
];

// ========== SFA+SA: Activity Management - Data Jadwal ==========
export const dataJadwal = [
  { id: 1, pasienId: 1, pasien: "Budi Santoso", tindakan: "Scaling", dokter: "Dr. Sarah", tanggal: "2025-04-10", jam: "09:00", status: "confirmed", reminderSent: true },
  { id: 2, pasienId: 2, pasien: "Siti Aminah", tindakan: "Kontrol Behel", dokter: "Dr. Sarah", tanggal: "2025-04-10", jam: "10:30", status: "pending", reminderSent: false },
  { id: 3, pasienId: 3, pasien: "Agus Wijaya", tindakan: "Cabut Gigi", dokter: "Dr. Budi", tanggal: "2025-04-11", jam: "14:00", status: "confirmed", reminderSent: true },
  { id: 4, pasienId: 4, pasien: "Dewi Kartika", tindakan: "Scaling", dokter: "Dr. Sarah", tanggal: "2025-04-12", jam: "11:00", status: "confirmed", reminderSent: false },
];

// ========== SA: Case Management - Data Keluhan ==========
export const dataKeluhan = [
  { id: 1, pasienId: 1, pasien: "Budi Santoso", keluhan: "Gigi terasa ngilu setelah scaling", status: "proses", tanggal: "2025-04-08", respon: "" },
  { id: 2, pasienId: 2, pasien: "Siti Aminah", keluhan: "Karet behel lepas", status: "selesai", tanggal: "2025-04-07", respon: "Sudah diganti karet baru" },
  { id: 3, pasienId: 5, pasien: "Rina Febriani", keluhan: "Behel terasa sakit", status: "proses", tanggal: "2025-04-09", respon: "" },
];

// ========== MA: Data Rekomendasi & Trigger ==========
export const dataRekomendasi = [
  { id: 1, pasienId: 1, pasien: "Budi Santoso", rekomendasi: "Teeth Whitening", alasan: "Masih dalam 1 bulan pasca scaling" },
  { id: 2, pasienId: 2, pasien: "Siti Aminah", rekomendasi: "Retensi Behel", alasan: "Sudah 6 bulan pakai behel" },
  { id: 3, pasienId: 3, pasien: "Agus Wijaya", rekomendasi: "Implan Gigi", alasan: "Cabut gigi geraham" },
];

// Helper functions
export const getPasienById = (id) => dataPasien.find(p => p.id === id);
export const getTransaksiByPasien = (pasienId) => dataTransaksi.filter(t => t.pasienId === pasienId);
export const getTotalPoinPasien = (pasienId) => {
  const transaksi = getTransaksiByPasien(pasienId);
  return transaksi.reduce((sum, t) => sum + t.poin, 0);
};