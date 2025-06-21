'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id?: string;         // Có thể là id hoặc _id
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  images: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductListProps {
  products: Product[];
}

const BannerHome: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      <div className="home">
        <div className="home-bg"></div>
        <div className="container"> 
          <div className="featured-categories">
            <h2 className="section-title">Featured Categories</h2>
            <div className="categories-grid">
              <div className="category-item bg-green">
                <div className="icon"><Image src="/client/images/id-1.png" alt="Deli & Bakery" width={50} height={50} /></div>
                <div className="label">Deli & Bakery</div>
              </div>
              <div className="category-item bg-yellow">
                <div className="icon"><Image src="/client/images/id-2.png" alt="Delicatessen" width={50} height={50} /></div>
                <div className="label">Delicatessen</div>
              </div>
              <div className="category-item bg-mint">
                <div className="icon"><Image src="/client/images/id-3.png" alt="Fruit" width={50} height={50} /></div>
                <div className="label">Fruit</div>
              </div>
              <div className="category-item bg-orange">
                <div className="icon"><Image src="/client/images/id-4.png" alt="Vegetables" width={50} height={50} /></div>
                <div className="label">Vegetables</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-5.png" alt="Rice & Nuts" width={50} height={50} /></div>
                <div className="label">Rice & Nuts</div>
              </div>
              <div className="category-item bg-pink">
                <div className="icon"><Image src="/client/images/id-6.png" alt="Dried Food" width={50} height={50} /></div>
                <div className="label">Dried Food</div>
              </div>
              <div className="category-item bg-lightgreen">
                <div className="icon"><Image src="/client/images/id-7.png" alt="Korean Products" width={50} height={50} /></div>
                <div className="label">Korean Products</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-8.png" alt="Home" width={50} height={50} /></div>
                <div className="label">Home</div>
              </div>
              <div className="category-item bg-yellow">
                <div className="icon"><Image src="/client/images/id-9.png" alt="Living" width={50} height={50} /></div>
                <div className="label">Living</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-10.png" alt="It & Technology" width={50} height={50} /></div>
                <div className="label">It & Technology</div>
              </div>
              <div className="category-item bg-green">
                <div className="icon"><Image src="/client/images/id-11.png" alt="Sports" width={50} height={50} /></div>
                <div className="label">Sports</div>
              </div>
              <div className="category-item bg-yellow">
                <div className="icon"><Image src="/client/images/id-12.png" alt="Fashion" width={50} height={50} /></div>
                <div className="label">Fashion</div>
              </div>
              <div className="category-item bg-mint">
                <div className="icon"><Image src="/client/images/id-13.png" alt="Drink" width={50} height={50} /></div>
                <div className="label">Drink</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-14.png" alt="Milk" width={50} height={50} /></div>
                <div className="label">Milk</div>
              </div>
              <div className="category-item bg-orange">
                <div className="icon"><Image src="/client/images/id-15.png" alt="Snack & Candies" width={50} height={50} /></div>
                <div className="label">Snack & Candies</div>
              </div>
              <div className="category-item bg-pink">
                <div className="icon"><Image src="/client/images/id-16.png" alt="Nutritious Food" width={50} height={50} /></div>
                <div className="label">Nutritious Food</div>
              </div>
              <div className="category-item bg-lightgreen">
                <div className="icon"><Image src="/client/images/id-17.png" alt="Instant & Canned" width={50} height={50} /></div>
                <div className="label">Instant & Canned</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-18.png" alt="Sauce & Seasonings" width={50} height={50} /></div>
                <div className="label">Sauce & Seasonings</div>
              </div>
              <div className="category-item bg-yellow">
                <div className="icon"><Image src="/client/images/id-19.png" alt="Mom & Kid" width={50} height={50} /></div>
                <div className="label">Mom & Kid</div>
              </div>
              <div className="category-item bg-peach">
                <div className="icon"><Image src="/client/images/id-20.png" alt="Beauty Care" width={50} height={50} /></div>
                <div className="label">Beauty Care</div>
              </div>
            </div>
          </div>
          <div className="promo-banners my-3">
            <div className="promo-grid">
              <div className="row"> 
                <div className="col-lg-6">
                  <div className="promo-banner bg-blue">
                    <div className="promo-content">
                      <div className="promo-badge">Flat 20% Discount</div>
                      <div className="promo-title my-3">Purely Fresh<br/>Vegetables</div>
                      <Link className="promo-btn" href="#">Shop Now</Link>
                    </div>
                    <div className="promo-image">
                      <Image className="img-pr" src="/client/images/water.png" alt="Water Bottle" width={200} height={200} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="promo-banner bg-yellow">
                    <div className="promo-conten-b">
                      <div className="promo-badge">Flat 25% Discount</div>
                      <div className="promo-title my-3">Fresh Fruits<br/>Pure Qualitty</div>
                      <Link className="promo-btn" href="#">Shop Now</Link>
                    </div>
                    <div className="promo-image">
                      <Image className="img-pr" src="/client/images/coffe.png" alt="Coffee Beans" width={200} height={200} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flash-sales">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title mb-0">Flash Sales Today</h2>
              <Link className="view-all" href="#">View All Deals</Link>
            </div>
            <div className="flash-sales-list d-flex gap-3">
              {products.map((product) => (
                <div key={product.id || product._id} className="flash-card border-pink">
                  <div className="card-top d-flex justify-content-between align-items-start">
                    <div className="badge-pink">Hot</div>
                    <button className="add-btn">Add<i className="fa fa-shopping-cart"></i></button>
                  </div>
                  <div className="product-img">
                    <Image src={product.images} alt={product.name} width={200} height={200} />
                  </div>
                  <div className="product-info">
                    <div className="category">{product.category}</div>
                    <div className="name">{product.name}</div>
                    <div className="brand">By brsmaket</div>
                    <div className="price-row">
                      <div className="price" style={{fontSize: '20px'}}>${product.price}</div>
                      <div className="old-price" style={{fontSize: '17px'}}>${(product.price * 1.1).toFixed(2)}</div>
                    </div>
                    <div className="rating">
                      <i className="fa fa-star filled"></i>
                      <i className="fa fa-star filled"></i>
                      <i className="fa fa-star filled"></i>
                      <i className="fa fa-star filled"></i>
                      <i className="fa fa-star"></i>
                      <span className="rating">4.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;