import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Round6TodayInfo1 from "./Round6_TodayInfo1";
import flowerItems from "./Round6/FlowerItems";
import Stage1 from "./Round6/Stage1";
import Stage2 from "./Round6/Stage2";
import Stage3 from "./Round6/Stage3";
import Stage4 from "./Round6/Stage4";
import Stage5 from "./Round6/Stage5";
import Stage6 from "./Round6/Stage6";
import './Round6.css'

const { sortByASC } = require("hangul-util");

export default function Round6() {

    const navigate = useNavigate();
    const [currentStage, setCurrentStage] = useState('Stage1');

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [weekday, setWeekday] = useState('월');
    const [select, setSelect] = useState('');

    const [quiz4_1, setQuiz4_1] = useState('')
    const [quiz4_2, setQuiz4_2] = useState('')
    const [quiz4_3, setQuiz4_3] = useState('')
    const [quiz4_4, setQuiz4_4] = useState('')
    const [quiz4_5, setQuiz4_5] = useState('')
    const [quiz4_6, setQuiz4_6] = useState('')

    const handleTodayInfoChange = (e, key) => {
        const value = e.target.value;
        if (key === 'year') setYear(value);
        if (key === 'month') setMonth(value);
        if (key === 'day') setDay(value);
        if (key === 'weekday') setWeekday(value);
        localStorage.setItem(`Step4_6_${key}`, value);
    };

    const handleQuiz4Change = (e, key) => {
        const value = e.target.value;
        if (key === 'quiz4_1') setQuiz4_1(value);
        if (key === 'quiz4_2') setQuiz4_2(value);
        if (key === 'quiz4_3') setQuiz4_3(value);
        if (key === 'quiz4_4') setQuiz4_4(value);
        if (key === 'quiz4_5') setQuiz4_5(value);
        if (key === 'quiz4_6') setQuiz4_6(value);
        setStage6Inputs({...stage6Inputs, [key]: value})
    }

    const handleWeatherClick = (type) => {
        setSelect(type);
        localStorage.setItem('selectedWeatherStep4_6', type);
    };

    const [stage2Inputs, setStage2Inputs] = useState({
        quiz1_1: '',
        quiz1_2: '',
        quiz1_3: '',
        quiz1_4: '',
        quiz1_5: '',
        quiz1_6: ''
    });

    const [stage4Inputs, setStage4Inputs] = useState({
        quiz2_1: '',
        quiz2_2: '',
        quiz2_3: '',
        quiz2_4: '',
        quiz2_5: '',
        quiz2_6: '',
        quiz2_7: '',
        quiz2_8: '',
        quiz2_9: '',
    });

    const [stage5Inputs1, setStage5Inputs1] = useState({
        quiz3_1: '',
        quiz3_2: '',
        quiz3_3: '',
        quiz3_4: '',
        quiz3_5: '',
        quiz3_6: '',
    })

    const [stage5Inputs2, setStage5Inputs2] = useState({
        quiz3_7: '',
        quiz3_8: '',
        quiz3_9: '',
        quiz3_10: '',
        quiz3_11: '',
        quiz3_12: '',
    })

    const [stage6Inputs, setStage6Inputs] = useState({
        quiz4_1: '',
        quiz4_2: '',
        quiz4_3: '',
        quiz4_4: '',
        quiz4_5: '',
        quiz4_6: '',
    });

    const goToStage = (stage) => {
        setCurrentStage(stage);
    };

    const handleStage2Change = (ev) => {
        const { id, value } = ev.target;
        setStage2Inputs({ ...stage2Inputs, [id]: value });
    };

    const handleStage4Change = (ev) => {
        const { id, value } = ev.target;
        setStage4Inputs({ ...stage4Inputs, [id]: value });
    };

    const handleStage5Change1 = (ev) => {
        const { id, value } = ev.target;
        setStage5Inputs1({...stage5Inputs1, [id] : value})
    }

    const handleStage5Change2 = (ev) => {
        const { id, value } = ev.target;
        setStage5Inputs2({ ...stage5Inputs2, [id] : value });
    }

    // const handleStage6Change = (ev) => {
    //     const { id, value } = ev.target.value;
    //     setStage6Inputs({ ...stage6Inputs, [id]: value });
    // };

    const correctAnswersStage2 = {
        quiz1_1: '철쭉',
        quiz1_2: '개나리',
        quiz1_3: '백목련',
        quiz1_4: '백일홍',
        quiz1_5: '장미',
        quiz1_6: '참꽃',
    };

    const correctAnswersStage4 = {
        quiz2_1: '신사',
        quiz2_2: '잠원',
        quiz2_3: '고속터미널',
        quiz2_4: '교대',
        quiz2_5: '남부터미널',
        quiz2_6: '양재',
        quiz2_7: '12',
        quiz2_8: '교대,고속터미널,잠원,신사,압구정,교대',
        quiz2_9: '교대',
        quiz2_10: '13'
    };

    const correctAnswersStage5_1 = {
        quiz3_1: '개나리',
        quiz3_2: '백목련',
        quiz3_3: '백일홍',
        quiz3_4: '장미',
        quiz3_5: '참꽃',
        quiz3_6: '철쭉',
    }

    const correctAnswersStage5_2 = {
        quiz3_7: '철쭉',
        quiz3_8: '개나리',
        quiz3_9: '백목련',
        quiz3_10: '백일홍',
        quiz3_11: '장미',
        quiz3_12: '참꽃',
    }

    const correctAnswersStage6 = {
        quiz4_1: '다정',
        quiz4_2: '사랑',
        quiz4_3: '행복',
        quiz4_4: '이루지 못할 사랑',
        quiz4_5: '희망',
        quiz4_6: '사랑의 즐거움'
    };


    const calculateScore = () => {
        let score = 1.4;

        Object.keys(stage2Inputs).forEach(key => {
            if (stage2Inputs[key] === correctAnswersStage2[key]) {
                score += 2.9;
            }
        });

        Object.keys(stage4Inputs).forEach(key => {
            if (stage4Inputs[key] === correctAnswersStage4[key]) {
                score += 2.9;
            }
        });

        const hangulArr = []

        Object.keys(stage5Inputs1).forEach(key => {
            hangulArr.push(stage5Inputs1[key]);
        })

        sortByASC(hangulArr)
        console.log(hangulArr)
        console.log(correctAnswersStage5_1)

        Object.keys(stage5Inputs1).forEach((key, idx) => {
            if (hangulArr[idx] === correctAnswersStage5_1[key]){
                score += 2.9;
            }
        })

        Object.keys(stage5Inputs2).forEach(key => {
            if (stage5Inputs2[key] === correctAnswersStage5_2[key]){
                score += 2.9;
            }
        })

        Object.keys(stage6Inputs).forEach(key => {
            if (stage6Inputs[key] === correctAnswersStage6[key]){
                score += 2.9;
            }
        })

        return Math.floor(score);
    };

    const handleSubmit = () => {
        localStorage.clear();
        const totalScore = calculateScore();
        localStorage.setItem('totalScoreStep4_6', totalScore);
        localStorage.setItem('yearStep4_6', year);
        localStorage.setItem('monthStep4_6', month);
        localStorage.setItem('dayStep4_6', day);
        localStorage.setItem('weekdayStep4_6', weekday);
        localStorage.setItem('selectedWeatherStep4_6', select);
        localStorage.setItem('submittedStep4_6', true);
        navigate('/Step4');
        // window.location.reload();
    };


    const renderCurrentStage = () => {
        switch (currentStage){
            case 'Stage1':
                return (
                    <div className={"container"}>
                        <div id={'stage1'}>
                            <div id={'weather_container'}>
                                <Round6TodayInfo1
                                    year={year}
                                    month={month}
                                    day={day}
                                    weekday={weekday}
                                    select={select}
                                    handleTodayInfoChange={handleTodayInfoChange}
                                    handleWeatherClick={handleWeatherClick}
                                />
                            </div>
                            <Stage1 subject={{title: '꽃에 숨겨진 이야기'}} />
                        </div>
                        <div className={"center"}>
                            <button onClick={() => navigate('/Step4')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                            <button onClick={() => goToStage('Stage2')} className={"roundBtn"}>문제 풀기</button>
                        </div>
                    </div>
            )
            case 'Stage2' :
                return (
                    <div>
                        <div id={'stage2'}>
                            <Stage2 subject={{title: '꽃에 숨겨진 이야기'}} inputs={stage2Inputs} handleChange={handleStage2Change} />
                        </div>
                        <button onClick={() => goToStage('Stage1')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                        <button onClick={() => goToStage('Stage3')} className={"roundBtn"}>문제 풀기</button>
                    </div>
                );
            case 'Stage3' :
                return (
                    <div>
                        <div id={'stage3'}>
                            <Stage3 subject={{title: '꽃에 숨겨진 이야기'}} />
                        </div>
                        <button onClick={() => goToStage('Stage2')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                        <button onClick={() => goToStage('Stage4')} className={"roundBtn"}>문제 풀기</button>
                    </div>
                );
            case 'Stage4' :
                return (
                    <div>
                        <div id={'stage4'}>
                            <Stage4 subject={{title: '지하철 노선도'}} inputs={stage4Inputs} handleChange={handleStage4Change} />
                        </div>
                        <button onClick={() => goToStage('Stage3')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                        <button onClick={() => goToStage('Stage5')} className={"roundBtn"}>문제 풀기</button>
                    </div>
                )
            case 'Stage5' :
                return (
                    <div>
                        <div id={'stage5'}>
                            <Stage5 subject={{title: '꽃에 숨겨진 이야기'}}
                                    inputs1={stage5Inputs1}
                                    inputs2={stage5Inputs2}
                                    handleChange1={handleStage5Change1}
                                    handleChange2={handleStage5Change2}
                            />
                        </div>
                        <button onClick={() => goToStage('Stage4')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                        <button onClick={() => goToStage('Stage6')} className={"roundBtn"}>문제 풀기</button>
                    </div>
                )
            case 'Stage6' :
                return (
                    <div>
                        <div id={'stage6'}>
                            <Stage6 subject={{title: '꽃에 숨겨진 이야기'}}
                                    handleQuiz4Change={handleQuiz4Change}
                                    quiz3_1={quiz4_1}
                                    quiz3_2={quiz4_2}
                                    quiz3_3={quiz4_3}
                                    quiz3_4={quiz4_4}
                                    quiz3_5={quiz4_5}
                                    quiz3_6={quiz4_6}
                            />
                        </div>
                        <button onClick={() => goToStage('Stage5')} className={"roundBtn BtnBack"}>돌아가기</button><br/>
                        <button onClick={handleSubmit} className={"roundBtn roundClear"}>제출하기</button>
                    </div>
                )
            default:
                return null;
        }
    }

    return (
        <div>
            {renderCurrentStage()}
        </div>
    );
}
