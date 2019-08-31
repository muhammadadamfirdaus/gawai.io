import React from 'react';

const Header = () => {
  return(
    <React.Fragment>
      <div className="headline">
        <div className="wrapper">
          <figure>
            <a href="detail-article.html" className="thumbnail">
              <img src="../../assets/images/macbook-pro.png" alt="Macbook Pro" itemprop="image"/>
            </a>
            <hgroup>
              <div className="wrapper">
                <h4 className="author" itemprop="author">
                  <a href="#">
                    Muhammad Adam Firdaus
                  </a>
                </h4>
                <h1 className="title" itemprop="headline">
                  Preview Design MacBook Pro 2020
                </h1>
                <nav className="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                  <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="#" itemtype="https://schema.org/Thing" itemprop="item">
                      <span itemprop="name">Apple</span>
                    </a>
                    <meta itemprop="position" content="1" />
                  </li>
                  <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="#" itemtype="https://schema.org/Thing" itemprop="item">
                      <span itemprop="name">Macbook Pro</span>
                    </a>
                    <meta itemprop="position" content="2" />
                  </li>
                </nav>
              </div>
            </hgroup>
          </figure>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;