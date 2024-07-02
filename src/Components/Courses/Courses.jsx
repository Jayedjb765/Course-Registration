import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handelcourse}) => {
    const [courses,setcourses] =  useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])
    return (
        <div>
            <div className="grid  md:grid-cols-3 mx-auto w-2/3 gap-2 mt-5">
                {
                    courses.map(course => <Course
                    key={course.id}
                    course = {course}
                    handelcourse={handelcourse}
                    
                    >

                    </Course>)
                }
            </div>
            
        </div>
    );
};
Courses.propTypes = {
    handelcourse : PropTypes.func
}

export default Courses;