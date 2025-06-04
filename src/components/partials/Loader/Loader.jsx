const loadingImg = "../../../assets/images/preloader.gif"
function Loader() {
	return (
		<figure>
			<img 
				src={loadingImg}
				alt="Cargando..."
				title="Cargando..."
				className="Loader"
			/>
		</figure>
	);
}

export default Loader;