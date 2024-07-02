import PropTypes from 'prop-types';
const Bookmark = ({bookmark,idx}) => {
    const {name}= bookmark;
    
    return (
        <div className='bg-lime-300 p-2 text-left'>
            
            <h2>{idx}. {name}</h2>

            
            
        </div>
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object,
    idx : PropTypes.number
}

export default Bookmark;