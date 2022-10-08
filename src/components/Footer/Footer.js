import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import paymentGateway from "../../images/online-payment.png";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-3">
                  <h3 className="logo mb-3">cronoslearn</h3>
                  <p>
                     cronoslearn is a platform where developers can learn how to build on the cornos chain and get rewarded at the same time
                  </p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h5>Useful Links</h5>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/home">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/courses">
                           Courses
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/about">
                           About Us
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/contact">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h5>Contact Us</h5>
                  <p>
                     North Hill Institute <br /> Nanyang Crescent,
                     NTU.
                  </p>
                  <p>6666 7777</p>
                  <p>northhillinstitute@gmail.com</p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <img className="img-fluid" src={paymentGateway} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
