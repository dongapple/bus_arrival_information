import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@/themes/color';
import InputRadio from './InputRadio';
import ButtonsContainer from './ButtonsContainer';
import ButtonCheveron from './ButtonCheveron';
import { select, mylocation } from '@/assets/svg-icons';

interface ModalSettingProps {}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
  // background-color: ${colors.primary500};
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

const StyledSelectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  // background-color: red;
`;

const StyledSelectionButton = styled.button<{ $select?: string }>`
  border: 0.0625rem solid ${colors.primary900};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.$select == 'myLoction' ? colors.primary100 : colors.primary900};
  color: ${(props) =>
    props.$select == 'myLoction' ? colors.primary900 : colors.white};
  padding: 0.25rem 0rem;
  width: 100%;
  min-width: 6.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

const Divider = styled.div`
  border-top: 2px solid ${colors.gray300};
`;

const ModalCity: React.FC<ModalSettingProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <ButtonCheveron />
        <span>현재위치</span>
        <StyledForm>
          <StyledSelectionContainer>
            <StyledSelectionButton $select="myLoction" className="title3">
              <img src={mylocation} alt="내위치 아이콘" />
              내위치
            </StyledSelectionButton>
            <StyledSelectionButton className="title3">
              <img src={select} alt="내위치 아이콘" />
              지역선택
            </StyledSelectionButton>
          </StyledSelectionContainer>
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
