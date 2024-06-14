import React from 'react';
import flowerItems from './FlowerItems';
import './s4-r6-q1.css'
import RememberFlower from "./rememberFlower";

export default function S4R6Q1(props) {

    const sortArr = arr => {
        arr.sort(() => Math.random() - 0.5);
    };
    const flagArr = [0,1,2,3,4,5];

    sortArr(flagArr)
    return (
        <>
        <div id={"container-s4-r6-q1"}>
            <h2 className={"title Direction"}> ▶ 다음은 6가지 <span className={"red"}>꽃</span>입니다. 6가지 <span
                className={"red"}>꽃</span> 사진과 이름을 확인하며 소리내어 읽어보세요.</h2>
            <table id={"s4-r6-q1-Table"}>
            <tr>
                <td><img src={flowerItems[flagArr[0]].img} alt={flowerItems[flagArr[0]].alt}/></td>
                <td><img src={flowerItems[flagArr[1]].img} alt={flowerItems[flagArr[1]].alt}/></td>
                <td><img src={flowerItems[flagArr[2]].img} alt={flowerItems[flagArr[2]].alt}/></td>
            </tr>
            <tr className={"table-type-container q1"}>
                <td>{flowerItems[flagArr[0]].type}</td>
                <td>{flowerItems[flagArr[1]].type}</td>
                <td>{flowerItems[flagArr[2]].type}</td>
            </tr>
            <tr>
                <td><img src={flowerItems[flagArr[3]].img} alt={flowerItems[flagArr[3]].alt}/></td>
                <td><img src={flowerItems[flagArr[4]].img} alt={flowerItems[flagArr[4]].alt}/></td>
                <td><img src={flowerItems[flagArr[5]].img} alt={flowerItems[flagArr[5]].alt}/></td>
            </tr>
            <tr className={"table-type-container q1"}>
                <td>{flowerItems[flagArr[3]].type}</td>
                <td>{flowerItems[flagArr[4]].type}</td>
                <td>{flowerItems[flagArr[5]].type}</td>
            </tr>
        </table>
        <p className={"spacer"}></p>
            <RememberFlower />
    </div>
    </>
    );
}
