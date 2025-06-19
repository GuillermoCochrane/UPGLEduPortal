import PropTypes from 'prop-types';

function InputExample({ Data }) {
  return (
      <>
        {Data.inputs.map((input, idx) => (
          <section className="input-item" key={idx}>
            <label><strong>{input.label}</strong></label>
            <input type={input.type} placeholder={input.placeholder} />
            {input.code &&  <code>{input.code}</code>}
          </section>
        ))}
      </>
  );
}

InputExample.propTypes = {
  Data: PropTypes.object.isRequired
};

export default InputExample;