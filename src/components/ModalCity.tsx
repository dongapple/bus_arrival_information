import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@/themes/color';
import { chevronBottom } from '@/assets/svg-icons';
import InputRadio from './InputRadio';
import ButtonsContainer from './ButtonsContainer';

interface ModalSettingProps {}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
  // background-color: ${colors.primary500};
`;

const StyledChevronBottom = styled.button`
  background-color: ${colors.white};
  border: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Divider = styled.div`
  border-top: 2px solid ${colors.gray300};
`;

const ModalCity: React.FC<ModalSettingProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <StyledChevronBottom>
          <img src={chevronBottom} alt="" />
        </StyledChevronBottom>
        <span>현재위치</span>
        <StyledForm>
          <div>
            <button>내위치</button>
            <button>지역선택</button>
          </div>
          <Divider />

          <StyledUl>
            <li>
              <InputRadio
                isChecked={false}
                text="서울"
                name="지역선택"
                onClick={() => {}}
              />
            </li>
            <li>
              <InputRadio
                isChecked={false}
                text="서울"
                name="지역선택"
                onClick={() => {}}
              />
            </li>
            <li>
              <InputRadio
                isChecked={false}
                text="서울"
                name="지역선택"
                onClick={() => {}}
              />
            </li>
          </StyledUl>
          <ButtonsContainer cancle="취소" submit="저장" />
        </StyledForm>
      </StyledSection>
    </>
  );
};

export default ModalCity;
