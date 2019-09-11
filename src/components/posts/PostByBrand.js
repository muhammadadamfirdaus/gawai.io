import React from 'react';
import {Link} from 'react-router-dom';

const PostByBrand = (props) => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <h2 className="subheading">Brand</h2>
        {
          props.data && props.data.map((data, i) => {
            return(
              <React.Fragment key={i}>
                <section className="card flex brand">
                  <div className="wrapper head">
                    <h1>
                      <Link to={`/product/brand/${data.brand.slug}`}>
                        {data.brand.name}
                      </Link>
                    </h1>
                    <h2 className="more">
                      <Link to={`/product/brand/${data.brand.slug}`}>
                        Lihat Semua
                      </Link>
                    </h2>
                  </div>
                  <div className="wrapper">
                    {
                      data.products.map((data2, i2) => {
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <div className="wrapper">
                                <Link className="thumbnail" to="/post/detail-article">
                                  <img src="../../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                                </Link>
                                <h1>
                                  <Link className="thumbnail" to="/post/detail-article">
                                    {data2.name}
                                  </Link>
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
            )
          })
        }
      </div>
    </React.Fragment>
  );
}

export default PostByBrand;