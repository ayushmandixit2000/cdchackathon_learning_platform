import React from "react";
import "./DevCom.scss";
import { Link } from "react-router-dom";
import notFound from "../../images/undraw_Taken_re_yn20.svg";

const DevCom = () => {
   return (
      <div className="dev-com">
         
         <img class = "div_img" src="https://media.istockphoto.com/vectors/community-banner-cartoon-people-standing-near-giant-word-talking-vector-id1211824965?k=20&m=1211824965&s=170667a&w=0&h=zD1PBiAFWqM_mSHoAMr0rGm8PUV1YPFSCAxk6K8vbEg=" alt="dev-icon"></img>
         <div className="container text-center">
            <br></br>
            <h2>Welcome to Developer community</h2>
            <h5>Ask relevant questions here and be an active member of the community to further your own growth as a developer</h5>
         </div>   
         <div class="parent">
               <div class="authors">
                  <div class="username"><u>User1298245512</u></div>
                  <div>Level 1 Developer</div>
                  <div>Posts: <u>45</u></div>
                  <div>Points: <u>4586</u></div>
               </div>
               <div class="content1">
                  <h4>Is there any way that this line of code can be improved?</h4>
                  pragma solidity ^0.8.13;<br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp; contract HelloWorld <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string public greet = "Hello World!";
                  <br></br>
                  <br></br>
                  <button type="button" class = "button">
                  Like 👍
                  </button>
                  &nbsp;
                  <button type="button" class = "button">
                  Comment 💬
                  </button>
               </div>
               <hr></hr>
         </div>
         <div class="spacing"></div>        

         <div class="parent">
               <div class="authors">
                  <div class="username"><u>User8219243451</u></div>
                  <div>Level 2 Developer</div>
                  <div>Posts: <u>455</u></div>
                  <div>Points: <u>4586</u></div>
               </div>
               <div class="content1" >
                  <h4>I've used nested for loops to create unique sub-contracts, is there a better way to do this? </h4> 
                  Code link <a href = "url"><u>here.</u></a> <br></br>        
                  So I've recently tried deploying smart contracts on the Cronos network as part of my personal project. However, one
                  area that I seem to be facing difficulties in is deploying the smart contract on the chain using for loops. I aim to 
                  deploy multiple smart contracts consecutively as part of a single code such that different names in my array are assigned
                  a singular block each. Please help with this matter!
                  <br></br>
               <button type="button" class = "button">
               Like 👍
            </button>
            &nbsp;
            <button type="button" class = "button">
            Comment 💬
            </button>
         </div>
            </div> 
         <div class="spacing"></div>
         <div class="parent">
               <div class="authors">
                  <div class="username" ><u>User8219243451</u></div>
                  <div>Level 4 developer</div>
                  <div>Posts: <u>455</u></div>
                  <div>Points: <u>4586</u></div>
               </div>
               <div class="content1">
                  <h4>Here is the link to my first DApp, all suggestions are welcomed!</h4>
                  <a href="url"> <u>Healthcare Data Management.</u> </a> <br></br>
                  Healthcare Data Management leverages blockchain technology to solve an ongoing problem regarding the issues surrounding
                  the sharing of medical data. Through the use of blockchain technology, we aim to ensure that encrypted information
                  can be shared cross-border which allows us to easily between medical professionals. The reason for doing so is in order
                  to ensure that travellers in different countries can easily provide access to medical records to doctors in other countries
                  if needed.
                  <br></br>
               <button type="button" class = "button">
               Like 👍
            </button>
            &nbsp;
            <button type="button" class = "button">
            Comment 💬
            </button>
               </div>
         </div>
         <hr></hr>
         <iframe src="https://cronos.org/community" width="100%" height="1000">
  <p>Your browser does not support iframes.</p>
</iframe>
      </div>
   );
};

export default DevCom;
