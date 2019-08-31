import React from 'react';
import {Link} from 'react-router-dom';

const MostPopular = () => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <section className="card list popular">
          <h2 className="subheading">Paling Banyak Dibaca</h2>
          <div className="wrapper">
            <li>
              <div className="wrapper">
                <span>1</span>
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

export default MostPopular;