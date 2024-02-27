import React, { useState } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color';
import { check } from '@/assets/svg-icons';

interface InputCheckProps {
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
    background-color: ${(props) =>
      props.checked ? colors.primary900 : colors.white};
    background-image: url(${(props) => (props.checked ? check : null)});
    background-repeat: no-repeat;
    background-position: center center;
    border: 0.0625rem;
    box-shadow: 0 0 0 0.0625rem ${colors.primary900} inset;
    border-radius: 0.2rem;
  }
`;

const InputCheck: React.FC<InputCheckProps> = ({
  ischecked,
  text,
  onClick,
}) => {
  const [isCheckedState, setIsChecked] = useState(ischecked);

  const handleInputChange = () => {
    setIsChecked(!isCheckedState);
  };

  return (
    <div onClick={onClick}>
      <StyledLabel htmlFor={text} className="body4" checked={isCheckedState}>
        {text}
        <StyledInput
          type="checkbox"
          id={text}
          checked={isCheckedState}
          onChange={handleInputChange}
        />
      </StyledLabel>
    </div>
  );
};

export default InputCheck;
