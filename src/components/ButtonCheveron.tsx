import React from 'react';
import styled from 'styled-components';
import { chevronBottom } from '@/assets/svg-icons';

interface ButtonCheveronProps {
  onClick: () => void;
}

const StyledChevronBottom = styled.button`
  background-color: transparent;
  border: none;
`;

const ButtonCheveron: React.FC<ButtonCheveronProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledChevronBottom onClick={handleClick}>
      <img src={chevronBottom} alt="chevron icon" />
    </StyledChevronBottom>
  );
};

export default ButtonCheveron;
