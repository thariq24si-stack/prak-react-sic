export default function TailwindCSS() {
    return (
        <div className="min-h-screen bg-slate-950 p-0 selection:bg-cyan-500 selection:text-white">
            {/* Navbar Jadi Lebih Sleek & Modern */}
            <nav className="flex justify-between items-center bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-5 text-white sticky top-0 z-50">
                <h1 className="text-2xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    MyWebsite
                </h1>
                <ul className="flex space-x-8 font-bold text-sm uppercase tracking-widest">
                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
            </nav>

            {/* Judul Utama dengan Efek Border Macho */}
            <h1 className="border-l-8 border-cyan-500 m-8 pl-4 text-4 font-black uppercase italic text-white tracking-widest">
                Belajar Tailwind CSS 4
            </h1>

            {/* Button Jadi Lebih Bold & High-Tech */}
            <div className="px-8">
                <button className="relative group overflow-hidden border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-none font-black uppercase tracking-tighter shadow-[5px_5px_0px_0px_rgba(6,182,212,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                    Klik Saya
                </button>
            </div>

            {/* Card Jadi Dark Mode Elegan */}
            <div className="bg-slate-900 border border-slate-800 shadow-2xl p-8 m-8 rounded-2xl transform hover:-rotate-1 transition-transform">
                <h2 className="text-2xl font-black text-white leading-none">CARD TITLE</h2>
                <div className="h-1 w-12 bg-cyan-500 my-4"></div>
                <p className="text-slate-400 font-medium italic">
                    Ini adalah contoh penggunaan padding dan margin di Tailwind.
                </p>
            </div>

            {/* Typography Section */}
            <div className="px-8 my-12">
                <h1 className="text-6xl font-black text-white leading-tight uppercase tracking-tighter shadow-cyan-500/20 drop-shadow-2xl">
                    Tailwind <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Typography</span>
                </h1>
                <p className="text-cyan-400 font-mono text-sm mt-4 uppercase tracking-[0.3em]">
                    Belajar Tailwind sangat menyenangkan dan cepat!
                </p>
            </div>

            {/* Section Colors dengan Gradasi Gahar */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-10 m-8 rounded-3xl shadow-[0_20px_50px_rgba(30,64,175,0.3)] border-t border-blue-400/30 group">
                <h3 className="text-3xl font-black uppercase italic group-hover:tracking-widest transition-all duration-500">
                    Tailwind Colors
                </h3>
                <p className="mt-4 text-blue-100 font-light text-lg">
                    Belajar Tailwind itu seru dan fleksibel!
                </p>
            </div>

            {/* Commented out section remains untouched in structure */}
            {/* <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold">Hover me!</h3>
                <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
            </div> */}
        </div>
    )
}