import PropTypes from 'prop-types';
import Code from "../Code/Code";
import Figure from '../Figure/Figure';
import P from '../P/PTag';

function InputExample({ Data }) {
  return (
      <section className="input-item">
        <label>
          <P Data={Data.label} />
          <br />
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