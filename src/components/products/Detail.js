import React from 'react';

const Detail = (props) => {  
  return(
    <React.Fragment>
      {
        props.data.map((data, i) => {
          return(
            <React.Fragment key={i}>
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
                      <h1 className="title" key={i}>
                        {data.brand.name} - {data.product.name}
                      </h1>
                    <li>
                      <span className="icon icon-shutter">
                      </span>
                      <span>
                        {
                          data.spesifications["kamera-belakang"] && data.spesifications["kamera-belakang"].map((data2, i2) => {
                            let sparator;
                            if (i2 !== (data.spesifications["kamera-belakang"].length - 1)) {
                              sparator = ',';
                            }
                            return(
                              <React.Fragment key={i2}>
                                {data2.value}{sparator} &nbsp;
                              </React.Fragment>
                            )
                          })
                        }
                        Camera
                      </span>
                    </li>
                    <li>
                      <span className="icon icon-battery">
                      </span>
                      <span>
                        {
                          data.spesifications["baterai"] && data.spesifications["baterai"].map((data2, i2) => {
                            let sparator;
                            if (i2 !== (data.spesifications["baterai"].length - 1)) {
                              sparator = ',';
                            }
                            return(
                              <React.Fragment key={i2}>
                                {data2.value}{sparator} &nbsp;
                              </React.Fragment>
                            )
                          })
                        }
                        Baterai
                      </span>
                    </li>
                    <li>
                      <span className="icon icon-ram">
                      </span>
                      <span>
                        {
                          data.spesifications["ram"] && data.spesifications["ram"].map((data2, i2) => {
                            let sparator;
                            if (i2 !== (data.spesifications["ram"].length - 1)) {
                              sparator = ',';
                            }
                            return(
                              <React.Fragment key={i2}>
                                {data2.value}{sparator} &nbsp;
                              </React.Fragment>
                            )
                          })
                        }
                        Ram
                      </span>
                    </li>
                    <li>
                      <span className="icon icon-storage">
                      </span>
                      <span>
                        {
                          data.spesifications["internal-storage"] && data.spesifications["internal-storage"].map((data2, i2) => {
                            let sparator;
                            if (i2 !== (data.spesifications["internal-storage"].length - 1)) {
                              sparator = ',';
                            }
                            return(
                              <React.Fragment key={i2}>
                                {data2.value}{sparator} &nbsp;
                              </React.Fragment>
                            )
                          })
                        }
                        Internal Storage
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
                      <span id="result-year">{data.product.release_date}</span>
                    </li>
                    <li>
                      <span id="brand">Brand</span>
                      <span id="result-brand">{data.brand.name}</span>
                    </li>
                      {
                        data.spesifications["sistem-operasi"] && data.spesifications["sistem-operasi"].map((data2, i2) => {
                          let sparator;
                          if (i2 !== (data.spesifications["sistem-operasi"].length - 1)) {
                            sparator = ',';
                          }
                          return(
                            <React.Fragment key={i2}>
                              <li>
                                <span id="os">Sistem Operasi</span>
                                <span id="result-os">
                                  {data2.value}{sparator} &nbsp;
                                </span>
                              </li>
                            </React.Fragment>
                          )
                        })
                      }
                      {
                        data.spesifications["ram"] && data.spesifications["ram"].map((data2, i2) => {
                          let sparator;
                          if (i2 !== (data.spesifications["ram"].length - 1)) {
                            sparator = ',';
                          }
                          return(
                            <React.Fragment key={i2}>
                              <li>
                                <span id="ram">RAM</span>
                                <span id="result-ram">
                                  {data2.value}{sparator} &nbsp;
                                </span>
                              </li>
                            </React.Fragment>
                          )
                        })
                      }
                    {
                      data.spesifications["internal-storage"] && data.spesifications["internal-storage"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["internal-storage"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="internal-storage">Internal Storage</span>
                              <span id="result-internal-storage">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["microsd"] && data.spesifications["microsd"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["microsd"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="micro-sd">MicroSD</span>
                              <span id="result-micro-sd">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["baterai"] && data.spesifications["baterai"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["baterai"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="battery">Baterai</span>
                              <span id="result-battery">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["fast-charging"] && data.spesifications["fast-charging"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["fast-charging"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="fast-charging">Fast Charging</span>
                              <span id="result-fast-charging">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["kamera-belakang"] && data.spesifications["kamera-belakang"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["kamera-belakang"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="camera-main">Kamera Belakang</span>
                              <span id="result-camera-main">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["kamera-depan"] && data.spesifications["kamera-depan"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["kamera-depan"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="camera-front">Kamera Depan</span>
                              <span id="result-camera-front">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["fitur-kamera"] && data.spesifications["fitur-kamera"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["fitur-kamera"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="camera-feature">Fitur Kamera</span>
                              <span id="result-camera-feature">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["video"] && data.spesifications["video"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["video"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="video">Video</span>
                              <span id="result-video">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["chipset"] && data.spesifications["chipset"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["chipset"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="soc">Chipset</span>
                              <span id="result-soc">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["cpu"] && data.spesifications["cpu"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["cpu"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="cpu-core">CPU</span>
                              <span id="result-cpu-core">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["gpu"] && data.spesifications["gpu"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["gpu"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="gpu">GPU</span>
                              <span id="result-gpu">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["ukuran-body"] && data.spesifications["ukuran-body"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["ukuran-body"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="size-body">Ukuran Body</span>
                              <span id="result-size-body">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["resolusi-layar"] && data.spesifications["resolusi-layar"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["resolusi-layar"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="display-resolution">Resolusi Layar</span>
                              <span id="result-display-resolution">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                    {
                      data.spesifications["rasio-layar"] && data.spesifications["rasio-layar"].map((data2, i2) => {
                        let sparator;
                        if (i2 !== (data.spesifications["rasio-layar"].length - 1)) {
                          sparator = ',';
                        }
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <span id="display-ratio">Rasio Layar</span>
                              <span id="result-display-ratio">
                                {data2.value}{sparator} &nbsp;
                              </span>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  )
}

export default Detail;