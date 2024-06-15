import React, { useState } from 'react';
import './Stage_5.css';

export default function Round1_5() {
    const Img_Checker = [
        { type: 'Check_1' }, { type: 'Check_2' }, { type: 'Check_3' },
        { type: 'Check_4' }, { type: 'Check_5' }, { type: 'Check_6' },
        { type: 'Check_7' }, { type: 'Check_8' }
    ];

    const [select, setSelect] = useState([]);

    const handleClick = (type) => {
        if (select.includes(type)) {
            setSelect(select.filter(item => item !== type));
        } else {
            setSelect([...select, type]);
        }
    };

    return (
        <div>
            <div id="Img-Quiz">
            <p>앞서 기억해 둔 <span style={{ color: 'red' }}>고지혈증과 식사요법</span>을 떠올리며 적합한 식품에 동그라미 하세요.</p><br/><br/><br/>
                {Img_Checker.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item.type)}
                        className={`${select.includes(item.type) ? 'select' : ''} Img_Checker`}
                        id={item.type}
                    >
                        &nbsp;
                    </button>
                ))}
            </div>
        </div>
    );
}
