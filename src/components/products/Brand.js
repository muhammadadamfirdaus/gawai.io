import React from 'react';
import {Link} from 'react-router-dom';

const Brand = () => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <li>
          <div className="wrapper">
            <Link className="thumbnail" to="/product/detail/product-detail">
              <img src="../../assets/images/apple-iphone-xs.jpg" alt="iPhone XS"/>
            </Link>
            <h1>
              <Link className="thumbnail" to="/product/detail/product-detail">
                iPhone XS
              </Link>
            </h1>
          </div>
        </li>
        <li>
          <div className="wrapper">
            <Link className="thumbnail" to="/product/detail/product-detail">
              <img src="../../assets/images/apple-iphone-xs.jpg" alt="iPhone XS"/>
            </Link>
            <h1>
              <Link className="thumbnail" to="/product/detail/product-detail">
                iPhone XS
              </Link>
            </h1>
          </div>
        </li>
        <li>
          <div className="wrapper">
            <Link className="thumbnail" to="/product/detail/product-detail">
              <img src="../../assets/images/apple-iphone-xs.jpg" alt="iPhone XS"/>
            </Link>
            <h1>
              <Link className="thumbnail" to="/product/detail/product-detail">
                iPhone XS
              </Link>
            </h1>
          </div>
        </li>
        <li>
          <div className="wrapper">
            <Link className="thumbnail" to="/product/detail/product-detail">
              <img src="../../assets/images/apple-iphone-xs.jpg" alt="iPhone XS"/>
            </Link>
            <h1>
              <Link className="thumbnail" to="/product/detail/product-detail">
                iPhone XS
              </Link>
            </h1>
          </div>
        </li>
      </div>
    </React.Fragment>
  );
}

export default Brand;