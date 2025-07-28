import React from 'react';
import "./CSS/Style.css"

const Footer = () => {
    return (
        <>
{/* start footer block */}
       <div className="main-footer">
  {/* start footer top block */}
  <div className="footer-top">
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-text">
            <strong>Contact</strong>
          </div>
          <ul className="footer-link">
            <li>
              <strong> Address </strong>
              <p>Etrend Smartwatch<br />
                130 Street, Arizona<br />
                85002<br />
                United States </p>
            </li>
            <li>
              <strong>Mail us </strong>
              {/* serch: mail to in html & paste link */}
              <p>
                <a href="mailto:someone@example.com">admin@info.com</a>
              </p>
            </li>
            <li>
              <strong>Phone </strong>
              <p>
                <a href="tel:(123) 456 7890">(123)
                  456 7890</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-text">
            <strong>Your account </strong>
          </div>
          <ul className="footer-link">
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/login?back=identity">Personal
                info </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/login?back=history">Orders
              </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/login?back=order-slip">Credit
                slips </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/login?back=addresses">Addresses
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-text">
            <strong>Products</strong>
          </div>
          <ul className="footer-link">
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/prices-drop">Prices
                drop </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/new-products">New
                products </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/best-sales">Best
                sales </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/sitemap">Sitemap
              </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/stores">Stores
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-text">
            <strong>Our company</strong>
          </div>
          <ul className="footer-link">
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/content/1-delivery">
                Delivery </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/content/2-legal-notice">Legal
                Notice </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/content/3-terms-and-conditions-of-use">Terms
                and conditions of use </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/content/4-about-us">About
                us </a>
            </li>
            <li>
              <a href="https://demo4techies.com/etrend/presta/smartwatch/content/5-secure-payment">Secure
                payment</a>
            </li>
            <li><a href="https://demo4techies.com/etrend/presta/smartwatch/contact-us">Contact
                us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end footer top block */}

  {/* strat footer bottom block */}
  <div className="footer-bottom">
    <div className="container">
      <div className="bottom-footer-inner">
        <div className="bottom-text">
          <a href="#">© 2024 - Ecommerce software by PrestaShop™ </a>
        </div>
        <div className="bottom-icon">
          <ul>
            <li><a href="#"><i className="fa-brands fa-cc-visa" /></a></li>
            <li><a href="#"><i className="fa-brands fa-cc-paypal" /></a></li>
            <li><a href="#"><i className="fa-brands fa-cc-discover" /></a></li>
            <li><a href="#"><i className="fa-brands fa-cc-amex" /></a></li>
            <li><a href="#"><i className="fa-brands fa-cc-mastercard" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end footer bottom block */}
</div>

{/* end footer block */}

        </>
    );
}

export default Footer;