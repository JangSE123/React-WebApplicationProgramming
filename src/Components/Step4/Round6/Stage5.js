import React from 'react';
import './s4-r6-q5.css'
import krMaps from "../../../image/krMaps.svg";
import RememberFlower from "./rememberFlower";
import flowerItems from "./FlowerItems";

function S4R6Q5(props) {

    function sortArr(arr) {
        arr.sort(() => Math.random() - 0.5);
    }
    const flagArr = [0,1,2,3,4,5];

    sortArr(flagArr)

    return (
        <>
            <h2 className={"title Direction"}>
                ▶ 앞서 기억해 둔 <span className={'red'}>꽃</span> 6가지를 적어보세요.
            </h2>
            <table id={"s4-r6-q5-Table1"}>
                <tr>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                </tr>
                <tr>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                </tr>
            </table>
            <RememberFlower/>

            <table id={"s4-r6-q5-Table2"}>
                <tr>
                    <td rowSpan={6} className={"mapContainer"}>
                        <img src={krMaps} className={"Maps"} id={"krMaps"} alt={"한국 지도"}/>
                    </td>
                    <td>
                        {flowerItems[flagArr[0]].location} - <input></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[flagArr[1]].location} - <input></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[flagArr[2]].location} - <input></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[flagArr[3]].location} - <input></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[flagArr[4]].location} - <input></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[flagArr[5]].location} - <input></input>
                    </td>
                </tr>
            </table>
            <RememberFlower/>
        </>
    );
}

export default S4R6Q5;