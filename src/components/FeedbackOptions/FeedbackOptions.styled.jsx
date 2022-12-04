import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  width: 100px;
  padding: 0.5rem 1rem;
  background-color: #ff4057;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #900048;
  }
`;
