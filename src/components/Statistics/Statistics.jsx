import React, { Component } from 'react';
import css from './Statistics.module.css';
export class Statistics extends Component {
  

    render() {
      const { good, neutral, bad, total, positivePercentage, children } = this.props;
    // Access props using this.props
    return (
      <div className={css.statistics}>
        <h3 className={css.statisticsTitle}>Statistics</h3>
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <ul className={css.stats}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {Number(positivePercentage.toFixed(2))}%</li>
          </ul>
        ) : (
          <>{children}</>
        )}
      </div>
    );
  }
}


