import React from "react";  

const Productp = (props) => {
    return(
        <>
             <div className="product-col">
                <div className="product-img">
                  <img src={props.img} alt="1" />
                </div>
                <div className="product-text">
                  <h3>
                    <span>{props.name}</span>
                  </h3>
                </div>
              </div>
        </>
    )
}

export default Productp;