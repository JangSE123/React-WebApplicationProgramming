import React from 'react';
import './Round6_TodayInfo.css';
import { GoTriangleRight } from "react-icons/go";

export default function Round6_TodayInfo(props) {

    const btnItems = [{type: 'sun'},{type:'cloud'},{type:'rain'},{type:'snow'}]

    return (
        <>
            <div>
                <div className={'title Direction'}>
                    <GoTriangleRight /> 오늘의 날짜를 적고, 해당하는 날씨를 클릭하세요.
                </div>
                <div id="today-info">
                    || <input value={props.year} onChange={(e) => props.handleTodayInfoChange(e, 'year')} /> 년
                    <input value={props.month} onChange={(e) => props.handleTodayInfoChange(e, 'month')} /> 월
                    <input value={props.day} onChange={(e) => props.handleTodayInfoChange(e, 'day')} /> 일
                    &nbsp;
                    <select className="weekSelect" value={props.weekday} onChange={(e) => props.handleTodayInfoChange(e, 'weekday')}>
                        <option>월</option>
                        <option>화</option>
                        <option>수</option>
                        <option>목</option>
                        <option>금</option>
                        <option>토</option>
                        <option>일</option>
                    </select>
                    요일 || 날씨 -
                    {btnItems.map((item, index) => (
                        <button key={index}
                                onClick={() => props.handleWeatherClick(item.type)}
                                className={`${props.select === item.type ? 'select' : ''} tdInfoBtn`}
                                id={item.type}>&nbsp;</button>
                    ))}
                </div>
            </div>
        </>
    );
}