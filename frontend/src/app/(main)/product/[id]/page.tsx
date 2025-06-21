'use client';
import { useEffect, useState } from 'react';
import api from '@/app/lib/api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get(`${params.id}`).then(res => setProduct(res.data));
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Giá: {product.price}</p>
      <p>Số lượng: {product.quantity}</p>
      <p>Danh mục: {product.category}</p>
      <p>Hình ảnh: {product.image}</p>
      <p>Ngày tạo: {product.createdAt}</p>
      <p>Ngày cập nhật: {product.updatedAt}</p>
      <button className="btn btn-primary">Thêm vào giỏ hàng</button>
    </div>
  );
} 