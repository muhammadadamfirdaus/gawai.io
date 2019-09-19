import React from 'react';
import {Link} from 'react-router-dom';

const Related = (props) => {
  return(
    <React.Fragment>
      {
        props.data.map((data, i) => {
          return(
            <section className="news" key={i}>
              <h2 className="subheading">
                Seputar <span id="name-tags" data-tags="Apple">{data.brand.name}</span>
              </h2>
              <div className="wrapper">
                <section className="card list">
                  <div className="wrapper">
                    {
                      data.newPosts.map((post, i2) => {
                        return(
                          <li key={i2}>
                            <div className="wrapper">
                              <a className="thumbnail" href="#">
                                <img src="../../assets/images/macbook-pro.png" alt={post.title}/>
                              </a>
                              <h1>
                                <Link to={`/post/detail/${post.slug}`}>{post.title}</Link>
                              </h1>
                            </div>
                          </li>
                        )
                      })
                    }
                  </div>
                </section>
              </div>
            </section>
          )
        })
      }
    </React.Fragment>
  );
}

export default Related;