import Bookmark from "../Bookmark/Bookmark";


import PropTypes from 'prop-types';
const Bookmarks = ({amount,time,bookmarks,error,remaingtime}) => {
    return (
        <div className="w-1/3 bg-gray-300 mx-auto mt-5 ">
           
           
            <h3 className="text-base">Time remaning : {remaingtime}hr</h3>
            <div>
            <h3>Course Name</h3>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                    idx = {idx+1}
                    ></Bookmark>)
                }
            </div>
            <h3 className="text-base">Total time : {time}hr</h3>
            <h3 className="text-base">Total amount : {amount}</h3>
            {error && <div >{error}</div>}
           
            
           

            
        </div>
    );
};
Bookmarks.propTypes = {
    amount : PropTypes.number,
    cridts : PropTypes.number,
    time : PropTypes.number,
    bookmarks : PropTypes.object,
    error : PropTypes.string,
    remaingtime : PropTypes.number

}

export default Bookmarks;