import React from "react";
import Thumbnailp from "./Shortcode/Thumbnailp";
import "../CSS/Style.css"

const Thumbnail = ({ image, title, price }) => {
  return (
    <>
      {/* start thumbnail block */}
      <div className="thumbnail-outer">
        <div className="container">
          <div className="thumbnail-inner">
            <div className="thumbnail-text">
              <strong>New Products</strong>
            </div>
            <div className="thumbnail-row">
             
                  <Thumbnailp name="NEW" title="ON SALE!" paragraph= "Eius Tempora" price="379.00" button="ADD TO CART" img="Website/assets/eius-tempora.jpg"/>
                  <Thumbnailp name="NEW" title="ON SALE!" paragraph= "Porro Quisquam" price="319.00" button="ADD TO CART" img="Website/assets/porro-quisquam.jpg"/>
                  <Thumbnailp name="NEW" title="ON SALE!" paragraph= "Architecto Beatae" price="359.00" button="ADD TO CART" img="Website/assets/architecto-beatae.jpg"/>
                  <Thumbnailp name="NEW" title="ON SALE!" paragraph= "Reprehenderit Beatae" price="349.00" button="ADD TO CART" img="Website/assets/reprehenderit-beatae.jpg"/>

            </div>
            <div className="button-tag">
              <div className="button-pre">
                <div className="pre-sqare">
                  <div className="pre-icon">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="button-next">
                <div className="next-sqare">
                  <div className="next-icon">
                    <a href="#">
                      <i className="fa-solid fa-chevron-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end thumbnail block */}
    </>
  );
};


export default Thumbnail;   