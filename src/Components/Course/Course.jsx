import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Course = ({course,handelcourse}) => {
    const {id,name,image,credit,creditHour,courseFee,description} = course;
    return (
        <div className=" space-y-2 bg-slate-100 p-3 flex flex-col" >
            <img src={image} alt="" />
            <h3 className="text-xl font-semibold text-left">{name}</h3>
            <h4 className="text-sm text-left">{description}</h4>
            <div className="flex justify-between flex-grow text-center ">
                <div className="flex">
                <h4 className="mt-1"> < FiDollarSign ></FiDollarSign> </h4>
                <h2 className="text-base ml-2"> Price: {courseFee}</h2>
                </div>
                <div className="flex">
                <h4 className="mt-1 mr-2"> <IoBookOutline ></IoBookOutline></h4>
                
                <h2 className="text-base"> Credit : {creditHour}hr</h2>


                </div>
                
            </div>
            <button onClick={()=>handelcourse(courseFee,credit,creditHour,course,id)} className="border-2 border-solid w-full rounded-lg bg-blue-600">Select</button>


            
        </div>
    );
};
Course.propTypes ={
    course : PropTypes.object.isRequired,
    handelcourse : PropTypes.func

}

export default Course;