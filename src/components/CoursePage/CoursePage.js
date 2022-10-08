import React from "react";
import Course from "../Course/Course";
// import useCourses from "../../hooks/useCourses";
import courses from "../../courseData/courseData.json"

const CoursePage = () => {
   // const [courses] = useCourses();

   return (
      <div className="courses course-page">
         <div className="container">
            <div className="header-text text-center mb-5">
               <h3>Popular Courses</h3>
               <p>Get started with your development journey on cronos.</p>
            </div>
            <div className="row">
               {courses.map((course) => (
                  <Course course={course} key={course._id}></Course>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CoursePage;
