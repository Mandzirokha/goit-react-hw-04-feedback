import PropTypes from 'prop-types';
import React from 'react';

export const Notification = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
