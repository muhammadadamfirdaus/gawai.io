import React from 'react';
import Moment from 'react-moment';

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
                {
                  data.spesifications["color"] ?
                    <div className="wrapper">
                      <div className="gadget-color">
                        <h2 className="subheading">Varian Warna</h2>
                        <nav>
                          {
                            data.spesifications["color"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                    <li data-color="white">
                                      <div className="palette">
                                        <span>{data2.value}</span>
                                        <a href="#" style={{background:`${data2.value}`}}></a>
                                      </div>
                                    </li>
                                  </React.Fragment>
                                )
                              })
                            }
                        </nav>
                      </div>
                    </div>
                  : null
                }
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
                      <div><span id="year">Tahun Rilis</span></div>
                      <div>
                        <span id="result-year">
                          <Moment format="D MMMM YYYY">
                            {data.product.release_date}
                          </Moment>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div><span id="brand">Brand</span></div>
                      <div><span id="result-brand">{data.brand.name}</span></div>
                    </li>
                      {
                        data.spesifications["sistem-operasi"] ? 
                        <li>
                          <div>
                            <span id="os">Sistem Operasi</span>
                          </div>
                          <div>
                            {
                              data.spesifications["sistem-operasi"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-os">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                        : null
                      }
                      {
                        data.spesifications["ram"] ? 
                          <li>
                            <div>
                              <span id="ram">RAM</span>
                            </div>
                            <div>
                          {
                            data.spesifications["ram"].map((data2, i2) => {
                              return(
                                <React.Fragment key={i2}>
                                    <span id="result-ram">
                                      {data2.value}
                                    </span>
                                </React.Fragment>
                              )
                            })
                          }
                            </div>
                          </li>
                        : null
                      }
                      {
                        data.spesifications["internal-storage"] ?
                          <li>
                            <div>
                              <span id="internal-storage">Internal Storage</span>
                            </div>
                            <div>
                            {
                              data.spesifications["internal-storage"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                    <span id="result-internal-storage">
                                      {data2.value}
                                    </span>
                                  </React.Fragment>
                                )
                              })
                            }
                            </div>
                          </li>
                        : null
                      }
                    {
                      data.spesifications["microsd"] ? 
                        <li>
                          <div>
                            <span id="micro-sd">MicroSD</span>
                          </div>
                          <div>
                          {
                            data.spesifications["microsd"].map((data2, i2) => {
                              return(
                                <React.Fragment key={i2}>
                                  <span id="result-micro-sd">
                                    {data2.value}
                                  </span>
                                </React.Fragment>
                              )
                            })
                          }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["baterai"] ?
                        <li>
                          <div>
                            <span id="battery">Baterai</span>
                          </div>
                          <div>
                            {
                              data.spesifications["baterai"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-battery">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["fast-charging"] ?
                        <li>
                          <div>
                            <span id="fast-charging">Fast Charging</span>
                          </div>
                          <div>
                            {
                              data.spesifications["fast-charging"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-fast-charging">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["kamera-belakang"] ?
                        <li>
                          <div>
                            <span id="camera-main">Kamera Belakang</span>
                          </div>
                          <div>
                            {
                              data.spesifications["kamera-belakang"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-camera-main">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["kamera-depan"] ? 
                        <li>
                          <div>
                            <span id="camera-front">Kamera Depan</span>
                          </div>
                          <div>
                            {
                              data.spesifications["kamera-depan"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-camera-front">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["fitur-kamera"] ? 
                        <li>
                          <div>
                            <span id="camera-feature">Fitur Kamera</span>
                          </div>
                          <div>
                            {
                              data.spesifications["fitur-kamera"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-camera-feature">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["video"] ?
                        <li>
                          <div>
                            <span id="video">Video</span>
                          </div>
                          <div>
                            {
                              data.spesifications["video"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-video">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["chipset"] ?
                        <li>
                          <div>
                            <span id="soc">Chipset</span>
                          </div>
                          <div>
                            {
                              data.spesifications["chipset"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-soc">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["cpu"] ?
                        <li>
                          <div>
                            <span id="cpu-core">CPU</span>
                          </div>
                          <div>
                            {
                              data.spesifications["cpu"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-cpu-core">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["gpu"] ?
                        <li>
                          <div>
                            <span id="gpu">GPU</span>
                          </div>
                          <div>
                            {
                              data.spesifications["gpu"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-gpu">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["ukuran-body"] ?
                      <li>
                        <div>
                          <span id="size-body">Ukuran Body</span>
                        </div>
                        <div>
                          {
                            data.spesifications["ukuran-body"] && data.spesifications["ukuran-body"].map((data2, i2) => {
                              return(
                                <React.Fragment key={i2}>
                                    <span id="result-size-body">
                                      {data2.value}
                                    </span>
                                </React.Fragment>
                              )
                            })
                          }
                        </div>
                      </li>
                      : null
                    }
                    {
                      data.spesifications["resolusi-layar"] ?
                        <li>
                          <div>
                            <span id="display-resolution">Resolusi Layar</span>
                          </div>
                          <div>
                            {
                              data.spesifications["resolusi-layar"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-display-resolution">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
                    }
                    {
                      data.spesifications["rasio-layar"] ?
                        <li>
                          <div>
                            <span id="display-ratio">Rasio Layar</span>
                          </div>
                          <div>
                            {
                              data.spesifications["rasio-layar"].map((data2, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                      <span id="result-display-ratio">
                                        {data2.value}
                                      </span>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </li>
                      : null
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