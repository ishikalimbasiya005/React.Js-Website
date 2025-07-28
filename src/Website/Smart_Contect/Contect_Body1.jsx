import React from "react";
import "../CSS/Style-Contectus.css"
const Contect_Body1 = () => {
  return (
    <>
      <div className="main-body">
        <div className="information-outer">
          <div className="container">
            <div className="information-inner">
              <div className="information">
                <div className="start-information">
                  <div className="information-title">
                    <h4>Store information</h4>
                  </div>
                  
                  <div className="information-content">
                    <div className="information-block">
                      <div className="information-icon">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="information-detail">
                        Etrend Smartwatch <br />
                        130 Street, Arizona <br />
                        85002 <br />
                        United States{" "}
                      </div>
                    </div>
                    <div className="line-block">
                      <div className="information-block">
                        <div className="information-icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <div className="information-detail">
                          Call us: <br />
                          (123) 456 7890{" "}
                        </div>
                      </div>
                    </div>
                    <div className="line-block">
                      <div className="information-block">
                        <div className="information-icon">
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="information-detail">
                          Email us: <br />
                          admin@info.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* start 2-right part */}
              <div className="information-contact">
                <div className="content-title">
                  <h4>Contact us</h4>
                </div>
                <div className="content">
                  <form action="#">
                    <div className="subject">
                      <label htmlFor="subject" className="first">
                        Subject
                      </label>
                      <div className="inputs">
                        <select>
                          <option selected value="Customer-Service">
                            {" "}
                            Customer Service
                          </option>
                          <option value="Webmaster">Webmaster</option>
                        </select>
                      </div>
                    </div>
                    <div className="subject">
                      <label htmlFor="email" className="second">
                        Email address
                      </label>
                      <div className="inputs">
                        <input
                          type="text"
                          placeholder="your@email.com"
                          className="email"
                        />
                      </div>
                    </div>
                    <div className="subject">
                      <label htmlFor="Attachment" className="third">
                        Attachment
                      </label>
                      <div className="inputs-file">
                        <input type="text" id="fileName" readOnly />
                        <label htmlFor="fileInput" className="file-button">
                          Choose File
                        </label>
                        <input
                          type="file"
                          id="fileInput"
                          onchange="updateFileName(this)"
                        />
                      </div>
                      <span className="optional">optional</span>
                    </div>
                    <div className="subject">
                      <label htmlFor="msg" className="fourth">
                        Message
                      </label>
                      <div className="inputs">
                        <textarea
                          name="message"
                          row={3}
                          placeholder="How can we help?"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="input-button">
                      <input type="submit" defaultValue="SEND" />
                    </div>
                  </form>
                </div>
              </div>
              {/* end 2-right part */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect_Body1;
