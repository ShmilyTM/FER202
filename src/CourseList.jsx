import React from "react";
import "./App.css";

//Course Name
/*const CourseList = () => {
  const courses = ["React", "ReactNative", "NodeJs"]; 

  return (
    <div>
      <h2>Course names</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};
//Hello React
*/ 
/*const CourseList = () => {
  return (
    <h1>
      Hello <span style={{ color: "blue" }}>React</span>
    </h1>
  );
}; */

//display images
/*const CourseList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        style={{ width: "150px" }}
      />
      <h2>
         <span style={{ color: "blue" }}>This is the react logo</span>
      </h2>
      
    </div>
  );
};*/
//Navbar
/*const CourseList = () => {
  return (
    <nav style={{ display: "flex", backgroundColor: "#333", padding: "10px" }}>
      <a href="#" style={{ color: "white", margin: "0 15px" }}>
        Home
      </a>
      <a href="#" style={{ color: "white", margin: "0 15px" }}>
        Search
      </a>
      <a href="#" style={{ color: "white", margin: "0 15px" }}>
        Contact
      </a>
      <a href="#" style={{ color: "white", margin: "0 15px" }}>
        Login
      </a>
    </nav>
  );
};*/
const CourseList = () => {
  return (
    <h1 style={{ color: "blue", fontWeight: "bold" }}>This is JSX</h1>
  );
};
export default CourseList;
