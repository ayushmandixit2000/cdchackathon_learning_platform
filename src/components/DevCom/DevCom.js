import React from "react";
import "./DevCom.scss";
import { Link } from "react-router-dom";
import notFound from "../../images/undraw_Taken_re_yn20.svg";

const DevCom = () => {
   return (
      <div className="dev-com">
         
         <div className="container text-center">
         <h4> Get help from the community & Answer to earn</h4>
            <iframe src="https://cronos.org/community" width="100%" height="1000">
  <p>Your browser does not support iframes.</p>
</iframe>
            
         </div>
      </div>
   );
};

export default DevCom;
