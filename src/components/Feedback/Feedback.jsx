import React, { Component } from 'react';
import {
  Button,
  FeedbackBox,
  FeedbackList,
  StatisticsBox,
  StatsItem,
  StatsList,
  SubTitle,
  Title,
} from './Feedback.styled';

class Feedback extends Component {
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

  countTotalFeedback = () => {};

  render() {
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
          <StatsList>
            <StatsItem>Good: {this.state.good}</StatsItem>
            <StatsItem>Neutral: {this.state.neutral}</StatsItem>
            <StatsItem>Bad: {this.state.bad}</StatsItem>
            {/* <StatsItem>Total: {this.state.total}</StatsItem> */}
          </StatsList>
        </StatisticsBox>
      </>
    );
  }
}

export default Feedback;
