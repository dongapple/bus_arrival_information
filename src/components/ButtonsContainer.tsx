import React from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import * as colors from '@/themes/color';

interface ButtonsContainerProps {
  cancle: string;
  submit: string;
}

const StyledButtonsContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 1rem;

  width: calc(100% - 2rem);
`;

const StyledButton = styled.button<{ type?: string }>`
  width: 50%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) =>
    props.type === 'submit' ? colors.primary900 : colors.primary100};
  color: ${(props) => (props.type === 'submit' ? colors.white : colors.red)};
`;

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  cancle,
  submit,
}) => {
  return (
    <>
      <StyledButtonsContainer>
        <StyledButton className="title3" type="button">
          {cancle}
        </StyledButton>
        <StyledButton className="title3" type="submit">
          {submit}
        </StyledButton>
      </StyledButtonsContainer>
    </>
  );
};

export default ButtonsContainer;
