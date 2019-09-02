import React from 'react';

const Detail = () => {
  return(
    <React.Fragment>
      <div className="gadget-main">
        <div className="wrapper">
          <div className="gadget-profile">
            <div className="circle">
              <div className="spinner pie"></div>
              <div className="filler pie"></div>
              <div className="mask"></div>
            </div>
            <div className="border border-summary"></div>
            <div className="border border-status"></div>
            <div className="border border-status-2"></div>
            <div className="border border-color"></div>
            <img src="../../assets/images/samsung-m20.png" alt="Samsung M20"/>
          </div>
        </div>
        <div className="wrapper">
          <div className="gadget-color">
            <h2 className="subheading">Varian Warna</h2>
            <nav>
              <li data-color="white">
                <div className="palette">
                  <span>platinum</span>
                  <a href="#" style={{background:'#fff'}}></a>
                </div>
              </li>
              <li data-color="black">
                <div className="palette">
                  <span>black charcoal</span>
                  <a href="#" style={{background:'#000'}}></a>
                </div>
              </li>
              <li data-color="blue">
                <div className="palette">
                  <span>blue ocean</span>
                  <a href="#" style={{background:'#4A90E2'}}></a>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="gadget-detail">
        <div className="gadget-summary">
          <div className="wrapper">
            <h1 className="title">
              Samsung Galaxy M20
            </h1>
            <li>
              <span className="icon icon-shutter">
              </span>
              <span>
                13 Megapixel Camera
              </span>
            </li>
            <li>
              <span className="icon icon-battery">
              </span>
              <span>
                5000 mAh
              </span>
            </li>
            <li>
              <span className="icon icon-ram">
              </span>
              <span>
                4 GB RAM
              </span>
            </li>
            <li>
              <span className="icon icon-storage">
              </span>
              <span>
                64 GB Internal Storage
              </span>
            </li>
          </div>
        </div>
        <div className="gadget-status">
          <div className="wrapper">
            <h1 className="title">
              Spesifikasi Lengkap
            </h1>
            <li>
              <span id="year">Tahun Rilis</span>
              <span id="result-year">Januari 2019</span>
            </li>
            <li>
              <span id="brand">Brand</span>
              <span id="result-brand">Samsung</span>
            </li>
            <li>
              <span id="os">Sistem Operasi</span>
              <span id="result-os">Android 8.1 - Oreo</span>
            </li>
            <li>
              <span id="ram">RAM</span>
              <span id="result-ram">4 GB atau 3 GB</span>
            </li>
            <li>
              <span id="internal-storage">Internal Storage</span>
              <span id="result-internal-storage">64 GB atau 32 GB</span>
            </li>
            <li>
              <span id="micro-sd">MicroSD</span>
              <span id="result-micro-sd">Hingga 512 GB</span>
            </li>
            <li>
              <span id="battery">Baterai</span>
              <span id="result-battery">5000 mAh</span>
            </li>
            <li>
              <span id="fast-charging">Fast Charging</span>
              <span id="result-fast-charging">Ya</span>
            </li>
            <li>
              <span id="camera-main">Kamera Belakang</span>
              <span id="result-camera-main">13 Megapixel</span>
            </li>
            <li>
              <span id="camera-front">Kamera Depan</span>
              <span id="result-camera-front">5 Megapixel</span>
            </li>
            <li>
              <span id="camera-feature">Fitur Kamera</span>
              <span id="result-camera-feature">LED Flash, Panorama, HDR</span>
            </li>
            <li>
              <span id="video">Video</span>
              <span id="result-video">1080@30fps</span>
            </li>
            <li>
              <span id="soc">Chipset</span>
              <span id="result-soc">Exynos 7904 Octa</span>
            </li>
            <li>
              <span id="cpu-core">CPU</span>
              <span id="result-cpu-core">Octa-core</span>
            </li>
            <li>
              <span id="gpu">GPU</span>
              <span id="result-gpu">Mali-G71 MP2</span>
            </li>
            <li>
              <span id="size-body">Ukuran Body</span>
              <span id="result-size-body">6.16 x 2.93 x 0.35 in</span>
            </li>
            <li>
              <span id="display-resolution">Resolusi Layar</span>
              <span id="result-display-resolution">1080 x 2340 px</span>
            </li>
            <li>
              <span id="display-ratio">Rasio Layar</span>
              <span id="result-display-ratio">16:9</span>
            </li>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Detail;