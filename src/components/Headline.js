import React from 'react';

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
                            <a href="detail-article.html" className="thumbnail">
                              <img src="../assets/images/macbook-pro.png" alt={data.post.title}/>
                            </a>
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
                            <a href="#" className="thumbnail">
                              <img src="../assets/images/macbook-pro.png" alt={data.post.title}/>
                            </a>
                            <h1>
                              <a href="detail-article.html">{data.post.title}</a>
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