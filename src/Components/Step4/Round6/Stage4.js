import React from 'react';
import './s4-r6-q4.css'
import krMetro from '../../../image/krmetro.png'

function S4R6Q4(props) {

    const stationArr = [
        {
            from: '선릉',
            to: ''

        }
    ]
    return (
        <div id={"s4-r6-q4"}>
            <h2 className={"title Direction"}>
                ▶ 경수 씨는 지하철 꽃 배달을 하고 있습니다. 지하철 노선도를 보고 아래의 문제를 풀어보세요(1~2)
            </h2>
            <img src={krMetro} alt="서울 지하철" className={"metro-image"}/>
            <h2 className={"title Direction"}>
                1. 선릉역에서 물건을 받아 2호선을 타고 사당역에 가려고 합니다. 선릉역에서 사당역까지 가는 경로와 소요시간을 적어보세요. (각 역마다 소요시간은 2분입니다.)
            </h2>

            <h2 className={"title Direction"}>
                2. 3호선 양재역에서 종착역까지 가장 빠르게 갈 수 있는 경로와 환승역과 도착시간을 적어보세요. (각 역마다 소요시간은 2분이고, 환승소모시간은 5분입니다.)
            </h2>
        </div>
    );
}

export default S4R6Q4;