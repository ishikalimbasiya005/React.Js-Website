import React from "react";

const Servicep = (props) => {
    return(
        <>
         <div className="sevice-col">
              <div className="service-img">
                <img src={props.img} alt="service-42" />
              </div>
              <div className="service-content">
                <strong>{props.name}</strong>
                <p>{props.title}</p>
              </div>
            </div>
        </>
    )
}

export default Servicep;