import React from 'react';
import {Link} from 'react-router-dom';

const Related = () => {
  return(
    <React.Fragment>
      <section className="news">
        <h2 className="subheading">
          Seputar <span id="name-tags" data-tags="Apple">Apple</span>
        </h2>
        <div className="wrapper">
          <section className="card list">
            <div className="wrapper">
              <li>
                <div className="wrapper">
                  <a className="thumbnail" href="#">
                    <img src="../../assets/images/macbook-pro.png" alt="Macbook Pro"/>
                  </a>
                  <h1>
                    <a href="detail-article.html">Preview Design MacBook Pro 2020</a>
                  </h1>
                </div>
              </li>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Related;