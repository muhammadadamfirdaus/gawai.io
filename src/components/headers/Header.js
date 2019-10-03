import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
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
            {
              props.classifications.map((data, i) => {
                return(
                  <React.Fragment key={i}>
                    <li className="sub">
                      <a href="#">{data.classification.name}</a>
                      <input type="checkbox" id="amp" className="amp-sub-menu"/>
                      <ul>
                      <div className="sub-menu-container">
                        <div className="tabs">
                          <div className="wrapper">
                            {
                              data.rubrics.map((rubric, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                    <li>
                                      <a href="#" data-tab="tab-1-laptop">{rubric.name}</a>
                                    </li>
                                    <input type="radio" name="amp-tab-menu-1" id="amp" className="amp-sub-menu" checked/>
                                    <div id="tab-1-laptop" className="tab-content">
                                      <div className="wrapper">
                                        {
                                          rubric.newPosts.data.map((post, i3) => {
                                            return(
                                              <React.Fragment key={i3}>
                                                <li>
                                                  <Link to={`/post/detail/${post.post.slug}`} className="thumbnail">
                                                    <img src="../../assets/images/laptop-gaming-1.jpg" alt="ASUS ROG Strix Scar II Gaming Laptop 15.6” 144Hz"/>
                                                  </Link>
                                                  <h1>
                                                    <Link to={`/post/detail/${post.post.slug}`} >{post.post.title}</Link>
                                                  </h1>
                                                </li>
                                              </React.Fragment>
                                            )
                                          })
                                        }
                                      </div>
                                    </div>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                      </ul>
                    </li>
                  </React.Fragment>
                )
              })
            }
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
          
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;