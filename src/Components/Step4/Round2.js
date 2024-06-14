import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Round2.css';
import Stage1 from '../Step4/Round2Component/Stage1';
import Stage2 from '../Step4/Round2Component/Stage2';
import Stage3 from '../Step4/Round2Component/Stage3';
import Round2TodayInfo from './Round2Component/Round2_TodayInfo';
import grain1 from '../../image/grain1.jpeg'
import grain2 from '../../image/grain2.png'
import vegetable1 from '../../image/vegetable1.jpg'
import vegetable2 from '../../image/vegetable2.jpg'
import fruit1 from '../../image/fruit1.jpg'
import fruit2 from '../../image/fruit2.jpeg'
import seaweed1 from '../../image/seaweed1.jpg'
import seaweed2 from '../../image/seaweed2.jpg'
import tea1 from '../../image/tea1.jpg'
import tea2 from '../../image/tea2.jpeg'

const constipationFoods = [
  { name: '팥', image: grain1, type: '곡물' },
  { name: '현미', image: grain2, type: '곡물' },
  { name: '양배추', image: vegetable1, type: '야채' },
  { name: '오이', image: vegetable2, type: '야채' },
  { name: '자두', image: fruit1, type: '과일' },
  { name: '키위', image: fruit2, type: '과일' },
  { name: '다시마', image: seaweed1, type: '해조류' },
  { name: '김', image: seaweed2, type: '해조류' },
  { name: '삼백초차', image: tea1, type: '차' },
  { name: '동규자차', image: tea2, type: '차' }
];

export default function Round2() {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState('Stage1');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [inputValue1, setInputValue1] = useState([]);
  const [inputValue2, setInputValue2] = useState([]);
  const [selectedImages, setSelectedImages] = useState([false, false, false, false, false, false]);

  const [year1, setYear1] = useState('');
  const [month1, setMonth1] = useState('');
  const [day1, setDay1] = useState('');
  const [weekday1, setWeekday1] = useState('월');
  const [select1, setSelect1] = useState('');

  const handleTodayInfoChange = (e, key) => {
    const value = e.target.value;
    if (key === 'year') setYear1(value);
    if (key === 'month') setMonth1(value);
    if (key === 'day') setDay1(value);
    if (key === 'weekday') setWeekday1(value);
    localStorage.setItem(`Step4_2_${key}`, value);
  };

  const handleWeatherClick = (type) => {
    setSelect1(type);
    localStorage.setItem('selectedWeatherStep4_2', type);
  };

  const goToStage = (stage) => {
    setCurrentStage(stage);
  };

  const handleSubmit = () => {
    // localStorage.clear();
    const totalScore1 = calculateScore1();
    localStorage.setItem('totalScoreStep4_2', totalScore1);
    localStorage.setItem('yearStep4_2', year1);
    localStorage.setItem('monthStep4_2', month1);
    localStorage.setItem('dayStep4_2', day1);
    localStorage.setItem('weekdayStep4_2', weekday1);
    localStorage.setItem('selectedWeatherStep4_2', select1);
    localStorage.setItem('submittedStep4_2', true);
    navigate('/Step4');
    window.location.reload();
  };

  const handleInputChange1 = (index, value) => {
    const newInputValue1 = [...inputValue1];
    newInputValue1[index] = value;
    setInputValue1(newInputValue1);
  };

  const handleInputChange2 = (index, value) => {
    const newInputValue2 = [...inputValue2];
    newInputValue2[index] = value;
    setInputValue2(newInputValue2);
  }

  const handleImageClick = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];
    setSelectedImages(newSelectedImages);
  };

  const calculateScore1 = () => {
    let score = 1;
    selectedFoods.forEach((food, index) => {
      if (inputValue1[index] && inputValue1[index].toLowerCase() === food.type.toLowerCase()) {
        score += 5.5;
      }
      if (inputValue2[index] && inputValue2[index].toLowerCase() === food.name.toLowerCase()) {
        score += 5.5;
      }
    });

    [1, 3, 5].forEach(index => {
      if (selectedImages[index]) {
        score += 11;
      }
    });

    [0, 2, 4].forEach(index => {
      if (selectedImages[index]) {
        score -= 5.5;
      }
    });
    return score;
  };

  useEffect(() => {
    const selected = constipationFoods.sort(() => 0.5 - Math.random()).slice(0, 6);
    setSelectedFoods(selected);
  }, []);

  const renderCurrentStage = () => {
    switch (currentStage) {
      case 'Stage1':
        return (
          <div>
            <div id='stage1'>
              <div id='weather_container'>
                <Round2TodayInfo
                  year={year1}
                  month={month1}
                  day={day1}
                  weekday={weekday1}
                  select={select1}
                  handleTodayInfoChange={handleTodayInfoChange}
                  handleWeatherClick={handleWeatherClick}
                />
              </div>
              <Stage1 title={'변비에 좋은 식품'} selectedFoods={selectedFoods} inputValue1={inputValue1} onInputChange={handleInputChange1} />
            </div>
            <div id='button_container'>
              <button onClick={() => navigate('/Step4')} className={"roundBtn BtnBack"}>돌아가기</button><br />
              <button onClick={() => goToStage('Stage2')} className={"roundBtn"}>다음 문제 풀기</button>
            </div>
          </div>
        );
        
      case 'Stage2':
        return (
          <div>
            <div id='stage2'>
              <Stage2 title={'변비에 좋은 식품'} selectedFoods={selectedFoods} inputValue2={inputValue2} onInputChange={handleInputChange2}/>
            </div>
            <div id='button_container'>
              <button onClick={() => goToStage('Stage1')} className={"roundBtn BtnBack"}>돌아가기</button><br />
              <button onClick={() => goToStage('Stage3')} className={"roundBtn"}>다음 문제 풀기</button>
            </div>
          </div>
        );

      case 'Stage3':
        return (
          <div>
            <div id='stage3'>
              <Stage3 title={'변비에 좋은 식품'} selectedFoods={selectedFoods} selectedValues={selectedImages} handleImageClick={handleImageClick}/>
            </div>
            <div id='button_container'>
              <button onClick={() => goToStage('Stage2')} className={"roundBtn BtnBack"}>돌아가기</button><br />
              <button onClick={handleSubmit} className={"roundBtn roundClear"}>제출하기</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      {renderCurrentStage()}
    </div>
  )
}