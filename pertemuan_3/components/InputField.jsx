// pertemuan_3/InputField.jsx
export default function InputField({ label, type, placeholder, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-1">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {/* Alert Error di bawah inputan (Conditional Rendering) */}
      {error && <p className="text-red-500 text-xs mt-1 italic">{error}</p>}
    </div>
  );
}