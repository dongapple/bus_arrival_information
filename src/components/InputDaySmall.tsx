import React, { useState } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color.js';

interface InputDaySmallProps {
  ischecked: boolean;
  text: string;
  onClick: () => void;
}

const StyledInputWrapper = styled.div``;

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

const InputDaySmall: React.FC<InputDaySmallProps> = ({
  ischecked,
  text,
  onClick,
}) => {
  const [isCheckedState, setIsChecked] = useState(ischecked);

  return (
    <StyledInputWrapper onClick={onClick}>
      <StyledInput type="checkbox" />
      <StyledLabel htmlFor="text" className="body5">
        {text}
      </StyledLabel>
    </StyledInputWrapper>
  );
};

export default InputDaySmall;
