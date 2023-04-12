import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };
  return (
    <header className={css['Searchbar']}>
      <form className={css['SearchForm']} onSubmit={handleSubmit}>
        <button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>
        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          lavue={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
