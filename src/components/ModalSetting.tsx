import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@/themes/typography.css';
import InputCheck from './InputCheck';
import InputDaySmall from './InputDaySmall';
import * as colors from '@/themes/color';
import { chevronBottom } from '@/assets/svg-icons';

interface ModalSettingProps {}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
  // background-color: red;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // background-color: blue;
`;

const StyledLi = styled.li``;

const StyledH3 = styled.h3`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${colors.white};
  background-color: ${colors.primary900};
`;

const StyledDiv = styled.div<{ column?: boolean; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  gap: ${(props) => (props.gap ? props.gap : `0rem`)};
  justify-content: center;

  padding: 0.5rem 1rem;
  border-radius: 0 0 0.5rem 0.5rem;

  color: ${colors.black};
  background-color: ${colors.primary100};
`;

const StyledSearch = styled.input`
  width: 100%;
  height: auto;

  border: 0.125rem solid ${colors.primary300};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  &:focus {
    border: 0.125rem solid ${colors.primary900};
    outline: 0rem solid transparent;
  }
`;

const StyledTime = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  border-radius: 0.25rem;
  &:focus {
    outline: 2px solid ${colors.primary700};
  }
`;

const StyledNumber = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  border-radius: 0.25rem;
  &:focus {
    outline: 2px solid ${colors.primary700};
  }
`;

const StyledChevronBottom = styled.button`
  background-color: ${colors.white};
  border: none;
`;

const StyledWarning = styled.p`
  padding-top: 0.25rem;
  color: ${colors.red};
`;

const ModalSetting: React.FC<ModalSettingProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <StyledChevronBottom>
          <img src={chevronBottom} alt="" />
        </StyledChevronBottom>

        <StyledUl>
          <li>
            <StyledSearch
              type="search"
              placeholder="버스 정류장 이름을 입력해 주세요"
              className="body4"
            />
          </li>

          <li>
            <StyledH3 className="title3">버스 정류장 이름</StyledH3>
            <StyledDiv column>
              <InputCheck ischecked={false} text="8-1" onClick={() => {}} />
            </StyledDiv>
            <StyledWarning className="body7">
              주의 문구를 입력해 주세요
            </StyledWarning>
          </li>

          <li>
            <StyledH3 className="title3">버스 탑승시각</StyledH3>
            <StyledDiv>
              <StyledTime className="body4" type="time" />
            </StyledDiv>
            <StyledWarning className="body7">
              주의 문구를 입력해 주세요
            </StyledWarning>
          </li>

          <li>
            <StyledH3 className="title3">이동 소요시간</StyledH3>
            <StyledDiv>
              <StyledNumber className="body4" type="number" min={0} max={10} />
            </StyledDiv>
          </li>

          <li>
            <StyledH3 className="title3">알림 주기</StyledH3>
            <StyledDiv>
              <InputDaySmall ischecked={false} text="월" onClick={() => {}} />
              <InputDaySmall ischecked={false} text="월" onClick={() => {}} />
              <InputDaySmall ischecked={false} text="월" onClick={() => {}} />
            </StyledDiv>
          </li>

          <li>
            <StyledH3 className="title3">알람 간격</StyledH3>
            <StyledDiv>
              <InputCheck ischecked={false} text="직전" onClick={() => {}} />
              <InputCheck ischecked={false} text="5분전" onClick={() => {}} />
            </StyledDiv>
          </li>
        </StyledUl>
      </StyledSection>
    </>
  );
};

export default ModalSetting;
