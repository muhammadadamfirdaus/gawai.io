import React from 'react';

const Headline = () => {
  return(
    <React.Fragment>
      <div className="headline">
          <div className="wrapper">
            <div className="swiper-container big">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="wrapper">
                    <a href="detail-article.html" className="thumbnail">
                      <img src="../assets/images/macbook-pro.png" alt="Macbook Pro"/>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="wrapper">
                    <a href="detail-article.html" className="thumbnail">
                      <img src="../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="wrapper">
                    <a href="detail-article.html" className="thumbnail">
                      <img src="../assets/images/samsung-m-20.jpg" alt="Samsung M20"/>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="wrapper">
                    <a href="detail-article.html" className="thumbnail">
                      <img src="../assets/images/oppo-find-x.jpg" alt="OPPO Find X"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-container slide-headline small">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-slide="0">
                  <div className="wrapper">
                    <a href="#" className="thumbnail">
                      <img src="../assets/images/macbook-pro.png" alt="Macbook Pro"/>
                    </a>
                    <h1>
                      <a href="detail-article.html">Preview Design MacBook Pro 2020</a>
                    </h1>
                  </div>
                </div>
                <div className="swiper-slide" data-slide="1">
                  <div className="wrapper">
                    <a href="#" className="thumbnail">
                      <img src="../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                    </a>
                    <h1>
                      <a href="detail-article.html">Redmi Note 7 Tembus 1 Juta Penjualan di Bulan Pertama</a>
                    </h1>
                  </div>
                </div>
                <div className="swiper-slide" data-slide="2">
                  <div className="wrapper">
                    <a href="#" className="thumbnail">
                      <img src="../assets/images/samsung-m-20.jpg" alt="Samsung M20"/>
                    </a>
                    <h1>
                      <a href="detail-article.html">Top 5 Gadget yang Harus Anda Miliki di 2019</a>
                    </h1>
                  </div>
                </div>
                <div className="swiper-slide" data-slide="3">
                  <div className="wrapper">
                    <a href="#" className="thumbnail">
                      <img src="../assets/images/oppo-find-x.jpg" alt="OPPO Find X"/>
                    </a>
                    <h1>
                      <a href="detail-article.html">Spesifikasi OPPO Find X</a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Headline;