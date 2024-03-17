import React, { Component } from 'react';
import css from './Statistics.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  goodId = nanoid();
  neutralId = nanoid();
  badId = nanoid();
  totalId = nanoid();
  positiveFeedbackId = nanoid();

  render() {
    const { good, neutral, bad, total, positivePercentage, children } =
      this.props;
    // Access props using this.props
    return (
      <div className={css.statistics}>
        <h3 className={css.statisticsTitle}>Statistics</h3>
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <ul className={css.stats}>
            <li key={this.goodId}>Good: {good}</li>
            <li key={this.neutralId}>Neutral: {neutral}</li>
            <li key={this.badId}>Bad: {bad}</li>
            <li key={this.totalId}>Total: {total}</li>
            <li key={this.positiveFeedbackIdId}>
              Positive Feedback: {Number(positivePercentage.toFixed(2))}%
            </li>
          </ul>
        ) : (
          <>{children}</>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  children: PropTypes.node,
};
