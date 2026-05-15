import { useParams } from "react-router-dom";
import { customers } from "../data/customers";

export default function CustomerDetail() {
  const { id } = useParams();

  const customer = customers.find(
    (c) => c.id === parseInt(id)
  );

  if (!customer) {
    return (
      <div className="p-6 text-red-500">
        Customer tidak ditemukan
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg">
        <h1 className="text-2xl font-bold mb-4">
          {customer.customerName}
        </h1>

        <p className="mb-2">
          <b>ID:</b> {customer.id}
        </p>

        <p className="mb-2">
          <b>Email:</b> {customer.email}
        </p>

        <p className="mb-2">
          <b>Phone:</b> {customer.phone}
        </p>

        <p className="mb-2">
          <b>Loyalty:</b> {customer.loyalty}
        </p>
      </div>
    </div>
  );
}