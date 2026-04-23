import React from 'react';
import { FaSearchMinus, FaHome } from 'react-icons/fa'; // Impor icon
import PageHeader from '../components/PageHeader'; // Import header yang sama

export default function NotFound() {
  return (
    // Menggunakan kelas dasar yang sama seperti di Customers.jsx
    <div id="notfound-container" className="bg-gray-50 min-h-screen">
      <PageHeader />
      
      {/* Konten Utama Terpusat */}
      <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
        
        {/* Ikon Peringatan dengan warna biru */}
        <div className="text-9xl text-blue-600 mb-8 animate-pulse">
          <FaSearchMinus />
        </div>

        {/* Teks 404 Besar dengan Gradasi Biru */}
        <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
          404
        </h1>

        {/* Pesan Kesalahan */}
        <h2 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight">
          Halaman Tidak Ditemukan
        </h2>

        {/* Deskripsi Menyenangkan (Menghubungkan ke struktur kode) */}
        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          ERROR BRO, MENDING BELAJAR LAGI!!!
        </p>
 
        {/* Tombol Kembali ke Beranda */}
        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            <FaHome /> {/* Icon Home */}
            Kembali ke Beranda
          </a>
        </div>

      </div>
    </div>
  );
}