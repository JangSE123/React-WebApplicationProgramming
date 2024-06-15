import React, { useState } from 'react';
import './Stage_4.css';

const Round1_4 = () => {
    const OX_Button = [{ type: 'O' }, { type: 'X' }];
    const questions = [
        '1. 고지혈증은 혈과 속 혈액이 잘 흐르는 현상이다.',
        '2. 고지혈증은 혈액에 콜레스테롤이 필요 이상으로 많이 함유되어 있다.',
        '3. 콜레스테롤이 혈액 내에 과다하게 많아지면 혈관벽에 침착되어 동맥경화를 일으킨다.',
        '4. 총 콜레스테롤의 정상범위는 300mg 이하이다.'
    ];

    const [select1, Checking1] = useState('');
    const [select2, Checking2] = useState('');
    const [select3, Checking3] = useState('');
    const [select4, Checking4] = useState('');

    const Click_Check = (type, Checking) => {
        Checking(type);
    };


    const OXQuestion = ({ question, select, Checking }) => {
        return (

            <div>
                <p>{question}</p>
                {OX_Button.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => Click_Check(item.type, Checking)}
                        className={`OX_Btn ${select === item.type ? 'select' : ''}`}
                        id={item.type}
                    >
                        &nbsp;
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div id="OX-Quiz">
            <p>앞서 기억해 둔 <span style={{ color: 'red' }}>고지혈증과 식사요법</span>을 떠올리며 O,X 문제를 풀어보세요(1~4)</p><br/><br/><br/>
                {questions.map((question, index) => (
                    <OXQuestion
                        key={index}
                        question={question}
                        select={index === 0 ? select1 : index === 1 ? select2 : index === 2 ? select3 : select4}
                        Checking={index === 0 ? Checking1 : index === 1 ? Checking2 : index === 2 ? Checking3 : Checking4}
                    />
                ))}

                <p><br/><br/><br/>앞서 기억해 둔 <span style={{ color: 'red' }}>식사요법</span>을 적어보세요(1~5).</p><br/><br/><br/>

                <ol>
                    <li>정상 체중을 유지하고, <input type="text" style={{ width: '30%', height: '30px', fontSize: '24px', padding: '5px' }} /></li>
                    <li><input type="text" style={{ width: '30%', height: '30px', fontSize: '24px', padding: '5px' }} />식품은 골고루 먹습니다.</li>
                    <li><input type="text" style={{ width: '30%', height: '30px', fontSize: '24px', padding: '5px' }} />섭취합니다.</li>
                    <li><input type="text" style={{ width: '30%', height: '30px', fontSize: '24px', padding: '5px' }} />고함량 식품의 섭취를 줄입니다.</li>
                    <li><input type="text" style={{ width: '30%', height: '30px', fontSize: '24px', padding: '5px' }} /> 충분히 섭취합니다.</li>
                </ol>
            </div>
        </div>
    );
};

export default Round1_4;
