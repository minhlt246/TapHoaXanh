'use client';
import { useEffect, useState } from 'react';
import api from '@/app/lib/api';
import ProductList from '@/components/products/ProductList';
import SearchBar from '@/components/common/SearchBar';
import HomeLayout from '@/components/layouts/HomeLayout';
import BannerHome from '@/components/products/BannerHome';

interface Product {
  id?: string;
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

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    api.get('/products')
      .then((res: any) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else if (res.data.products) {
          setProducts(res.data.products);
        } else {
          setError('Định dạng dữ liệu không hợp lệ');
        }
      })
      .catch((err: any) => {
        setError('Không thể tải danh sách sản phẩm');
      });
  }, []);

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <HomeLayout>
      <div className="container mx-auto px-4">
        <BannerHome products={filteredProducts} />
        <div className="my-8">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Sản phẩm bán chạy</h2>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </HomeLayout>
  );
}
