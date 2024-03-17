import React, { Component } from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    // Access props using this.props
    return (
      <div className={css.notification}>
        <p>{message}</p>
      </div>
    );
  }
}

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
