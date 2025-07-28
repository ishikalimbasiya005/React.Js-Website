import React  from "react";

const Categoryp = (props) => {
    return(
        <>
         <div className="category-block-1">
              <img src={props.img} alt="ad-block-3" />
              <div className="category-text">
                <div className="category-text-inner">
                  <strong>{props.name}</strong>
                  <p>{props.title}</p>
                  <a href="#" className="cat-btn">
                    {props.button}
                  </a>
                </div>
              </div>
            </div>
        </>
    )
}

export default Categoryp;