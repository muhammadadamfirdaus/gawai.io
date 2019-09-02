import React from 'react';
import {Link} from 'react-router-dom';

const PostByBrand = () => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <h2 className="subheading">Brand</h2>
        <section className="card flex brand">
          <div className="wrapper head">
            <h1>
              <Link to="/product/brand/apple">
                Xiaomi
              </Link>
            </h1>
            <h2 className="more">
              <Link to="/product/brand/apple">
                Lihat Semua
              </Link>
            </h2>
          </div>
          <div className="wrapper">
            <li>
              <div className="wrapper">
                <Link className="thumbnail" to="/post/detail-article">
                  <img src="../../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                </Link>
                <h1>
                  <Link className="thumbnail" to="/post/detail-article">
                    Redmi Note 7 Tembus 1 Juta Penjualan di Bulan Pertama
                  </Link>
                </h1>
              </div>
            </li>
            <li>
              <div className="wrapper">
                <Link className="thumbnail" to="/post/detail-article">
                  <img src="../../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                </Link>
                <h1>
                  <Link className="thumbnail" to="/post/detail-article">
                    Redmi Note 7 Tembus 1 Juta Penjualan di Bulan Pertama
                  </Link>
                </h1>
              </div>
            </li>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default PostByBrand;