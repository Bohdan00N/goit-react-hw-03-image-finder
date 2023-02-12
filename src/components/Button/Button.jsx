import React from 'react';
import PropTypes from 'prop-types';
import css from './button.module.scss';

function Button({ loadNextPage, disabled }) {
  return (
    <div className={css.block}>
      <button
        onClick={loadNextPage}
        type="button"
        className={css.upload}
        disabled={disabled}
      >
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  loadNextPage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;

