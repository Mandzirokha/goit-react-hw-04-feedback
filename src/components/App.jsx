import React, { Component } from 'react';
import {
  Button,
  FeedbackBox,
  FeedbackList,
  StatisticsBox,
  // StatsItem,
  // StatsList,
  SubTitle,
  Title,
} from './App.styled';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const target = e.target;
    const name = target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.floor((good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <FeedbackBox>
          <Title>Please leave feedback</Title>
          <FeedbackList>
            <li>
              <Button type="button" name="good" onClick={this.handleClick}>
                Good
              </Button>
            </li>
            <li>
              <Button type="button" name="neutral" onClick={this.handleClick}>
                Neutral
              </Button>
            </li>
            <li>
              <Button type="button" name="bad" onClick={this.handleClick}>
                Bad
              </Button>
            </li>
          </FeedbackList>
        </FeedbackBox>
        <StatisticsBox>
          <SubTitle>Statistics</SubTitle>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </StatisticsBox>
      </>
    );
  }
}

export default App;
