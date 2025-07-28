import React from "react";
import "../CSS/Style.css"

const Banner = () => {
  return (
    <>
      {/* start main-banner block */}
      <div className="banner-outer">
        <div className="banner-inner">
          <img
            src="Website/assets/a6e1838b3f726e73c284fd2799c9aa5d12ae0039_2.jpg"
            alt="banner-img"
          />
          <div className="content">
            <div className="content-inner">
              <span>smart watch</span>
              <h1>FLAT 25% OFF</h1>
              <span>At $99-Only For Today</span>
              <a href="#" className="action-btn">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="button-tag">
            <div className="button-pre">
              <div className="pre-sqare">
                <div className="pre-icon">
                  <i className="fa-solid fa-chevron-right" />
                </div>
              </div>
            </div>
            <div className="button-next">
              <div className="next-sqare">
                <div className="next-icon">
                  <i className="fa-solid fa-chevron-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end main-banner block */}
    </>
  );
};

export default Banner;
