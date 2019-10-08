import React from 'react';
import {Link} from 'react-router-dom';
import {globalUrl} from '../../actions/config';

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
                      data.newPosts.map((data2, i2) => {
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <div className="wrapper">
                                <Link className="thumbnail" to={`/post/detail/${data2.slug}`}>
                                  <img src={`${globalUrl}${data2.thumbnail}`} alt={data2.title}/>
                                </Link>
                                <h1>
                                  <Link className="thumbnail" to={`/post/detail/${data2.slug}`}>
                                    {data2.title}
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