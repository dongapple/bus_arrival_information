import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButtonDaySamll = styled.button`
  background-color: #1aac80;
`;

const ButtonDaySamll: React.FC<{ status: boolean; text: string }> = ({
  status = true,
  text,
}) => {
  const [buttonStatus, setButtonStatus] = useState<boolean>(status);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
  };

  return (
    <>
      <StyledButtonDaySamll onClick={handleClick}>{text}</StyledButtonDaySamll>
    </>
  );
};

export default ButtonDaySamll;
