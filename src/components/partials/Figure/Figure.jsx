import PropTypes from "prop-types";
function Figure({Data}) {
  return (
    <figure>
        <img 
          src={Data.img} 
          alt={Data.alt}
          className={ 
            Data.style == "icon" ? "icon" : 
            Data.style == "info" ? "info" : 
            ""} />
    </figure>
  );
}

Figure.propTypes = {
  Data: PropTypes.object.isRequired
};

export default Figure;