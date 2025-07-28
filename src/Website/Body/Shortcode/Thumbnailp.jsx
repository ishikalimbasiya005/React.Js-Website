import React from "react";  

const Thumbnailp = (props) => {
    return(
        <>
         <div className="thumbnail-col">
                <div className="thumbnail-img">
                  <img src={props.img} alt="eius-tempora" />
                  <div className="thumbnail-new">
                    <div className="thumbnail-square">
                      <span>{props.name}</span>
                    </div>
                  </div>
                  <div className="thumbnail-sale">
                    <div className="thumbnail-square">
                      <span>{props.title}</span>
                    </div>
                  </div>
                </div>
                <div className="thumbnail-content">
                  <p>{props.paragraph}</p>
                  <strong>${props.price}</strong>
                  <a href="#" className="thumbnail-btn">
                    {props.button}
                  </a>
                </div>
              </div>
        </>
    )
}

export default Thumbnailp;