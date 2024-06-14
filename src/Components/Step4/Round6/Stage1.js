import React from 'react';
import flowerItems from './FlowerItems';
import './Stage1.css'
import RememberFlower from "./rememberFlower";
import { GoTriangleRight } from "react-icons/go";

export default function Stage1(props) {


    return (
        <>
        <div id={"container-s4-r6-q1"}>
            <h2 className={"title Direction"}> <GoTriangleRight /> 다음은 6가지 <span className={"red"}>꽃</span>입니다. 6가지 <span
                className={"red"}>꽃</span> 사진과 이름을 확인하며 소리내어 읽어보세요.</h2>
            <table id={"stage1_t"}>
            <tr>
                <td><img src={flowerItems[0].img} alt={flowerItems[0].alt}/></td>
                <td><img src={flowerItems[1].img} alt={flowerItems[1].alt}/></td>
                <td><img src={flowerItems[2].img} alt={flowerItems[2].alt}/></td>
            </tr>
            <tr className={"table-type-container"}>
                <td>{flowerItems[0].type}</td>
                <td>{flowerItems[1].type}</td>
                <td>{flowerItems[2].type}</td>
            </tr>
            <tr>
                <td><img src={flowerItems[3].img} alt={flowerItems[3].alt}/></td>
                <td><img src={flowerItems[4].img} alt={flowerItems[4].alt}/></td>
                <td><img src={flowerItems[5].img} alt={flowerItems[5].alt}/></td>
            </tr>
            <tr className={"table-type-container"}>
                <td>{flowerItems[3].type}</td>
                <td>{flowerItems[4].type}</td>
                <td>{flowerItems[5].type}</td>
            </tr>
        </table>
        <p className={"spacer"}></p>
            <RememberFlower />
    </div>
    </>
    );
}
