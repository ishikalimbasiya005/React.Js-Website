import React from "react";
import "../CSS/Style.css"
const Subscribe = () => {
  return (
    <>
      {/* start subscribe block */}
      <div className="subscribe-outer">
        <div className="container">
          <div className="subscribe-inner">
            <div className="subscribe-text">
              <strong>Subscribe To Our Newsletter</strong>
            </div>
            <div className="subscribe-content">
              <p>Promotions, new products and sales.Directly to your inbox.</p>
            </div>
            <form action="#" method="post">
              <div className="subscribe-col">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                />
              </div>
              <a href="#" className="btn-subscribe">
                SUBSCRIBE
              </a>
            </form>
          </div>
        </div>
      </div>
      {/* end subscribe block */}
    </>
  );
};

export default Subscribe;   
