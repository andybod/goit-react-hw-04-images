import css from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const { largeImageURL } = image;
  return (
    <div className={css['Overlay']} onClick={onOverlayClose}>
      <div className={css['Modal']}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
