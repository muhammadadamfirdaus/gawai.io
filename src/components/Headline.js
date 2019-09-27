import React from 'react';
import {Link} from 'react-router-dom'

const Headline = (props) => {
  return(
    <React.Fragment>
      <div className="headline">
          <div className="wrapper">
            <div className="swiper-container big">
              <div className="swiper-wrapper">
                {
                  props.data.map((data, i) => {
                    return(
                      <React.Fragment key={i}>
                        <div className="swiper-slide">
                          <div className="wrapper">
                            <Link to={`/post/detail/${data.post.slug}`} className="thumbnail">
                              <img src="../assets/images/macbook-pro.png" alt={data.post.title}/>
                            </Link>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </div>
            <div className="swiper-container slide-headline small">
              <div className="swiper-wrapper">
                {
                  props.data.map((data, i) => {
                    return(
                      <React.Fragment key={i}>
                        <div className="swiper-slide" data-slide={i}>
                          <div className="wrapper">
                            <Link to={`/post/detail/${data.post.slug}`} className="thumbnail">
                              <img src="../assets/images/macbook-pro.png" alt={data.post.title}/>
                            </Link>
                            <h1>
                              <Link to={`/post/detail/${data.post.slug}`}>{data.post.title}</Link>
                            </h1>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Headline;