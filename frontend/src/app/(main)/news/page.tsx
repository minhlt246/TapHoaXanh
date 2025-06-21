'use client';
import { useEffect, useState } from 'react';
import api from '@/app/lib/api';
import Link from 'next/link';

export default function NewsListPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/news').then(res => setNews(res.data));
  }, []);

  return (
    <div className="container my-4">
      <h2>Tin tức</h2>
      <ul>
        {news.map((item: any) => (
          <li key={item.id}>
            <Link href={`/news/${item.id}`}>
              <strong>{item.title}</strong> - {item.createdAt && new Date(item.createdAt).toLocaleDateString()}
            </Link>
            <p>{item.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 