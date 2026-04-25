export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
      
      {/* Bisa icon atau img */}
      <div className="mb-8">
        {typeof image === "string" ? (
          <img src={image} alt={code} className="w-64" />
        ) : (
          image
        )}
      </div>

      <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
        {code}
      </h1>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        Halaman Tidak Ditemukan
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-lg">
        {description}
      </p>

      <a
        href="/"
        className="mt-10 inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        Kembali ke Beranda
      </a>
    </div>
  )
}