import React, {useState} from 'react';
import './TodayInfo.css';

export default function TodayInfo() {

    const btnItems = [{type: 'sun'},{type:'cloud'},{type:'rain'},{type:'snow'}]

    const [select, setSelect] = useState('')
    const handleClick = (type) => {
        setSelect(type);
    }
    return (
        <>
        <div>
            <div className={'title Direction'}>
                    ▶ 오늘의 날짜를 적고, 해당하는 날씨를 클릭하세요.
            </div>
            <div id="today-info">
                || <input /> 년
                <input /> 월
                <input /> 일
                &nbsp;<select className="weekSelect">
                    <option>월</option>
                    <option>화</option>
                    <option>수</option>
                    <option>목</option>
                    <option>금</option>
                    <option>토</option>
                    <option>일</option>
                </select>
                요일 || 날씨 -
                {btnItems.map((item, index) =>(
                    <button key={index}
                    onClick={() => handleClick(item.type)}
                    className={`${select === item.type ? 'select' : ''} tdInfoBtn`}
                    id={item.type}>&nbsp;</button>
                ))}
            </div>
        </div>
        </>
    );
}
