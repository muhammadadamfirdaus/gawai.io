import React from 'react';

const Tag = () => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <section className="card tags">
          <h2 className="subheading">Lihat Juga Berdasarkan</h2>
          <div className="wrapper">
            <li>
              <h1>
                <a href="tags.html" className="thumbnail">
                  Rumor PS5
                </a>
              </h1>
            </li>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Tag;