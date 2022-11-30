import PropTypes from 'prop-types';
import React from 'react';
import { StatsItem, StatsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 1,
  positivePercentage = 3,
}) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {total}</StatsItem>
      <StatsItem>Positive feedback: {positivePercentage}%</StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
