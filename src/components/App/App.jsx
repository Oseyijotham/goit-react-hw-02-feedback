/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework templa
    </div>
  );
};*/

import React, { Component } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  options = ["Good", "Neutral", "Bad"];

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      return (good / (good + neutral + bad)) * 100;
    }
  };

  onLeaveFeedback = evt => {
    evt.target.style.boxShadow = "inset 0 0 10px 5px rgba(0, 0, 0, 0.3)";
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
      
    }, 200);
    const { name } = evt.target;
    const goodButton = 'good';
    const neutralButton = 'neutral';
    const badButton = 'bad';

    this.setState(prevState => {
      if (name === 'Good') {
        return { [goodButton]: prevState.good + 1 };
      } else if (name === 'Neutral') {
        return { [neutralButton]: prevState.neutral + 1 };
      } else if (name === 'Bad') {
        return { [badButton]: prevState.bad + 1 };
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionTitle>
          <>
            <FeedbackOptions
              options={this.options}
              onLeaveFeedback={this.onLeaveFeedback}
            />


            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            >
              <Notification message="There is no feedback" />
            </Statistics>
          </>
        </SectionTitle>
      </div>
    );
  }
}