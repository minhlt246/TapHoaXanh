'use client';
import { useEffect, useState } from 'react';
import api from '@/app/lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalNews: 0
  });

  useEffect(() => {
    api.get('/admin/stats').then(res => setStats(res.data));
  }, []);

  return (
    <div className="container my-4">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sản phẩm</h5>
              <p className="card-text">{stats.totalProducts}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Đơn hàng</h5>
              <p className="card-text">{stats.totalOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Người dùng</h5>
              <p className="card-text">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tin tức</h5>
              <p className="card-text">{stats.totalNews}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 