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

export const Feedback = () => {
  return (
    <>
      <FeedbackBox>
        <Title>Please leave feedback</Title>
        <FeedbackList>
          <li>
            <Button>Good</Button>
          </li>
          <li>
            <Button>Neutral</Button>
          </li>
          <li>
            <Button>Bad</Button>
          </li>
        </FeedbackList>
      </FeedbackBox>
      <StatisticsBox>
        <SubTitle>Statistics</SubTitle>
        <StatsList>
          <StatsItem>
            Good: <span>0</span>
          </StatsItem>
          <StatsItem>
            Neutral: <span>0</span>
          </StatsItem>
          <StatsItem>
            Bad: <span>0</span>
          </StatsItem>
        </StatsList>
      </StatisticsBox>
    </>
  );
};
