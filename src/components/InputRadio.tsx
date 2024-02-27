import React, { useState } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color';

interface InputRadioProps {
  ischecked: boolean;
  text: string;
  onClick: () => void;
}

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  color: ${colors.black};
  display: inline;
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background-color: ${colors.white};
    border: 0.0625rem;
    box-shadow: 0 0 0 ${(props) => (props.checked ? `0.25rem` : `.0625rem`)}
      ${(props) => (props.checked ? colors.primary900 : colors.primary100)}
      inset;
    border-radius: 0.5rem;
  }
`;

const InputRadio: React.FC<InputRadioProps> = ({
  ischecked,
  text,
  onClick,
}) => {
  const [isCheckedState, setIsChecked] = useState(ischecked);

  const handleInputChange = () => {
    setIsChecked(!isCheckedState);
  };

  return (
    <StyledLabel htmlFor={text} className="body4" checked={isCheckedState}>
      {text}
      <StyledInput
        type="radio"
        id={text}
        checked={isCheckedState}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};

export default InputRadio;
