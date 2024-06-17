import PropTypes from 'prop-types';
function Youtube({Data}) {
    console.log(Data[0].height);
    return (
            <iframe 
                width={Data[0].width}
                height={Data[0].height}
                src={Data[0].link}
                title={Data[0].title}    
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            >
            </iframe>
    );
}

Youtube.propTypes = {
    Data: PropTypes.array.isRequired
};

export default Youtube;