import React from "react";
import "../CSS/Men.css"

const Smart_bodyp = (props) => {
  return (
    <>
      
        <div className="best-product-imges">
          <div className="best-product-img">
            <img src={props.img} alt="perspiciatis-unde" />
            <span>{props.name}</span>
            <span className="sale">{props.title}</span>
          </div>
          <div className="best-product-content">
            <a href="#">{props.email}</a>
            <span>${props.price}</span>
            <div className="button">
              <button>{props.button}</button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Smart_bodyp;
