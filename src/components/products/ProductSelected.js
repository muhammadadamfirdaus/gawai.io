import React from 'react';

const ProductSelected = () => {
  return(
    <React.Fragment>
      <section className="card flex editor-choice">
          <h2 className="subheading">Gadget Pilihan</h2>
          <div className="wrapper">
            <li>
              <div className="wrapper">
                <a href="gadget-detail.html" className="thumbnail">
                  <img src="../../assets/images/iphone-xr.png" alt="iPhone XR"/>
                </a>
                <h1>
                  <a href="gadget-detail.html">iPhone XR</a>
                </h1>
              </div>
            </li>
          </div>
        </section>
    </React.Fragment>
  );
}

export default ProductSelected;