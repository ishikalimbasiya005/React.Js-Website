import React from "react";

const Testimonialp = (props) => {
    return(
        <>
        <div className="testimonial-col">
                <img src ={props.img} alt="tetimonial-img-1"
                />
                <div className="testimonial-content">
                  <p className="testimonial-pre">{props.paragraph}</p>
                  <strong>{props.title}</strong>
                  <p>{props.name}</p>
                </div>
              </div>
        </>
    )
}

export default Testimonialp;