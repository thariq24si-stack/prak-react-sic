import { useState } from "react";
import carData from "./Cars.json";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

export default function CarRentalApp() {
    const [viewMode, setViewMode] = useState("guest");
    const [formState, setFormState] = useState({
        search: "",
        category: "",
        status: ""
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const filteredCars = (carData || []).filter((car) => {
        const matchesSearch = car.name.toLowerCase().includes(formState.search.toLowerCase()) || 
                             car.brand.toLowerCase().includes(formState.search.toLowerCase());
        const matchesCategory = formState.category ? car.category === formState.category : true;
        const matchesStatus = formState.status ? car.status === formState.status : true;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });

const [newCar, setNewCar] = useState({ name: "", brand: "", price: "", category: "", status: "" });
const [errors, setErrors] = useState({});
const [showResult, setShowResult] = useState(false);

const validate = (name, value) => {
    if (name === "name") {
        if (!value) return "Name required";
        if (/\d/.test(value)) return "No numbers allowed"; // Validasi 1
        if (value.length < 3) return "Too short"; // Validasi 2
    }
    if (name === "price") {
        if (!value) return "Price required";
        if (value < 100) return "Min $100"; // Validasi 3
    }
    return "";
};

const handleFormChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validate(name, value) });
    setNewCar({ ...newCar, [name]: value });
};

const isValid = newCar.name && newCar.brand && newCar.price && newCar.category && newCar.status && !errors.name && !errors.price;

    return (
        <div className="min-h-screen bg-[#0a0a0a] font-sans p-4 md:p-10 text-slate-200">
            {/* Header & Toggle View */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-black text-white tracking-tighter uppercase">ALFA <span className="text-slate-500">GARAGE</span></h1>
                    <p className="text-slate-600 font-bold text-xs tracking-widest uppercase">Premium Car Rental</p>
                </div>
                
                <div className="flex bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-800">
                    <button 
                        onClick={() => setViewMode("guest")}
                        className={`px-6 py-2 rounded-lg transition-all font-bold text-xs uppercase ${viewMode === 'guest' ? 'bg-white text-black shadow-md' : 'text-slate-400 hover:text-white'}`}
                    >
                        Guest
                    </button>
                    <button 
                        onClick={() => setViewMode("admin")}
                        className={`px-6 py-2 rounded-lg transition-all font-bold text-xs uppercase ${viewMode === 'admin' ? 'bg-white text-black shadow-md' : 'text-slate-400 hover:text-white'}`}
                    >
                        Admin
                    </button>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="max-w-7xl mx-auto bg-slate-900/40 p-6 rounded-2xl border border-slate-800 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                        type="text" 
                        name="search"
                        placeholder="Search car name or brand..." 
                        onChange={handleChange}
                        className="w-full p-3 bg-black border border-slate-800 rounded-xl focus:border-slate-500 text-white outline-none transition-all"
                    />
                    <select name="category" onChange={handleChange} className="w-full p-3 bg-black border border-slate-800 rounded-xl text-slate-400 outline-none focus:border-slate-500">
                        <option value="">All Categories</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sport">Sport</option>
                        <option value="Electric">Electric</option>
                    </select>
                    <select name="status" onChange={handleChange} className="w-full p-3 bg-black border border-slate-800 rounded-xl text-slate-400 outline-none focus:border-slate-500">
                        <option value="">All Status</option>
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                    </select>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {viewMode === "guest" ? <GuestView data={filteredCars} /> : <AdminView data={filteredCars} />}
            </div>
        </div>
    );
}