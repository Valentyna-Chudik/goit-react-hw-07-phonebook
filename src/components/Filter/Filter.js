import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { filterChange } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterChange(e.target.value));

  return (
    <label className={styles.label}>
      <span className={styles.labelName}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
