import React, { useState } from "react";
import Course from "./Course";

const Allcourse=()=>{

    const[courses,setCourses]=useState([
        {title:"java Course", description:"this language used to backend"},
        {title:"javaScript Course", description:"this language used to frontend"},
        {title:"Python Course", description:"this language used to backend"}
    ])

    return(
        <div>
            <h1>All Courses</h1>

            {courses.length>0
            ? courses.map((item)=><Course course={item}/>)
            : "no courses"}
        </div>
    );
}

export default Allcourse;