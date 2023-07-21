import React from 'react';
import PropTypes from 'prop-types';

function Button({
  id, onClick, classname, title,
}) {
  return (
    <button type="submit" className={classname} id={id} onClick={(e) => onClick(e)}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  title: '',
  classname: '',
  id: '',
  onClick: '',
};
Button.propTypes = {
  title: PropTypes.string,
  classname: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
