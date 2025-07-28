import React from "react";
import "../CSS/Style.css"
const Deal = () => {
  return (
    <>
      {/* start deal section */}
      <div className="deal-outer">
        <div className="container">
          <div className="deal-inner">
            <div className="deal-1">
              <div className="img">
                <img src="Website/assets/ad-block-1.jpg" alt="ad-block-1" />
              </div>
              <div className="deal-content">
                <div className="deal-content-inner">
                  <strong>BEST DEAL</strong>
                  <p>
                    Edge to edge full <br />
                    screen coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="deal-1">
              <div className="img">
                <img src="Website/assets/ad-block-2.jpg" alt="ad-block-2" />
              </div>
              <div className="deal-content">
                <div className="deal-content-inner">
                  <strong>NEW ARRIVAL</strong>
                  <p>
                    best carbon pollynet <br />
                    beal with samrt dial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end deal section */}
    </>
  );
};

export default Deal;
