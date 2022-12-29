import PropTypes from 'prop-types';
import React from 'react';
import { FeedbackList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <li key={options.indexOf(option)}>
            <Button
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
