import React from "react";
import Productp from "./Shortcode/Productp";
import "../CSS/Style.css"
const Product = () => {
  return (
    <>
      {/* start product block */}
      <div className="product-outer">
        <div className="product-container">
          <div className="product-inner">
            <div className="product-title">
              <strong>Finds Things You'll Love</strong>
            </div>
            <div className="product-img-1">
                 <Productp name="shop" img="Website/assets/1.png"/>
                 <Productp name="sale" img="Website/assets/2.png" />
                 <Productp name="fashion" img="Website/assets/3.png"/>
                 <Productp name="mobiles" img="Website/assets/27_thumb.png"/>
                 <Productp name="sports" img="Website/assets/37_thumb.png"/>
                 <Productp name="jewellery" img="Website/assets/8_thumb.png" />
            </div>
          </div>
        </div>
      </div>
      {/* end product block */}
    </>
  );
};

export default Product;
