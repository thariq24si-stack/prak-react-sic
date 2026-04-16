export default function GuestView({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((car) => (
                <div key={car.id} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 hover:border-zinc-600 transition-all group">
                    <div className="h-48 overflow-hidden relative">
                        <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />

                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${car.status === 'Available' ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                            {car.status}
                        </span>
                    </div>
                    <div className="p-6">
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{car.brand}</p>
                        <h3 className="text-xl font-bold text-zinc-100 mb-4 tracking-tight">{car.name}</h3>
                        
                        <div className="grid grid-cols-3 gap-2 mb-6 text-[9px] text-zinc-400 uppercase font-black tracking-tighter">
                            <div className="bg-black/40 border border-zinc-800 p-2 rounded-lg text-center font-bold">⛽ {car.specifications.fuel}</div>
                            <div className="bg-black/40 border border-zinc-800 p-2 rounded-lg text-center font-bold">⚙️ {car.specifications.transmission}</div>
                            <div className="bg-black/40 border border-zinc-800 p-2 rounded-lg text-center font-bold">🏎️ {car.category}</div>
                        </div>

                        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                            <div>
                                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Daily Rate</p>
                                <p className="text-xl font-black text-white">${car.price}<span className="text-xs font-normal text-zinc-500">/day</span></p>
                            </div>
                            <button className="bg-white text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}