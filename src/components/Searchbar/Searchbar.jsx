import PropTypes from 'prop-types';
import css from './searchbar.module.scss';

export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Write here..."

      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;