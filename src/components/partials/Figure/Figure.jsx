import PropTypes from "prop-types";
import { useRef } from "react";

function Figure({Data}) {
	const $img = useRef(null);

	const zoom = () => {
		if (window.innerWidth < 768) {
			$img.current.classList.toggle('enlarged');
	}}

	return (
		<figure>
			<img 
				ref={$img}
				onClick={zoom}
				src={Data.img} 
				alt={Data.alt}
				title={Data.alt}
				className={ 
					Data.style == "icon" ? "icon" : 
					Data.style == "info" ? "info" : 
					""} 
			/>
		</figure>
	);
}

Figure.propTypes = {
	Data: PropTypes.object.isRequired
};

export default Figure;