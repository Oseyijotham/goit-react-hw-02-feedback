import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

/*
export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    //const { children } = this.props;
    // Access props using this.props
    return (
      <div className={css.buttonBox}>
        <button
          className={css.button}
          type="button"
          name={options.good}
          onClick={onLeaveFeedback}
        >
          {options.good}
        </button>

        <button
          className={css.button}
          type="button"
          name={options.neutral}
          onClick={onLeaveFeedback}
        >
          {options.neutral}
        </button>

        <button
          className={css.button}
          type="button"
          name={options.bad}
          onClick={onLeaveFeedback}
        >
          {options.bad}
        </button>
      </div>
    );
  }
}*/
//To use the above the options prop will need to take in an object (The object is commented out in the App.jsx file)

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    // Access props using this.props
    return (
      <div className={css.buttonBox}>
        {options.map(option => (
          <button
            className={css.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={options.indexOf(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onLeaveFeedback: PropTypes.func.isRequired, 
};
