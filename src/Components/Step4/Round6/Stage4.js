import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import './Stage4.css'
import krMetro from '../../../image/krmetro.png'
import { GoTriangleRight } from "react-icons/go";

function Stage4(props) {
    const { inputs, handleChange } = props;


    return (
        <div>
            <h2 className={"title Direction"}>
                <GoTriangleRight /> 경수 씨는 지하철 꽃 배달을 하고 있습니다. <br/>
                &emsp; &nbsp;지하철 노선도를 보고 아래의 문제를 풀어보세요(1~2)
            </h2>
            <div className={"center"}><img src={krMetro} alt="서울 지하철" className={"metro-image"}/></div>
            <h3 className={"title Direction"}>
                1. 압구정역에서 물건을 받아 3호선을 타고 양재역에 가려고 합니다.
                <br/>&emsp;&nbsp;압구정 양재역까지 가는 경로와 소요시간을 적어보세요. (각 역마다 소요시간은 2분입니다.)
            </h3>
            <div id={"stage4_1"}>
                압구정 <FaArrowRight/>&nbsp;<input type='text' id='quiz2_1' name='quiz2' value={inputs.quiz2_1}
                                                onChange={handleChange}/>&nbsp;
                <FaArrowRight/>&nbsp;<input type='text' id='quiz2_2' name='quiz2' value={inputs.quiz2_2}
                                            onChange={handleChange}/>&nbsp;
                <FaArrowRight/>&nbsp;<input type='text' id='quiz2_3' name='quiz2' value={inputs.quiz2_3}
                                            onChange={handleChange}/>&nbsp;
                <FaArrowRight/>&nbsp;<input type='text' id='quiz2_4' name='quiz2' value={inputs.quiz2_4}
                                            onChange={handleChange}/>&nbsp;
                <FaArrowRight/>&nbsp;<input type='text' id='quiz2_5' name='quiz2' value={inputs.quiz2_5}
                                            onChange={handleChange}/>&nbsp;
                <FaArrowRight/>&nbsp;<input type='text' id='quiz2_6' name='quiz2' value={inputs.quiz2_6}
                                            onChange={handleChange}/>&nbsp;
                <p/>
                소요시간 : <input type='text' id='quiz2_7' name='quiz2' value={inputs.quiz2_7} onChange={handleChange}/> 분
            </div>


            <h3 className={"title Direction"}>
                2. 2호선 서초역에서 압구정역까지 가장 빠르게 갈 수 있는 경로와 환승역과 도착시간을 적어보세요.
                <br/>&emsp;&nbsp;(각 역마다 소요시간은 2분이고, 환승소모시간은 5분입니다.)
            </h3>
            <div id={"stage4_2"}>
                서초 <FaArrowRight/> <input type='text'
                                          id='quiz2_8'
                                          name='quiz3'
                                          value={inputs.quiz2_8}
                                          onChange={handleChange}
                                          placeholder={"역 간 구분은 띄워쓰기 없는 쉼표(,)로 구분합니다. 예) 동작,구반포,신반포"}/>
                <br/><br/>
                환승역 (다른 노선으로 바꾸어 탈 수 있도록 마련된 역) : <input type='text' id='quiz2_9' name='quiz2' value={inputs.quiz2_9}
                                                         onChange={handleChange}/>역
                <br/><br/>
                소요시간 : <input type='text' id='quiz2_10' name='quiz2' value={inputs.quiz2_10}
                              onChange={handleChange}/> 분
            </div>

</div>
    );
}

export default Stage4;