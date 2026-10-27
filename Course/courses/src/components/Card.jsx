import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    // Agar pehle se liked hai to list se nikaal do
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // Agar pehle se liked nahi hai to array me add kar do (chahe empty ho ya na ho)
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  }

  return (
    <div className="bg-blue-950 bg-opacity-80 w-[300px] rounded-md overflow-hidden text-left">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />

        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
           {  //agr liked hai to placeholder /fclike
            likedCourses.includes(course.id)?( <FcLike size={28} />):( <FcLikePlaceholder size={28} />) 
           }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {
            course.description.length>100 ? (course.description.substr(0,100)+"..."):(course.description)
          }
          
        </p>
      </div>
    </div>
  );
};

export default Card;