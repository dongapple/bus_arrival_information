import React from 'react';
import styled from 'styled-components';
import * as colors from '@/themes/color';

interface InputRadioProps {
  isChecked: boolean;
  text: string;
  name: string;
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
  isChecked,
  text,
  name,
  onClick,
}) => {
  const handleInputChange = () => {
    onClick(); // 선택 시 추가적인 처리가 필요하다면 이 곳에 추가
  };

  return (
    <StyledLabel htmlFor={text} className="body4" checked={isChecked}>
      {text}
      <StyledInput
        type="radio"
        id={text}
        name={name}
        checked={isChecked}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};

export default InputRadio;
