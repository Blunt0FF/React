import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ setFilter }) => {
  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Enter filter"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);