import React from "react";
import "./CourseSection.scss";
import Course from "../Course/Course";
// import useCourses from "../../hooks/useCourses";
import courses from "../../courseData/courseData.json"

const CourseSection = () => {
   // const [courses] = useCourses();

   return (
      <div className="course-section">
         <div className="container">
            <div className="header-text">
               <h3>Popular Courses</h3>
               <p>Get started with your development journey on cronos.</p>
            </div>
            <div className="row">
               {courses.slice(0, 6).map((course) => (
                  <Course course={course} key={course._id}></Course>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CourseSection;
