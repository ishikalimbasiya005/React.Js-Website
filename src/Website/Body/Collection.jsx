import React from "react";
import Collectionp from "./Shortcode/Collectionp.jsx";
import "../CSS/Style.css"
const Collection = () => {
  return (
    <>
      <div className="prouduct-outer">
        <div className="container">
          <div className="product-inner">
            <div className="product-text">
              <strong>Featured Collection</strong>
            </div>

            <div className="product-row">
              
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/perspiciatis-unde.jpg"/>
              <Collectionp name="NEW"  title="ON SALE!" paragraph="Omnis Iste" price="99.00" img="Website/assets/rem-aperiam.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/accusantium-dolore.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/omnis-iste.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/adipisci-velit.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Omnis Iste" price="99.00" img="Website/assets/numquam-eius.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/modi-tempora.jpg"/>
              <Collectionp name="NEW" title="ON SALE!" paragraph="Perspiciatis Unde" price="99.00" img="Website/assets/dolore-magnam.jpg"/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
