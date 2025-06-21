'use client';
import { useEffect, useState } from 'react';
import api from '@/app/lib/api';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    api.get(`/news/${params.id}`).then(res => setNews(res.data));
  }, [params.id]);

  if (!news) return <div className="container my-4">Đang tải...</div>;

  return (
    <div className="container my-4">
      <h2>{news.title}</h2>
      <p className="text-muted">{news.createdAt && new Date(news.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  );
} 