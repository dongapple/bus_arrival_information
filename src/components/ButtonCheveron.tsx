import React from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color';
import { chevronBottom } from '@/assets/svg-icons';

interface ButtonCheveronProps {}

const StyledChevronBottom = styled.button`
  background-color: ${colors.white};
  border: none;
`;

const ButtonCheveron: React.FC<ButtonCheveronProps> = ({}) => {
  return (
    <>
      <StyledChevronBottom>
        <img src={chevronBottom} alt="" />
      </StyledChevronBottom>
    </>
  );
};

export default ButtonCheveron;
