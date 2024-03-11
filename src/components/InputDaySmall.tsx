import React, { useState } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color';

interface InputDaySmallProps {
  isChecked: boolean;
  text: string;
  onClick: () => void;
}

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  background-color: ${(props) =>
    props.checked ? colors.primary900 : colors.white};
  color: ${(props) => (props.checked ? colors.white : colors.black)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
`;

const InputDaySmall: React.FC<InputDaySmallProps> = ({
  isChecked,
  text,
  onClick,
}) => {
  const [isCheckedState, setIsChecked] = useState(isChecked);

  const handleInputChange = () => {
    setIsChecked(!isCheckedState);
  };

  return (
    <div onClick={onClick}>
      <StyledInput
        type="checkbox"
        id={text}
        checked={isCheckedState}
        onChange={handleInputChange}
      />
      <StyledLabel checked={isCheckedState} htmlFor={text} className="body5">
        {text}
      </StyledLabel>
    </div>
  );
};

export default InputDaySmall;
