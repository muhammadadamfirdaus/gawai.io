import React from 'react';
import renderHTML from 'react-render-html';

const Detail = (props) => {
  return(
    <React.Fragment>
      <article>
        <section className="text">
          <div className="wrapper">
            {
              props.data.map((data, i) => {
                return(
                  <React.Fragment key={i}>
                    {renderHTML(data.post.body)}
                  </React.Fragment>
                )
              })
            }
          </div>
        </section>
      </article>
    </React.Fragment>
  );
}

export default Detail;