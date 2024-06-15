import React from 'react';
import image1 from '../../../image/4_3_1.png'; 
import image2 from '../../../image/4_3_2.png'; 
import './Stage_2.css';

export default function Round1_2() {

  return (
    <div className="stage2-container">
      <p>
        앞서 기억해 둔 <span>고지혈증과 식사요법</span>에 대한 설명입니다. &lt;보기&gt;에서 단어를 찾아 빈칸에 알맞은 내용을 적어보세요.
      </p>

      <div style={{ border: '3px solid green', padding: '10px', width: '100%', minHeight: '400px', margin: '20px auto' }}>
        <div className="S2-image-container">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="S2-text-container">
          <div>
            <input type="text" className="S2-input-field" /> 을 유지하고,
            <input type="text" className="S2-input-field" /> 을 섭취합니다. <br/>
            식사는 <input type="text" className="S2-input-field" />으로 하고 식품은 골고루 먹습니다. <br/>
            <input type="text" className="S2-input-field" />을 섭취합니다. <br/>
            <input type="text" className="S2-input-field" />, 콜레스테롤 고함량 식품의 섭취를 줄입니다. <br/>
            <input type="text" className="S2-input-field" />을 충분히 섭취합니다.<br/>
          </div>
        </div>
        <div className="S2-image-container" style={{ marginTop: '40px' }}>
          <img src={image2} alt="Image 2" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </div>
      </div>

    </div>
  );
}
