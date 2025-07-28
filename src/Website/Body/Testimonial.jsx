import React from "react";
import Testimonialp from "./Shortcode/Testimonialp";
import "../CSS/Style.css"

const Testimonial = () => {
  return (
    <>
      {/* start testimonial block */}
      <div className="testimonial-outer">
        <div className="testimonial-container">
          <div className="testimonial-inner">
            <div className="testimonial-text">
              <strong>Testimonial</strong>
            </div>
            <div className="testimonial-row">

            <Testimonialp img="Website/assets/tetimonial-img-1.jpg" paragraph=" duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolor eu fugiat nulla pariature." title="John Doe" name="Customer" />
            <Testimonialp img="Website/assets/tetimonial-img-2.jpg" paragraph=" duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolor eu fugiat nulla pariature." title="Sarah Enderson" name="Customer" />
            <Testimonialp img="Website/assets/tetimonial-img-3.jpg" paragraph=" duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolor eu fugiat nulla pariature." title="James paulson" name="Customer" />

            </div>
            <div className="button-tag">
              <div className="button-pre">
                <div className="pre-sqare">
                  <div className="pre-icon">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="button-next">
                <div className="next-sqare">
                  <div className="next-icon">
                    <a href="#">
                      <i className="fa-solid fa-chevron-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end testimonial block */}
    </>
  );
};

export default Testimonial;
