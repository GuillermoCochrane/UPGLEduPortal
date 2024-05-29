import PropTypes from "prop-types";
function Figure({Data}) {
  return (
    <figure>
        <img src={Data.img} alt={Data.alt} />
    </figure>
  );
}

Figure.propTypes = {
  Data: PropTypes.object.isRequired
};

export default Figure;