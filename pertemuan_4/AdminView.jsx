import { useState } from "react";
import InputGroup from "./components/InputGroup";
export default function AdminView({ data }) {

    const [formData, setFormData] = useState({ name: "", brand: "", price: "", category: "", status: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (name, value) => {
        if (name === "name") {
            if (!value) return "Nama harus diisi";
            if (/\d/.test(value)) return "Tidak boleh angka"; // Validasi 1
            if (value.length < 3) return "Min 3 huruf"; // Validasi 2
        }
        if (name === "price") {
            if (!value) return "Harga kosong";
            if (value < 100) return "Min $100"; // Validasi 3
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: validate(name, value) });
        setFormData({ ...formData, [name]: value });
    };

    const formValid = formData.name && formData.brand && formData.price && formData.category && formData.status && !errors.name && !errors.price;

    return (
        <div className="flex flex-col gap-6">
            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                <h2 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Input New Car</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <InputGroup label="Car Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                    <InputGroup label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
                    <InputGroup label="Price" name="price" type="number" value={formData.price} onChange={handleChange} error={errors.price} />
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Category</label>
                        <select name="category" onChange={handleChange} className="p-3 bg-black border border-zinc-800 rounded-xl text-white outline-none">
                            <option value="">Select</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Sport">Sport</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Status</label>
                        <select name="status" onChange={handleChange} className="p-3 bg-black border border-zinc-800 rounded-xl text-white outline-none">
                            <option value="">Select</option>
                            <option value="Available">Available</option>
                            <option value="Booked">Booked</option>
                        </select>
                    </div>
                </div>

                {formValid && (
                    <button onClick={() => setIsSubmitted(true)} className="bg-white text-black px-6 py-2 rounded-lg font-bold text-xs uppercase">Save Car</button>
                )}

                {isSubmitted && (
                    <p className="mt-4 text-zinc-400 text-xs italic font-bold">✅ Berhasil input: {formData.name}</p>
                )}
            </div>

            <div className="bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-black/50 border-b border-zinc-800">
                            <tr>
                                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Car Details</th>
                                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Specifications</th>
                                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Owner Info</th>
                                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Status</th>
                                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {data.map((car) => (
                                <tr key={car.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <img src={car.image} className="w-14 h-14 rounded-xl object-cover border border-zinc-800 group-hover:border-zinc-600 transition-all" />
                                            <div>
                                                <p className="font-bold text-zinc-100 tracking-tight">{car.name}</p>
                                                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{car.brand} • {car.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-5 text-xs font-medium text-zinc-400">
                                        <span className="text-zinc-200">{car.specifications.engine}</span> <br/>
                                        <span className="text-[10px] uppercase tracking-tighter opacity-50">{car.specifications.transmission}</span>
                                    </td>
                                    <td className="p-5 text-xs">
                                        <p className="font-bold text-zinc-300">{car.owner.name}</p>
                                        <p className="text-[10px] text-zinc-500 uppercase font-black">{car.owner.location}</p>
                                    </td>
                                    <td className="p-5 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${car.status === 'Available' ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                                            {car.status}
                                        </span>
                                    </td>
                                    <td className="p-5 font-black text-white text-lg tracking-tighter">${car.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}