import React from "react";

export const Pic = ({ name, pic, }) => {

    console.log("pic",pic)
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {/* <a href={largeImage} title={title} data-lightbox-gallery="gallery1"> */}
          <div className="hover-text">
            {/* <h4>{text}</h4> */}
          </div>
          <img src={pic}  style={{width:100, marginLeft:50}} className="img-responsive" />
        {/* </a> */}
      </div>
    </div>
  );
};
