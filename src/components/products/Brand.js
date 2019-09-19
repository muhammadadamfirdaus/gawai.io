import React from 'react';
import {Link} from 'react-router-dom';

const Brand = (props) => {
  return(
    <React.Fragment>
      <div className="wrapper">
        {
          props.data.map((data, i) => {
            return(
              <li key={i}>
                <div className="wrapper">
                  <Link className="thumbnail" to="/product/detail/product-detail">
                    <img src="../../assets/images/apple-iphone-xs.jpg" alt="iPhone XS"/>
                  </Link>
                  <h1>
                    <Link className="thumbnail" to="/product/detail/product-detail">
                      {data.name}
                    </Link>
                  </h1>
                </div>
              </li>
            )
          })
        }
      </div>
    </React.Fragment>
  );
}

export default Brand;