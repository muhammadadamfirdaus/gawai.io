import React from 'react';
import {Link} from 'react-router-dom';

const ProductSelected = () => {
  return(
    <React.Fragment>
      <section className="card flex editor-choice">
          <h2 className="subheading">Gadget Pilihan</h2>
          <div className="wrapper">
            <li>
              <div className="wrapper">
                <Link to="/product/detail/gadget-detail" className="thumbnail">
                  <img src="../../assets/images/iphone-xr.png" alt="iPhone XR"/>
                </Link>
                <h1>
                  <Link to="/gadget/dadget-detail">iPhone XR</Link>
                </h1>
              </div>
            </li>
          </div>
        </section>
    </React.Fragment>
  );
}

export default ProductSelected;