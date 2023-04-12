import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ImageGalleryItem = ({ item }) => {
  const [shownModal, setShownModal] = useState(false);
  const onModal = () => {
    setShownModal(!shownModal);
  };
  const { webformatURL } = item;
  return (
    <li className={css['ImageGalleryItem']}>
      <img
        src={webformatURL}
        alt="img"
        className={css['ImageGalleryItem-image']}
        onClick={onModal}
      />
      {shownModal && <Modal onClose={onModal} image={item} />}
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.object,
};
