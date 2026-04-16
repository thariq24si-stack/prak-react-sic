// pertemuan_3/UserForm.jsx
import { useState } from "react";
import InputField from "./components/InputField";
export default function UserForm() {
  const [formData, setFormData] = useState({
    nama: "", email: "", umur: "",
    paket: "", jadwal: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (name, value) => {
    let errorMsg = "";
    if (name === "nama") {
      if (!value) errorMsg = "Nama wajib diisi!";
      else if (value.length < 3) errorMsg = "Minimal 3 karakter!";
      else if (/\d/.test(value)) errorMsg = "Nama tidak boleh mengandung angka!";
    }
    if (name === "email") {
      if (!value) errorMsg = "Email wajib diisi!";
      else if (!value.includes("@")) errorMsg = "Harus format email (ada @)!";
      else if (value.length < 5) errorMsg = "Email terlalu pendek!";
    }
    if (name === "umur") {
      if (!value) errorMsg = "Umur wajib diisi!";
      else if (isNaN(value)) errorMsg = "Harus berupa angka!";
      else if (parseInt(value) < 17) errorMsg = "Minimal umur 17 tahun!";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
    setIsSubmitted(false); // Sembunyikan hasil kalau user ngetik lagi
  };

  // Cek apakah semua field terisi dan tidak ada error sama sekali
  const isFormValid = 
    formData.nama && formData.email && formData.umur && formData.paket && formData.jadwal &&
    !errors.nama && !errors.email && !errors.umur;

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gray-50 rounded-2xl shadow-xl border border-gray-200 text-gray-800">
      <h2 className="text-2xl font-black text-blue-600 mb-2">Pendaftaran Kursus IT</h2>
      <p className="text-gray-500 mb-6 text-sm">Silahkan isi data diri dan pilih paket belajar kamu.</p>

      <InputField label="Nama Lengkap" name="nama" type="text" placeholder="Contoh: Thariq" onChange={handleChange} error={errors.nama} />
      <InputField label="Email" name="email" type="email" placeholder="thariq@mail.com" onChange={handleChange} error={errors.email} />
      <InputField label="Umur" name="umur" type="text" placeholder="Contoh: 20" onChange={handleChange} error={errors.umur} />

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1">Pilih Paket</label>
        <select name="paket" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
          <option value="">-- Pilih Paket --</option>
          <option value="Frontend">Frontend (React)</option>
          <option value="Backend">Backend (Node JS)</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-1">Jadwal</label>
        <select name="jadwal" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
          <option value="">-- Pilih Jadwal --</option>
          <option value="Pagi">Pagi (08:00 - 10:00)</option>
          <option value="Malam">Malam (19:00 - 21:00)</option>
        </select>
      </div>

      {isFormValid && (
        <button onClick={() => setIsSubmitted(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition shadow-lg">
          Kirim Pendaftaran
        </button>
      )}

      
      {isSubmitted && (
        <div className="mt-8 p-4 bg-green-100 border-l-4 border-green-500 rounded text-green-800">
          <h3 className="font-bold text-lg mb-2"> Pendaftaran Berhasil!</h3>
          <p className="text-sm">Halo <b>{formData.nama}</b>, kamu telah terdaftar di kelas <b>{formData.paket}</b> jadwal <b>{formData.jadwal}</b>.</p>
        </div>
      )}
    </div>
  );
}