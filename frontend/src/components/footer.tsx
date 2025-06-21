'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <Image 
                      src="/client/images/logo.png" 
                      alt="Tạp Hóa Xanh Logo"
                      width={150}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="footer-about-content">
                  <p>Tạp Hóa Xanh - Cung cấp thực phẩm sạch, an toàn cho sức khỏe của bạn và gia đình.</p>
                  <ul className="footer-contact-info">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <span>Hotline: 1900 1234</span>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <span>Email: info@taphoxanh.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Danh mục</h3>
                <ul className="footer-widget-links">
                  <li><Link href="/category/rau-cu-qua">Rau củ quả</Link></li>
                  <li><Link href="/category/thit-ca">Thịt cá</Link></li>
                  <li><Link href="/category/do-kho">Đồ khô</Link></li>
                  <li><Link href="/category/gia-vi">Gia vị</Link></li>
                  <li><Link href="/category/do-uong">Đồ uống</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Thông tin</h3>
                <ul className="footer-widget-links">
                  <li><Link href="/about">Giới thiệu</Link></li>
                  <li><Link href="/news">Tin tức</Link></li>
                  <li><Link href="/contact">Liên hệ</Link></li>
                  <li><Link href="/policy">Chính sách</Link></li>
                  <li><Link href="/terms">Điều khoản</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Theo dõi chúng tôi</h3>
                <div className="footer-widget-content">
                  <p>Đăng ký nhận thông tin về sản phẩm mới và khuyến mãi</p>
                  <form className="footer-subscribe-form">
                    <input type="email" placeholder="Email của bạn" />
                    <button type="submit">Đăng ký</button>
                  </form>
                  <div className="footer-social-links">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Tạp Hóa Xanh. Tất cả quyền được bảo lưu.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-payment">
                <img src="/client/images/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 