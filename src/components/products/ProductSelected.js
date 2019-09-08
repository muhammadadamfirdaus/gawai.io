import React from 'react';
import {Link} from 'react-router-dom';

const ProductSelected = (props) => {
  return(
    <React.Fragment>
      <section className="card flex editor-choice">
          <h2 className="subheading">Gadget Pilihan</h2>
          <div className="wrapper">
            {
              props.data.map((data, i) => {
                return(
                  <React.Fragment key={i}>
                    <li>
                      <div className="wrapper">
                        <Link to={`/product/detail/${data.product.slug}`} className="thumbnail">
                          <img src="../../assets/images/iphone-xr.png" alt="iPhone XR"/>
                        </Link>
                        <h1>
                          <Link to={`/product/detail/${data.product.slug}`}>{data.brand.name} {data.product.name}</Link>
                        </h1>
                      </div>
                    </li>
                  </React.Fragment>
                )
              })
            }
          </div>
        </section>
    </React.Fragment>
  );
}

export default ProductSelected;