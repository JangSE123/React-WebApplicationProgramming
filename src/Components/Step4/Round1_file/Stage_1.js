import React from 'react';
import TodayInfo from '../../TodayInfo';
import Image from '../../../image/4_2.png';

export default function Round1_1() {

  return (
    <div className="round1-container">
      <TodayInfo /><br></br><br></br>
      <p>
        다음은 <span style={{ color: 'red' }}>고지혈증과 식사요법</span>에 대한 설명입니다. 소리 내어 읽어보세요.
      </p>

      <img src={Image} alt="4_2" style={{ width: '530px', height: '600px' }} />

    </div>
  );
}
