import PropTypes from 'prop-types';
import './youtube.css';

function Youtube({ Data }) {
    const video = Data[0];
    const originalWidth = parseInt(video.width) || 560;
    const originalHeight = parseInt(video.height) || 315;

    const style = {
        maxWidth: `${originalWidth}px`,
        aspectRatio: `${originalWidth} / ${originalHeight}`,
    };

    return (
        <div className="youtube-container">
            <iframe
                style={style}
                src={video.link}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="youtube-iframe"
            >
            </iframe>
        </div>
    );
}

Youtube.propTypes = {
    Data: PropTypes.array.isRequired
};

export default Youtube;