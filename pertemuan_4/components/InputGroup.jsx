export default function InputGroup({ label, error, ...props }) {
    return (
        <div className="mb-4">
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                {label}
            </label>
            <input 
                {...props}
                className={`w-full p-4 bg-black border ${error ? 'border-red-500' : 'border-zinc-800'} rounded-2xl text-white outline-none focus:ring-1 focus:ring-zinc-400 transition-all`}
            />
            {error && (
                <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-tighter italic">
                    ⚠️ {error}
                </p>
            )}
        </div>
    );
}