import React, { useState } from "react";

import Rating from "react-rating";
// import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBookOpen,
   faClock,
   faBookReader,
   faLanguage,
   faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./CourseDetails.scss";
// import useCourses from "../../hooks/useCourses";
import courses from "../../courseData/courseData.json"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { contractABI, contractAddress } from "../contract";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);
const CourseDetails = () => {
   // const [courses] = useCourses();
   // const [details, setDetails] = useState({});
   const { handleSubmit, reset } = useForm();
   const { courseId } = useParams();
   // const { user } = useAuth();
   const history = useHistory();
   const { isInitialized, isAuthenticated, logout, user } = useMoralis();
   const [name, setName] = useState("");
   const [nftDescription, setDescription] = useState("");
   const [file, setFile] = useState(null);


   const {
      title,
      category,
      duration,
      lessons,
      price,
      rating,
      review,
      image,
      description,
      instructor,
      instructorImage,
      language,
      video,
   } = courses[courseId];


   const onSubmit = async (e) => {
      e.preventDefault();
      try {
        // Attempt to save image to IPFS
        const file1 = new Moralis.File(file.name,file);
        await file1.saveIPFS();
        const file1url = file1.ipfs();
        // Generate metadata and save to IPFS
        const metadata = {
          name,
          nftDescription,
          image: file1url,
        };
        const file2 = new Moralis.File(`metadata.json`, {
          base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
        });
        await file2.saveIPFS();
        const metadataurl = file2.ipfs();
        // Interact with smart contract
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const response = await contract.methods
          .mint(metadataurl)
          .send({ from: user.get("ethAddress") });
        // Get token id
        const tokenId = response.events.Transfer.returnValues.tokenId;
        // Display alert
        alert(
          `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        );
      } catch (err) {
        console.error(err);
        alert("An error occured!");
      }
    };

   return (
      <div className="details-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="detail-box">
                     <h3 className="title">{title}</h3>
                     <p className="category">{category}</p>
                     <div className="instructor">
                        <div className="box">
                           <img src={instructorImage} alt="" />
                        </div>
                        <div className="box">
                           <h5>Created by</h5>
                           <p className="mb-0">{instructor}</p>
                        </div>

                        <div className="box">
                           <h5>Reviews</h5>
                           <Rating
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                              initialRating={3.9}
                              readonly
                           ></Rating>
                           <p className="review-text">
                              {rating} <span>({review} reviews)</span>
                           </p>
                        </div>
                     </div>
                     <div className="bottom-area">
                        <ul className="indicator">
                           <li className="active">Overview</li>
                           <li>Curriculum</li>
                           <li>Instructor</li>
                           <li>Reviews</li>
                        </ul>
                        <div className="indicator-details">
                           <h4>Course Description</h4>
                           <p>{description}</p>
                           <iframe width="840" height="472.5" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ps-lg-5">
                  <div className="purchase-course-box">
                     <div className="img-box">
                        <img className="img-fluid" src={image} alt="" />
                     </div>
                     <div className="info-box">
                     <button className="btn-black">
                                 Enroll
                                 </button>
                        <h4 className="price">Upload a snippet of your code!{price}</h4>
                        {isInitialized && isAuthenticated ? (
                           <form
                              onSubmit={onSubmit}
                              className="mb-0 text-start"
                           >

                              <div>
                              
                              <input
                                 type="text"
                                 className="border-x-4 rounded border p-2 text-lg border-black"
                                 value={name}
                                 placeholder="Project Name"
                                 onChange={(e) => setName(e.target.value)}
                              />
                              </div>
                              <div className="mt-3">
                              <input
                                 type="text"
                                 className="rounded border p-2 text-lg border-black"
                                 value={nftDescription}
                                 placeholder="Description"
                                 onChange={(e) => setDescription(e.target.value)}
                              />
                              </div>
                              
                              <div className="mt-3">
                              <input
                                 type="file"
                                 className="border-[1px] p-0 text-lg border-black"
                                 onChange={(e) => setFile(e.target.files[0])}
                           
                              />

                                 <center>
                                 <br></br>
                                 <button className="btn-black" onClick="#0">
                                 You can now redeem your NFT below!
                                 </button>
                                 
                                 </center>

                              </div>
                              

                              <iframe src="https://mint.zerocodenft.com/Tabs?siteId=75feb000-4984-40be-980d-08daa88b75e3" width="100%" height="500"></iframe>
                           </form>
                           
                        ) : (
                           <button
                           >
                              
                           </button>
                        )}
                        <ul>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faClock}
                                 />
                                 Duration
                              </span>
                              <span>{duration}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookOpen}
                                 />
                                 lessons
                              </span>
                              <span>{lessons}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookReader}
                                 />
                                 Enrolled
                              </span>
                              <span>0</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faLanguage}
                                 />
                                 Language
                              </span>
                              <span>{language}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faCertificate}
                                 />
                                 Certificate
                              </span>
                              <span>yes</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
   
};

export default CourseDetails;
