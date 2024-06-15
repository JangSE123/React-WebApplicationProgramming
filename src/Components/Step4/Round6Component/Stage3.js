import React from 'react';
import flowerItems from "./FlowerItems";
import './Stage3.css'
import RememberFlower from "./rememberFlower";
import {GoTriangleRight} from "react-icons/go";

function Stage3() {
    function sortArr(arr) {
        arr.sort(() => Math.random() - 0.5);
    }
    const flagArr = [0,1,2,3,4,5];

    sortArr(flagArr)

    return (
        <>
            <h2 className={"title Direction"}>
                <GoTriangleRight /> 앞서 기억해 둔 <span className={'red'}>꽃</span>의 꽃말입니다. 소리 내어 읽어보세요.
            </h2>
            <table id={"stage3_t1"}>
                <tr>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[0]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[0]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[0]].meaning}</td>
                            </tr>
                        </table>

                    </td>
                    <td></td>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[1]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[1]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[1]].meaning}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><p className={"spacer"}></p></td>
                </tr>
                <tr>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[2]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[2]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[2]].meaning}</td>
                            </tr>
                        </table>
                    </td>
                    <td></td>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[3]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[3]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[3]].meaning}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td><p className={"spacer"}></p></td>
                </tr>
                <tr>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[4]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[4]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[4]].meaning}</td>
                            </tr>
                        </table>
                    </td>
                    <td></td>
                    <td>
                        <table className={"portrait-table"}>
                            <tr>
                                <td rowSpan={2}>
                                    <img src={flowerItems[flagArr[5]].img}/>
                                </td>
                                <td className={"bold"}>이름</td>
                                <td className={"string"}>{flowerItems[flagArr[5]].type}</td>
                            </tr>
                            <tr>
                                <td className={"bold"}>꽃말</td>
                                <td className={"string"}>{flowerItems[flagArr[5]].meaning}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <h3 className={"title Direction"}>
                <GoTriangleRight /> 꽃의 꽃말을 보고 생각나는 사람이 있다면, 그 사람에게 꽃을 선물해 봅시다.
            </h3>
            <RememberFlower />
        </>
    );
}

export default Stage3;