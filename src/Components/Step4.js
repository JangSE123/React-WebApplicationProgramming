import React, {useEffect, useState} from 'react'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Round1 from './Step4/Round1'
import Round2 from './Step4/Round2'
import Round3 from './Step4/Round3'
import Round4 from './Step4/Round4'
import Round5 from './Step4/Round5'
import Round6 from './Step4/Round6'
import Round7 from './Step4/Round7'
import Round8 from './Step4/Round8'
import './Step4.css'

export default function Step4() {
    const location = useLocation();
    const isRoot = location.pathname === '/Step4';
    const navigate = useNavigate();

    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [hovered1, setHovered1] = useState(false);
    const [hovered, setHovered] = useState(false);

    const [score, setScore] = useState(0);
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [weekday, setWeekday] = useState('');
    const [select, setSelect] = useState('');

    const [score1, setScore1] = useState(0);
    const [year1, setYear1] = useState('');
    const [month1, setMonth1] = useState('');
    const [day1, setDay1] = useState('');
    const [weekday1, setWeekday1] = useState('');
    const [select1, setSelect1] = useState('');

    useEffect(() => {
        document.title = "노인 인지 문제 // 4단계";
      
        if (localStorage.getItem('submittedStep4_2')) {
          setScore1(localStorage.getItem('totalScoreStep4_2') || 0);
          setYear1(localStorage.getItem('yearStep4_2') || '');
          setMonth1(localStorage.getItem('monthStep4_2') || '');
          setDay1(localStorage.getItem('dayStep4_2') || '');
          setWeekday1(localStorage.getItem('weekdayStep4_2') || '');
          setSelect1(localStorage.getItem('selectedWeatherStep4_2') || '');
        }
      
        return () => {
          document.title = "노인 인지 문제";
        };
    }, []);

    useEffect(() => {
        document.title = "노인 인지 문제 // 4단계";
      
        if (localStorage.getItem('submittedStep4_6')) {
            setScore(localStorage.getItem('totalScoreStep4_6') || 0);
            setYear(localStorage.getItem('yearStep4_6') || '');
            setMonth(localStorage.getItem('monthStep4_6') || '');
            setDay(localStorage.getItem('dayStep4_6') || '');
            setWeekday(localStorage.getItem('weekdayStep4_6') || '');
            setSelect(localStorage.getItem('selectedWeatherStep4_6') || '');
        }
      
        return () => {
          document.title = "노인 인지 문제";
        };
    }, []);

    const handleButtonMouseEnter1 = (e) => {
        const rect = e.target.getBoundingClientRect();
        setButtonPosition({ x: rect.right, y: rect.top });
        setHovered1(true);
    };

    const handleButtonMouseLeave1 = () => {
        setHovered1(false);
    };
    const handleButtonMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setButtonPosition({ x: rect.right, y: rect.top });
        setHovered(true);
    };

    const handleButtonMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='step4-container'>
            {isRoot ? (
                <nav>
                    <button onClick={() => navigate('/')} className={"roundBtn BtnBack"}>이전 페이지</button><br/>
                    <button onClick={() => navigate('Round1')} className={"roundBtn roundBtnDisabled"}>1회차</button><br/>
                    <button onMouseEnter={handleButtonMouseEnter1} onMouseLeave={handleButtonMouseLeave1} onClick={() => navigate('Round2')} className={score >= 60 ? "roundBtn roundClear" : "roundBtn"}>2회차</button><br/>
                    <button onClick={() => navigate('Round3')} className={"roundBtn roundBtnDisabled"}>3회차</button><br/>
                    <button onClick={() => navigate('Round4')} className={"roundBtn roundBtnDisabled"}>4회차</button><br/>
                    <button onClick={() => navigate('Round5')} className={"roundBtn roundBtnDisabled"}>5회차</button><br/>
                    <button onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave} onClick={() => navigate('Round6')} className={score >= 60 ? "roundBtn roundClear" : "roundBtn"}>6회차</button><br/>
                    <button onClick={() => navigate('Round7')} className={"roundBtn roundBtnDisabled"}>7회차</button><br/>
                    <button onClick={() => navigate('Round8')} className={"roundBtn roundBtnDisabled"}>8회차</button>
                    {hovered && (
                        <div className="info-popup" style={{top: buttonPosition.y, left: buttonPosition.x }}>
                            <p>{year}년 {month}월 {day}일 {weekday}요일</p>
                            <p>점수: {score}점</p>
                            <p>날씨: {select}</p>
                        </div>
                    )}
                    {hovered1 && (
                        <div className="info-popup" style={{top: buttonPosition.y, left: buttonPosition.x }}>
                            <p>{year1}년 {month1}월 {day1}일 {weekday1}요일</p>
                            <p>점수: {score1}점</p>
                            <p>날씨: {select1}</p>
                        </div>
                    )}
                </nav>
            ) : null}

            <Routes>
                <Route path='Round1' element={<Round1/>}/>
                <Route path='Round2' element={<Round2/>}/>
                <Route path='Round3' element={<Round3/>}/>
                <Route path='Round4' element={<Round4/>}/>
                <Route path='Round5' element={<Round5/>}/>
                <Route path='Round6' element={<Round6/>}/>
                <Route path='Round7' element={<Round7/>}/>
                <Route path='Round8' element={<Round8/>}/>
            </Routes>
        </div>
    )
}