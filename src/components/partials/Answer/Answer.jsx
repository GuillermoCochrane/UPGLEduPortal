import PropTypes from 'prop-types';
import Figure from '../Figure/Figure';
import Code from '../Code/Code';
import Example from '../Example/Example';
import { Fragment } from 'react';
function Answer({ Data }) {
  return (
    <details >
      <summary>{Data.title}</summary>
      {
        Data.content.map((item, index) => (
          <Fragment key={`${index}-fragment`}>
            {item.type === "figure" && <Figure Data={item.info} />}
            {item.type === "code" && <Code Data={item.info} />}
            {item.type === "example" && <Example Data={item.info} height={item.height} width={item.width} title={item.title} hasBT={item.hasBT} />}
            {item.type !== "figure" && item.type !== "code" && item.type !== "example" && <p>Elemento no renderizable</p>}
          </Fragment>
        ))
      }
    </details>
  );
}

Answer.propTypes = {
  Data: PropTypes.object.isRequired,
}

export default Answer;