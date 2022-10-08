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
   } = courses[courseId];

   // const onSubmit = (data) => {
   //    data.image = image;
   //    data.title = title;
   //    data.price = price;
   //    data.address = user.get("ethAddress");
   //    data.quantity = 1;

   //    fetch(`https://polar-lake-68435.herokuapp.com/addCartOrder`, {
   //       method: "POST",
   //       headers: { "Content-Type": "application/json" },
   //       body: JSON.stringify(data),
   //    })
   //       .then((res) => res.json())
   //       .then((result) => {
   //          if (result.insertedId) {
   //             history.push("/cart");
   //             reset();
   //          } else {
   //             history.push("/login");
   //          }
   //       });
   //    console.log(data);
   // };

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
                        <h4 className="price">${price}</h4>
                        {isInitialized && isAuthenticated ? (
                           <form
                              onSubmit={onSubmit}
                              className="mb-0 text-start"
                           >

                              <div>
                              <input
                                 type="text"
                                 className="border-[1px] p-2 text-lg border-black w-full"
                                 value={name}
                                 placeholder="Name"
                                 onChange={(e) => setName(e.target.value)}
                              />
                              </div>
                              <div className="mt-3">
                              <input
                                 type="text"
                                 className="border-[1px] p-2 text-lg border-black w-full"
                                 value={nftDescription}
                                 placeholder="Description"
                                 onChange={(e) => setDescription(e.target.value)}
                              />
                              </div>
                              <div className="mt-3">
                              <input
                                 type="file"
                                 className="border-[1px] p-2 text-lg border-black"
                                 onChange={(e) => setFile(e.target.files[0])}
                              />
                              </div>
                              <button type="submit" className="btn-black">
                                 Claim your NFT
                              </button>
                           </form>
                        ) : (
                           <button
                              onClick={() => history.push("/login")}
                              className="btn-black"
                           >
                              Enroll
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
