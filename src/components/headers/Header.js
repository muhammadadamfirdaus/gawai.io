import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <React.Fragment>
      <header>
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src="../../assets/images/gawai-logo-white.png" alt="Official GAWAI.IO logo"/>
          </Link>
          <input type="checkbox" id="amp" className="amp-menu"/>
          <div className="menu-mobile"><span></span></div>
          <nav className="menu">
            <li><Link to="/">Home</Link></li>
            <li className="sub"><a href="#">Laptop</a>
              <input type="checkbox" id="amp" className="amp-sub-menu"/>
              <ul>
                <div className="sub-menu-container">
                  <div className="tabs">
                    <div className="wrapper">
                      <li><a href="#" data-tab="tab-1-laptop">Gaming</a></li>
                      <input type="radio" name="amp-tab-menu-1" id="amp" className="amp-sub-menu" checked/>
                      <div id="tab-1-laptop" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <Link to="/post/detail-article" className="thumbnail">
                              <img src="../../assets/images/laptop-gaming-1.jpg" alt="ASUS ROG Strix Scar II Gaming Laptop 15.6” 144Hz"/>
                            </Link>
                            <h1>
                              <Link to="/post/detail-article">ASUS ROG Strix Scar II Gaming Laptop 15.6” 144Hz</Link>
                            </h1>
                          </li>
                        </div>
                      </div>
                      <li><a href="#" data-tab="tab-2-laptop">Creative</a></li>
                      <input type="radio" name="amp-tab-menu-1" id="amp" className="amp-sub-menu"/>
                      <div id="tab-2-laptop" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <Link to="/post/detail-article" className="thumbnail">
                              <img src="../../assets/images/laptop-gaming-2.jpg" alt="MSI 15.6&quot; Gaming Laptop Intel Core i7 16GB"/>
                            </Link>
                            <h1>
                              <Link to="/post/detail-article">MSI 15.6&quot; Gaming Laptop Intel Core i7 16GB</Link>
                            </h1>
                          </li>
                        </div>
                      </div>
                      <li><a href="#" data-tab="tab-3-laptop">Murah</a></li>
                      <input type="radio" name="amp-tab-menu-1" id="amp" className="amp-sub-menu"/>
                      <div id="tab-3-laptop" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <Link to="/post/detail-article" className="thumbnail">
                              <img src="../../assets/images/laptop-gaming-1.jpg" alt="ASUS ROG Strix Scar II Gaming Laptop 15.6” 144Hz"/>
                            </Link>
                            <h1>
                              <Link to="/post/detail-article">ASUS ROG Strix Scar II Gaming Laptop 15.6” 144Hz</Link>
                            </h1>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li><a href="#">Monitor</a></li>
            <li className="sub"><a href="#">Smartphone</a>
              <input type="checkbox" id="amp" className="amp-sub-menu"/>
              <ul>
                <div className="sub-menu-container">
                  <div className="tabs">
                    <div className="wrapper">
                      <li><a href="#" data-tab="tab-1-smartphone">Gaming</a></li>
                      <input type="radio" name="amp-tab-menu-2" id="amp" className="amp-sub-menu" checked/>
                      <div id="tab-1-smartphone" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../../assets/images/samsung-galaxy-a8-a530f.jpg" alt="Samsung A8"/>
                            </a>
                            <h1>
                              <a href="detail-article.html">Spesifikasi Lengkap Samsung A8</a>
                            </h1>
                          </li>
                        </div>
                      </div>
                      <li><a href="#" data-tab="tab-2-smartphone">Budget</a></li>
                      <input type="radio" name="amp-tab-menu-2" id="amp" className="amp-sub-menu"/>
                      <div id="tab-2-smartphone" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../../assets/images/vivo-z1-pro.jpg" alt="VIVO Z1 Pro Full Review"/>
                            </a>
                            <h1>
                              <a href="detail-article.html">VIVO Z1 Pro Full Review</a>
                            </h1>
                          </li>
                        </div>
                      </div>
                      <li><a href="#" data-tab="tab-3-smartphone">Terhangat</a></li>
                      <input type="radio" name="amp-tab-menu-2" id="amp" className="amp-sub-menu"/>
                      <div id="tab-3-smartphone" className="tab-content">
                        <div className="wrapper">
                          <li>
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../../assets/images/oneplus-7-pro.jpg" alt="One Plus 7 Pro"/>
                            </a>
                            <h1>
                              <a href="detail-article.html">Unboxing One Plus 7 Pro</a>
                            </h1>
                          </li>
                          <li>
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../../assets/images/vivo-z1-pro.jpg" alt="VIVO Z1 Pro Full Review"/>
                            </a>
                            <h1>
                              <a href="detail-article.html">VIVO Z1 Pro Full Review</a>
                            </h1>
                          </li>
                          <li>
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../../assets/images/samsung-galaxy-a8-a530f.jpg" alt="Samsung A8"/>
                            </a>
                            <h1>
                              <a href="detail-article.html">Spesifikasi Lengkap Samsung A8</a>
                            </h1>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li><a href="#">Smartwatch</a></li>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;