import React from "react";
import  Servicep from "./Shortcode/Servicep";
import "../CSS/Style.css"
const Service = () => {
  return (
    <>
      {/* start service block */}
      <div className="service-outer">
        <div className="container">
          <div className="service-inner">

           <Servicep img="Website/assets/service-42.png" name="Online Support" title="24 hours a day" />
           <Servicep img="Website/assets/service-43.png" name="Secure Payments" title="Secure payment with PEV" />
           <Servicep img="Website/assets/service-44.png" name="Refund Policy" title="Return within 30 days" />
           <Servicep img="Website/assets/service-45.png" name="Free Shipping" title="on all orders over $100" />

          </div>
        </div>
      </div>
      {/* end service block */}
    </>
  );
};

export default Service;
