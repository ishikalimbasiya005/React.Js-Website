import React from "react";

const Collectionp = (props) => {
    return(
        <>
              <div className="product-img">
                <div className="product-col">
                  <img src={props.img} alt="perspiciatis-unde" />
                  <div className="product-new">
                    <div className="product-square">
                      <span>{props.name}</span>
                    </div>
                  </div>
                  <div className="product-sale">
                    <div className="product-square">
                      <span>{props.title}</span>
                    </div>
                  </div>
                </div>

                <div className="product-content">
                  <p>{props.paragraph}</p>
                  <strong>${props.price}</strong>
                  <a href="#" className="proudct-btn">
                    ADD TO CART{" "}
                  </a>
                </div>
              </div>

              {/* <div className="product-img">
                <div className="product-col">
                  <img src="assects/rem-aperiam.jpg" alt="rem-aperiam" />
                  <div className="product-new">
                    <div className="product-square">
                      <span>{props.name}</span>
                    </div>
                  </div>
                </div>

                <div className="product-content">
                  <p>{props.paragraph}</p>
                  <strong>${props.price}</strong>
                  <a href="#" className="proudct-btn">
                    ADD TO CART{" "}
                  </a>
                </div>
              </div> */}
              
        </>
    )
}

export default Collectionp;