import React from "react";
import Brandp from "./Shortcode/Brandp.jsx";
import "../CSS/Style.css"
const Brand = () => {
  return (
    <>
      {/* start brand block */}
      <div className="brand-outer">
        <div className="brand-container">
          <div className="brand-inner">
            <div className="brand-text">
              <strong>Shop by Brands </strong>
            </div>
            <div className="brand-img">
              <Brandp img="Website/assets/4.png" />
              <Brandp img="Website/assets/5.png" />
              <Brandp img="Website/assets/6.png" />
              <Brandp img="Website/assets/7.png" />
              <Brandp img="Website/assets/8.png" />
            </div>
          </div>
        </div>
      </div>
      {/* end brand block */}
    </>
  );
};

export default Brand;
