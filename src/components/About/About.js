import React from "react";
import aboutImg from "../../images/about-us.jpeg";
import FeatureSection from "../FeatureSection/FeatureSection";
import "./About.scss";

const About = () => {
   return (
      <>
         <div className="about">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6 pe-md-5 mb-5 mb-md-0">
                     <img className="img-fluid shadow" src="https://en.cryptonomist.ch/wp-content/uploads/2022/06/crypto-apple-pay-1140x600.jpeg" />
                  </div>
                  <div className="col-md-6">
                     <div className="about-info">
                        <h3>Know About The Cronos Network</h3>
                        <p>
                        First EVM-compatible chain built on Cosmos
                        </p>
                        <ul>
                           <li>Easy Portability: An easy-to-use platform to rapidly port apps from Ethereum and EVM-compatible chains</li>
                           <li>Funding: The CRO EVM Fund grants up to USD 1 million per project</li>
                           <li>User Base: Access to our rapidly-growing global user base of over 10 million </li>
                           <li>EVM compatible: Built on Ethermint, which supports rapid porting of apps & smart contracts from Ethereum and other EVM-compatible chains.</li>
                        </ul>
                        <p>
                        Get Instant DApp Portability with EVM Support
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <FeatureSection />
      </>
   );
};

export default About;
