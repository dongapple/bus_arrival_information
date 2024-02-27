import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@/themes/color.js';

interface ToggleProps {
  isChecked: boolean;
}

const ToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.25rem;
`;

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleLabel = styled.label<ToggleProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  transition: 0.4s;
  border-radius: 0.875rem;

  &:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: ${(props) => (props.isChecked ? 'calc(100% - 1rem - 2px)' : '2px')};
    bottom: 2px;
    background-color: ${(props) =>
      props.isChecked ? colors.primary900 : colors.primary100};
    border-radius: 0.5rem;
    transition: 0.4s;
  }
`;

const Toggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        checked={isChecked}
        id="toggleBtn"
        onChange={toggleHandler}
      />
      <ToggleLabel htmlFor="toggleBtn" isChecked={isChecked} />
    </ToggleContainer>
  );
};

export default Toggle;
