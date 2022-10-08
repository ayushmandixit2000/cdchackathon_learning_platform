import React from "react";
import "./GetApp.scss";
import android from "../../images/android.svg";
import ios from "../../images/ios.svg";

const GetApp = () => {
   return (
      <div className="get-app-section">
         <div className="container">
            <div className="header-text text-center">
               <h3>get our app on</h3>
               <p>Download the app from both play and app store</p>
            </div>
            <div className="app-box text-center">
               <a
                  href="https://play.google.com/store/apps/details?id=co.mona.android&hl=en_SG&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={android} alt="" />
               </a>
               <a
                  href="https://apps.apple.com/sg/app/crypto-com-buy-bitcoin-ether/id1262148500"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={ios} alt="" />
               </a>
            </div>
         </div>
      </div>
   );
};

export default GetApp;
