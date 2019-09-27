import React from 'react';

const Header = (props) => {
  return(
    <React.Fragment>
      {
        props.data.map((data, i) => {
          return(
            <div class="headline">
              <div class="wrapper">
                <figure>
                  <a href="detail-article.html" class="thumbnail">
                    <img src="../../assets/images/logo-apple.png" alt="Apple Logo"/>
                  </a>
                  <hgroup>
                    <div class="wrapper">
                      <h1 class="title">
                        {data.brand.name}
                      </h1>
                    </div>
                  </hgroup>
                </figure>
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  );
}

export default Header;