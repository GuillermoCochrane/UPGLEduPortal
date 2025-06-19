import PropTypes from 'prop-types';
import Code from '"../Code/Code"';
import Figure from '../Figure/Figure';

function InputExample({ Data }) {
  return (
      <section className="input-item">
        <label>
          <strong>{Data.label}</strong>
          <input 
              type={Data.type} 
              placeholder={Data.placeholder || ""}
              {...Data.attributes}
            />
        </label>
        {Data.code &&  <Code Data={Data.code} />}
        {Data.figure &&  <Figure Data={Data.figure} />}
      </section>
  );
}

InputExample.propTypes = {
  Data: PropTypes.object.isRequired
};

export default InputExample;