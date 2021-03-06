import React from 'react';
import PropTypes from 'prop-types';
import random from './random';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles['stat-list']}>
      {stats.map(({ id, percentage, label }) => {
        return (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: random() }}
          >
            <span className={styles.label}>{label}</span>
            <span> {percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
