import React from "react";
import Categoryp from "./Shortcode/Categoryp.jsx";
import "../CSS/Style.css"
const Category = () => {
  return (
    <>
    
      {/* start category block */}
      <div className="category-outer">
        <div className="container">
          <div className="category-inner">
            <Categoryp name="Tempered Glass" title="Make your life smart" button="SHOP NOW" img="Website/assets/ad-block-3.jpg" />
            <Categoryp name="New Bands" title="A sleek-and-chic touch" button="SHOP NOW" img="Website/assets/ad-block-4.jpg"/>
            <Categoryp name="Watch Case" title="Store your watch in cover" button="SHOP NOW" img="Website/assets/ad-block-5.jpg"/>

          </div>
        </div>
      </div>
      {/* end category block */}
    </>
  );
};

export default Category;