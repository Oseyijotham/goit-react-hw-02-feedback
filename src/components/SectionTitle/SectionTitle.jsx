import React, { Component } from 'react';
import css from './SectionTitle.module.css';
import PropTypes from 'prop-types';

export class SectionTitle extends Component {
  render() {
    const { children } = this.props;
    // Access props using this.props
    return (
      <section className={css.feedbackSection}>
        <h2 className={css.title}>Please Leave Feedback</h2>
        {children}
      </section>
    );
  }
}

SectionTitle.propTypes = {
  children: PropTypes.node,
};