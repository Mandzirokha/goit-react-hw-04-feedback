import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

const stateType = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

export const App = () => {
  const [good, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case stateType.GOOD:
        setPositive(prevState => prevState + 1);
        break;

      case stateType.NEUTRAL:
        setNeutral(prevState => prevState + 1);
        break;

      case stateType.BAD:
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    const total = countTotalFeedback();
    if (total > 0) {
      positivePercentage = Math.floor((good / total) * 100);
    }
    return positivePercentage;
  };

  let total = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.values(stateType)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};
