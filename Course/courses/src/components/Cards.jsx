import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses ,category }) => {
  const allCourses = [];
  //liked courses declear
  const [likedCourses,setLikedCourses]=useState([]); //satrtin no courses liked
  
  const getCourses = () => {

    if(category==="All")
    {
 Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
    }
    else{
      //main sirf specific category ka data dikhaunga
      return courses[category];
    }
   
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id || course.name} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}  />
      ))}
    </div>
  );
};

export default Cards;