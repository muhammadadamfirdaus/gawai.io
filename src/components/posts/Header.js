import React from 'react';

const Header = (props) => {
  return(
    <React.Fragment>
      <div className="headline">
        <div className="wrapper">
          <figure>
            <a href="detail-article.html" className="thumbnail">
              <img src="../../assets/images/macbook-pro.png" alt="Macbook Pro" itemProp="image"/>
            </a>
            <hgroup>
              {
                props.data.map((data, i) => {
                  return(
                    <React.Fragment key={i}>
                      <div className="wrapper">
                        <h4 className="author" itemProp="author">
                          <a href="#">{data.user.name}</a>
                        </h4>
                        <h1 className="title" itemProp="headline">{data.post.title}</h1>
                        <nav className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
                          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="#" itemType="https://schema.org/Thing" itemProp="item">
                              <span itemProp="name">Apple</span>
                            </a>
                            <meta itemProp="position" content="1" />
                          </li>
                          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="#" itemType="https://schema.org/Thing" itemProp="item">
                              <span itemProp="name">Macbook Pro</span>
                            </a>
                            <meta itemProp="position" content="2" />
                          </li>
                        </nav>
                      </div>
                    </React.Fragment>
                  )
                })
              }
            </hgroup>
          </figure>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;