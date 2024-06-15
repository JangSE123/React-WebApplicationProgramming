import React from 'react';
import krMaps from "../../../image/krMaps.svg";
import flowerItems from "./FlowerItems";
import './Stage2.css'
import RememberFlower from "./rememberFlower";
import {GoTriangleRight} from "react-icons/go";

function Stage2(props) {

    const { inputs, handleChange } = props;

    return (
        <>
            <div>
                <h2 className={"title Direction"}>
                    <GoTriangleRight /> 앞서 기억해 둔 <span className={"red"}>꽃</span>은 각 도(道)를 상징하는 꽃입니다.
                    <br/>&emsp;각 꽃의 지역을 확인하고, 빈칸에 꽃 이름을 적어보세요.
                </h2>

                <table id={"stage2_t1"}>
                    <tr className={"table-img-container"}>
                        <td>
                            <img src={flowerItems[0].img} alt={flowerItems[0].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[1].img} alt={flowerItems[1].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[2].img} alt={flowerItems[2].alt}/>
                        </td>
                    </tr>
                    <tr className={"table-type-container"}>
                        <td>
                            {flowerItems[0].location} - <input type='text' id='quiz1_1' name='quiz1'
                                                               value={inputs.quiz1_1} onChange={handleChange}/>
                        </td>
                        <td>
                            {flowerItems[1].location} - <input type='text' id='quiz1_2' name='quiz1'
                                                               value={inputs.quiz1_2} onChange={handleChange}/>
                        </td>
                        <td>
                            {flowerItems[2].location} - <input type='text' id='quiz1_3' name='quiz1'
                                                               value={inputs.quiz1_3} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr className={"table-img-container"}>
                        <td>
                            <img src={flowerItems[3].img} alt={flowerItems[3].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[4].img} alt={flowerItems[4].alt}/>
                        </td>
                        <td>
                            <img src={flowerItems[5].img} alt={flowerItems[5].alt}/>
                        </td>
                    </tr>
                    <tr className={"table-type-container"}>
                        <td>
                            {flowerItems[3].location} - <input type='text' id='quiz1_4' name='quiz1'
                                                               value={inputs.quiz1_4} onChange={handleChange}/>
                        </td>
                        <td>
                            {flowerItems[4].location} - <input type='text' id='quiz1_5' name='quiz1'
                                                               value={inputs.quiz1_5} onChange={handleChange}/>
                        </td>
                        <td>
                            {flowerItems[5].location} - <input type='text' id='quiz1_6' name='quiz1'
                                                               value={inputs.quiz1_6} onChange={handleChange}/>
                        </td>
                    </tr>
                </table>

                <p className={"spacer"}></p>

                <table id={"stage2_t2"}>
                    <tr>
                        <td rowSpan={6} className={"mapContainer"}>
                            <img src={krMaps} className={"Maps"} id={"krMaps"} alt={"한국 지도"}/>
                        </td>
                        <td>
                            {flowerItems[0].location} - <input type='text' id='quiz1_1' name='quiz1'
                                                               value={inputs.quiz1_1} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {flowerItems[1].location} - <input type='text' id='quiz1_2' name='quiz1'
                                                               value={inputs.quiz1_2} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {flowerItems[2].location} - <input type='text' id='quiz1_3' name='quiz1'
                                                               value={inputs.quiz1_3} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {flowerItems[3].location} - <input type='text' id='quiz1_4' name='quiz1'
                                                               value={inputs.quiz1_4} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {flowerItems[4].location} - <input type='text' id='quiz1_5' name='quiz1'
                                                               value={inputs.quiz1_5} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {flowerItems[5].location} - <input type='text' id='quiz1_6' name='quiz1'
                                                               value={inputs.quiz1_6} onChange={handleChange}/>
                        </td>
                    </tr>
                </table>
                <RememberFlower/>
            </div>
        </>
    );
}

export default Stage2;