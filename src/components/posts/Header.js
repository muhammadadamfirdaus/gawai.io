import React from 'react';
import {globalUrl} from '../../actions/config';

const Header = (props) => {
  return(
    <React.Fragment>
      {
        props.data.map((data, i) => {
          return(
            <React.Fragment key={i}>
              <div className="headline">
                <div className="wrapper">
                  <figure>
                    <a href="detail-article.html" className="thumbnail">
                      <img src={globalUrl+data.post.thumbnail} alt="Macbook Pro" itemProp="image"/>
                    </a>
                    <hgroup>
                        <div className="wrapper">
                          <h4 className="author" itemProp="author">
                            <a href="#">{data.user.name}</a>
                          </h4>
                          <h1 className="title" itemProp="headline">{data.post.title}</h1>
                          <nav className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
                            {
                              data.rubrics.map((rubric, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                      <a href="#" itemType="https://schema.org/Thing" itemProp="item">
                                        <span itemProp="name">{rubric.name}</span>
                                      </a>
                                      <meta itemProp="position" content={i2} />
                                    </li>
                                  </React.Fragment>
                                )
                              })
                            }
                          </nav>
                        </div>
                    </hgroup>
                  </figure>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  );
}

export default Header;