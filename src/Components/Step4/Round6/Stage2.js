import React from 'react';
import krMaps from "../../../image/krMaps.svg";
import flowerItems from "./FlowerItems";
import './s4-r6-q2.css'
import RememberFlower from "./rememberFlower";

function S4R6Q2(props) {
    function sortArr(arr) {
        arr.sort(() => Math.random() - 0.5);
    }
    const flagArr = [0,1,2,3,4,5];

    sortArr(flagArr)
    return (
        <>
            <div id={"container-s4-r6-q2"}>
                <h2 className={"title Direction"}>
                    ▶ 앞서 기억해 둔 <span className={"red"}>꽃</span>은 각 도(道)를 상징하는 꽃입니다. 각 꽃의 지역을 확인하고, 빈칸에 꽃 이름을 적어보세요.
                </h2>
                <table id={"s4-r6-q2-Table1"}>
                    <tr className={"table-img-container"}>
                        <td>
                            <img src={flowerItems[flagArr[0]].img} alt={flowerItems[flagArr[0]].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[flagArr[1]].img} alt={flowerItems[flagArr[1]].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[flagArr[2]].img} alt={flowerItems[flagArr[2]].alt}/>
                        </td>
                    </tr>
                    <tr className={"table-type-container"}>
                        <td>
                            {flowerItems[flagArr[0]].location} - <input></input>
                        </td>
                        <td>
                            {flowerItems[flagArr[1]].location} - <input></input>
                        </td>
                        <td>
                            {flowerItems[flagArr[2]].location} - <input></input>
                        </td>
                    </tr>
                    <tr className={"table-img-container"}>
                        <td>
                            <img src={flowerItems[flagArr[3]].img} alt={flowerItems[flagArr[3]].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[flagArr[4]].img} alt={flowerItems[flagArr[4]].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[flagArr[5]].img} alt={flowerItems[flagArr[5]].alt}/>
                        </td>
                    </tr>
                    <tr className={"table-type-container"}>
                        <td>
                            {flowerItems[flagArr[3]].location} - <input></input>
                        </td>
                        <td>
                            {flowerItems[flagArr[4]].location} - <input></input>
                        </td>
                        <td>
                            {flowerItems[flagArr[5]].location} - <input></input>
                        </td>
                    </tr>
                </table>

                <p className={"spacer"}></p>

                <table id={"s4-r6-q2-Table2"}>
                    <tr>
                        <td rowSpan={6} className={"mapContainer"}>
                            <img src={krMaps} className={"Maps"} id={"krMaps"} alt={"한국 지도"}/>
                        </td>
                        <td>
                            {flowerItems[flagArr[0]].location} - <input></input>
                        </td>
                    </tr>
                    <tr><td>
                            {flowerItems[flagArr[1]].location} - <input></input>
                    </td></tr>
                    <tr><td>
                            {flowerItems[flagArr[2]].location} - <input></input>
                    </td></tr>
                    <tr><td>
                            {flowerItems[flagArr[3]].location} - <input></input>
                    </td></tr>
                    <tr><td>
                            {flowerItems[flagArr[4]].location} - <input></input>
                    </td></tr>
                    <tr><td>
                            {flowerItems[flagArr[5]].location} - <input></input>
                    </td></tr>
                </table>
                <RememberFlower />
            </div>
        </>
    );
}

export default S4R6Q2;