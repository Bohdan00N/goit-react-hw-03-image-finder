import propTypes from 'prop-types';
import css from './modal.module.scss';
import { Component } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  closeBtnEscBackdrop = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      this.handleModalClose();
    }
  };

  render() {
    Loading.hourglass({
      svgColor: 'blue',
    });

    const { src, alt, handleClose } = this.props;

    return (
      <div className={css.Overlay} onClick={handleClose}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
