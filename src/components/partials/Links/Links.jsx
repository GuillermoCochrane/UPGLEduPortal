import PropTypes from 'prop-types';
import Bold from '../Bold/Bold'
function Links({Data}) {
    return (
            <>
            {
                Data.map((item, index) => (
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        role={item.type !== "link" ? "button" : undefined}
                        key={index}>
                        {
                            item.content == "plain" && item.text
                        }
                        {
                            item.content == "bold" && <Bold key = {index} Data = {item.text} />
                        }
                    </a>
                ))
            }
            </>
        
    );
}

Links.propTypes = {
    Data: PropTypes.array.isRequired
};

export default Links;