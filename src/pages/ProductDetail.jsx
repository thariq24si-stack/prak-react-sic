import { useParams } from "react-router-dom";
import { product } from "../data/product.jsx";

export default function ProductDetail() {
  const { id } = useParams();

  const detail = product.find(
    (item) => item.id == id
  );

  if (!detail) {
    return (
      <div className="p-5">
        Product tidak ditemukan
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center">

      <div className="bg-white rounded-xl shadow-lg w-[350px] p-5">

        <img
          src={detail.thumbnail}
          alt={detail.title}
          className="w-full h-52 object-contain mb-4"
        />

        <h2 className="text-2xl font-bold mb-3">
          {detail.title}
        </h2>

        <p className="text-gray-600 mb-1">
          Kategori: {detail.category}
        </p>

        <p className="text-gray-600 mb-2">
          Brand: {detail.brand}
        </p>

        <p className="font-bold text-lg">
          Harga: Rp {detail.price}
        </p>

        <p className="text-gray-600 mt-2">
          Stock: {detail.stock}
        </p>

      </div>
    </div>
  );
}