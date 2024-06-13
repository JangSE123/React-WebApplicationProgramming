import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Round1.css';
import Stage1 from './Round1Component/Stage1';
import Stage2 from './Round1Component/Stage2';
import Stage3 from './Round1Component/Stage3';
import Stage4 from './Round1Component/Stage4';
import Round1TodayInfo1 from './Round1_TodayInfo';

export default function Round1() {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState('Stage1');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [weekday, setWeekday] = useState('월');
  const [select, setSelect] = useState('');

  const handleTodayInfoChange = (e, key) => {
    const value = e.target.value;
    if (key === 'year') setYear(value);
    if (key === 'month') setMonth(value);
    if (key === 'day') setDay(value);
    if (key === 'weekday') setWeekday(value);
    localStorage.setItem(`Step2_1_${key}`, value);
  };

  const handleWeatherClick = (type) => {
    setSelect(type);
    localStorage.setItem('selectedWeatherStep2_1', type);
  };

  const [stage2Inputs, setStage2Inputs] = useState({
    quiz1_1: '',
    quiz1_2: '',
    quiz1_3: '',
    quiz1_4: '',
    quiz1_5: '',
    quiz1_6: ''
  });

  const [stage3Inputs, setStage3Inputs] = useState({
    quiz2_1: '',
    quiz2_2: '',
    quiz2_3: '',
    quiz2_4: '',
    quiz2_5: '',
    quiz2_6: ''
  });

  const [stage4Inputs, setStage4Inputs] = useState({
    quiz3_1: '',
    quiz3_2: '',
    quiz3_3: '',
    quiz3_4: '',
    quiz3_5: '',
    quiz3_6: ''
  });

  const goToStage = (stage) => {
    setCurrentStage(stage);
  };

  const handleStage2Change = (ev) => {
    const { id, value } = ev.target;
    setStage2Inputs({ ...stage2Inputs, [id]: value });
  };

  const handleStage3Change = (ev) => {
    const { id, value } = ev.target;
    setStage3Inputs({ ...stage3Inputs, [id]: value });
  };

  const handleStage4Change = (ev) => {
    const { id, value } = ev.target;
    setStage4Inputs({ ...stage4Inputs, [id]: value });
  };

  const correctAnswersStage2 = {
    quiz1_1: '쓰지 않는',
    quiz1_2: '15분 이상',
    quiz1_3: '백열구보다 형광등',
    quiz1_4: '통풍이 잘 되는 곳',
    quiz1_5: '5분 이내',
    quiz1_6: '여름에는 26도, 겨울에는 18~20도'
  };

  const correctAnswersStage3 = {
    quiz2_1: '쓰지 않는 가전제품의 플러그를 뽑는다',
    quiz2_2: '15분 이상 사용하지 않는 형광등은 꺼둔다',
    quiz2_3: '일반 백열구보다 형광등을 사용한다',
    quiz2_4: '냉장고는 통풍이 잘 되는 곳에 둔다',
    quiz2_5: '탈수는 5분 이내가 적당하다',
    quiz2_6: '여름에는 26도, 겨울에는 18~20도의 실내 적정 온도를 유지한다'
  };

  const correctAnswersStage4 = {
    quiz3_1: '쓰지 않는 가전제품의 플러그를 뽑는다',
    quiz3_2: '15분 이상 사용하지 않는 형광등은 꺼둔다',
    quiz3_3: '일반 백열구보다 형광등을 사용한다',
    quiz3_4: '냉장고는 통풍이 잘 되는 곳에 둔다',
    quiz3_5: '탈수는 5분 이내가 적당하다',
    quiz3_6: '여름에는 26도, 겨울에는 18~20도의 실내 적정 온도를 유지한다'
  };

  const calculateScore = () => {
    let score = 1;

    Object.keys(stage2Inputs).forEach(key => {
      if (stage2Inputs[key] === correctAnswersStage2[key]) {
        score += 5.5;
      }
    });

    Object.keys(stage3Inputs).forEach(key => {
      if (stage3Inputs[key] === correctAnswersStage3[key]) {
        score += 5.5;
      }
    });

    Object.keys(stage4Inputs).forEach(key => {
      if (stage4Inputs[key] === correctAnswersStage4[key]) {
        score += 5.5;
      }
    });

    return score;
  };

  const handleSubmit = () => {
    localStorage.clear();
    const totalScore = calculateScore();
    localStorage.setItem('totalScoreStep2_1', totalScore);
    localStorage.setItem('yearStep2_1', year);
    localStorage.setItem('monthStep2_1', month);
    localStorage.setItem('dayStep2_1', day);
    localStorage.setItem('weekdayStep2_1', weekday);
    localStorage.setItem('selectedWeatherStep2_1', select);
    localStorage.setItem('submittedStep2_1', true);
    navigate('/Step2');
    window.location.reload();
  };

  const renderCurrentStage = () => {
    switch (currentStage) {
      case 'Stage1':
        return (
          <div>
            <div id='stage1'>
              <div id='weather_container'>
                <Round1TodayInfo1
                  year={year}
                  month={month}
                  day={day}
                  weekday={weekday}
                  select={select}
                  handleTodayInfoChange={handleTodayInfoChange}
                  handleWeatherClick={handleWeatherClick}
                />
              </div>
              <Stage1 subject={{ title: '전기 절약 방법' }} />
            </div>
            <button onClick={() => navigate('/Step2')} className={"roundBtn BtnBack"}>돌아가기</button><br />
            <button onClick={() => goToStage('Stage2')} className={"roundBtn"}>문제 풀기</button>
          </div>
        );

      case 'Stage2':
        return (
          <div>
            <div id='stage2'>
              <Stage2 subject={{ title: '전기 절약 방법' }} inputs={stage2Inputs} handleChange={handleStage2Change} />
            </div>
            <button onClick={() => goToStage('Stage1')} className={"roundBtn BtnBack"}>돌아가기</button><br />
            <button onClick={() => goToStage('Stage3')} className={"roundBtn"}>다음 문제 풀기</button>
          </div>
        );

      case 'Stage3':
        return (
          <div>
            <div id='stage3'>
              <Stage3 subject={{ title: '전기 절약 방법' }} inputs={stage3Inputs} handleChange={handleStage3Change} />
            </div>
            <button onClick={() => goToStage('Stage2')} className={"roundBtn BtnBack"}>돌아가기</button><br />
            <button onClick={() => goToStage('Stage4')} className={"roundBtn"}>다음 문제 풀기</button>
          </div>
        );

      case 'Stage4':
        return (
          <div>
            <div id='stage4'>
              <Stage4 subject={{ title: '전기 절약 방법' }} inputs={stage4Inputs} handleChange={handleStage4Change} />
            </div>
            <button onClick={() => goToStage('Stage3')} className={"roundBtn BtnBack"}>돌아가기</button><br />
            <button onClick={handleSubmit} className={"roundBtn roundClear"}>제출하기</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {renderCurrentStage()}
    </div>
  );
}
