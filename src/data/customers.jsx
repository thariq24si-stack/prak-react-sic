export const customers = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  customerName: `Customer ${i + 1}`,
  email: `customer${i + 1}@mail.com`,
  phone: `0812${Math.floor(10000000 + Math.random() * 90000000)}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3],
}));