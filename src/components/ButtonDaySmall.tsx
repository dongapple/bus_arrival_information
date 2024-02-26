import React, { useState } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color.js';

interface ButtonDaySmallProps {
  $status: boolean; // $status로 변경
  text: string;
}

const StyledButtonDaySmall = styled.button<{ $status: boolean }>`
  // $status로 변경
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) =>
    props.$status ? colors.primary900 : colors.white};
  color: ${(props) => (props.$status ? colors.white : colors.black)};
  border-radius: 0.75rem;
  border: 0;
`;

const ButtonDaySmall: React.FC<ButtonDaySmallProps> = ({ $status, text }) => {
  const [buttonStatus, setButtonStatus] = useState<boolean>($status);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
  };

  return (
    <>
      <StyledButtonDaySmall
        className="body5"
        $status={buttonStatus}
        onClick={handleClick}
      >
        {text}
      </StyledButtonDaySmall>
    </>
  );
};

export default ButtonDaySmall;
