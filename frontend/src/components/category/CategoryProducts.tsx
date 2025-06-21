'use client';

import { useEffect, useState } from 'react';
import api from '@/app/lib/api';
import ProductList from '@/components/products/ProductList';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryProductsProps {
  slug: string;
}

export default function CategoryProducts({ slug }: CategoryProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    api.get(`/products/category/${slug}`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else if (res.data.products) {
          setProducts(res.data.products);
        } else {
          setError('Định dạng dữ liệu không hợp lệ');
        }
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError('Không thể tải danh sách sản phẩm');
      });
  }, [slug]);

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div>
      <h2>Danh mục: {slug}</h2>
      <ProductList products={products} />
    </div>
  );
} 