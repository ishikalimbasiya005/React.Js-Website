import React from "react";
import Smart_bodyp from "./Smart_bodyp";

import "../CSS/Men.css"

const Smart_Body = () => {
  return (
    <>
      <div className="best-product-outer">
        <div className="container">
          <div className="best-product-inner">
            {/* start left part */}
            <div className="best-product-col">
              <div className="best-product-row-1">
                <ol>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Men</a>
                  </li>
                </ol>
              </div>
              <div className="best-product-men">
                <p>
                  <a href="#">MEN</a>
                </p>
              </div>
              <div className="best-product-img">
                <img
                  src="Website/assets/advertising.jpg"
                  alt="advertising"
                />
              </div>
            </div>
            {/* end left part */}
            
            {/* start right part */}
            <div className="best-product-col-1">
              {/* start 1 block */}
              <div className="best-product-men2">
                <h1>Men</h1>
                <p>
                  Ut enim ad minim veniam. quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              {/* end 1 block */}
              {/* start 2 block */}
              <div className="best-product-lists">
                <div className="window">
                  <div className="window-icon" />
                </div>
                <div className="menu">
                  <div className="menu-icon" />
                </div>
                <p>There are 16 products.</p>
                <form action="#">
                  <label>Sort by:</label>
                  <div className="dropdown-menu">
                    <select defaultValue="Relevance">
                      <option value="Relevance">
                        Relevance
                      </option>
                      <option>Best Sellers</option>
                      <option>Name ,A to Z</option>
                      <option>Name ,Z to A</option>
                      <option>Price, Low to High</option>
                      <option>Price ,High to Low</option>
                    </select>
                    <div className="drop-down-arrow" />
                  </div>
                </form>
              </div>
              {/* end 2 block */}

              {/* start 3 block */}
              <div className="best-products-content">
             <Smart_bodyp img="Website/assets/perspiciatis-unde.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
             <Smart_bodyp img="Website/assets/omnis-iste.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
             <Smart_bodyp img="Website/assets/accusantium-dolore.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
             </div>
              {/* end 3 block */}

              {/* start4 block */}
              <div className="best-products-content">
              <Smart_bodyp img="Website/assets/rem-aperiam.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/adipisci-velit.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/numquam-eius.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />

              </div>
              {/* end 4 block */}

              {/* start 5 block */}
              <div className="best-products-content">
              <Smart_bodyp img="Website/assets/modi-tempora.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/dolore-magnam.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/voluptas-nulla.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />

              </div>
              {/* end 5 block */}

              {/* start 6 block */}
              <div className="best-products-content">
              <Smart_bodyp img="Website/assets/iure-reprehenderit.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/dolore-magnam.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />
              <Smart_bodyp img="Website/assets/architecto-beatae.jpg" name="NEW" title="ON SALE!" email="perspiciatis unde" price="99.00" button="ADD TO CART" />

              </div>
              {/* end 6 block */}
            </div>
            {/* end right part */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Smart_Body;
