'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomeHeader() {
  return (
    <div className="header-index">  
      <nav className="navbar navbar-expand-lg">
        <div className="container"><a className="navbar-brand" href="http://localhost:3001"><img className="img-logo" src="/client/images/logo.png" alt="Tạp Hóa Xanh Logo" width={80} height={80} /></a>
          <div className="offcanvas offcanvas-start" id="menu" tabIndex={-1} aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title"><img className="img-logo" src="/client/images/logo.svg" alt="Tạp Hóa Xanh Logo" width={150} height={50} /></h5>
              <button className="btn p-0 border-0" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark text-highline-2 fa-2x"></i></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav pe-3">
                <li className="nav-item"><a className="nav-link me-lg-3 active" aria-current="page" href="http://localhost:3001">Trang Chủ</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="http://localhost:3001/product">Market</a></li>
                <li className="nav-item dropdown"><a className="nav-link me-lg-3 dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Trade</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="javascript:void(0)">Futures</a></li>
                <li className="nav-item dropdown"><a className="nav-link me-lg-3 dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Earn</a></li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a></li>
              </ul>
            </div>
          </div>
          <button className="navbar-toggler text-highline border-0 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><i className="fa-solid fa-bars fa-2x">       </i></button>
        </div>
      </nav>
    </div>
  );
} 