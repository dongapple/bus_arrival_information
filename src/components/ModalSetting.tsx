import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputCheck from './InputCheck';
import InputDaySmall from './InputDaySmall';

interface ModalSettingProps {}

const ModalSetting: React.FC<ModalSettingProps> = ({}) => {
  return (
    <>
      <section>
        <button> 아래 </button>
        <input type="search" />

        <ul>
          <li>
            <h3>버스 정류장 이름</h3>
            <div>
              <InputCheck ischecked={false} text="8-1" onClick={() => {}} />
            </div>
          </li>
          <li>
            <h3>버스 탑승시각</h3>
            <div>
              <input type="time" />
            </div>
          </li>
          <li>
            <h3>이동 소요시간</h3>
            <div>
              <input type="number" min={0} max={10} value={5} />
            </div>
          </li>
          <li>
            <h3>알림 주기</h3>
            <div>
              <InputDaySmall ischecked={false} text="월" onClick={() => {}} />
            </div>
          </li>
          <li>
            <h3>알람 간격</h3>
            <div>
              <InputCheck ischecked={false} text="직전" onClick={() => {}} />
              <InputCheck ischecked={false} text="5분전" onClick={() => {}} />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ModalSetting;
