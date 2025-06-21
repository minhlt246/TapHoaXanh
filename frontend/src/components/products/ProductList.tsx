import React from 'react';

interface Product {
  id?: string;         // Có thể là id hoặc _id
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id || product._id} // Dùng id, nếu không có thì dùng _id
          className="border p-4 rounded-lg"
        >
          <h3 className="font-semibold">{product.name}</h3>
          <p>{product.price.toLocaleString('vi-VN')} đ</p>
          <img src={`/images/${product.img}`} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
