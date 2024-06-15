import React from 'react';
import './Stage5.css'
import krMaps from "../../../image/krMaps.svg";
import RememberFlower from "./rememberFlower";
import flowerItems from "./FlowerItems";
import {GoTriangleRight} from "react-icons/go";

function Stage5(props) {
    const { inputs1, inputs2, handleChange1, handleChange2 } = props;

    return (
        <>
            <h2 className={"title Direction"}>
                <GoTriangleRight /> 앞서 기억해 둔 <span className={'red'}>꽃</span> 6가지를 적어보세요.
            </h2>
            <table id={"stage5_t1"}>
                <tr>
                    <td><input type='text' id='quiz3_1' name='quiz3' value={inputs1.quiz3_1}
                               onChange={handleChange1}/></td>
                    <td><input type='text' id='quiz3_2' name='quiz3' value={inputs1.quiz3_2}
                               onChange={handleChange1}/></td>
                    <td><input type='text' id='quiz3_3' name='quiz3' value={inputs1.quiz3_3}
                               onChange={handleChange1}/></td>
                </tr>
                <tr>
                    <td><input type='text' id='quiz3_4' name='quiz3' value={inputs1.quiz3_4}
                               onChange={handleChange1}/></td>
                    <td><input type='text' id='quiz3_5' name='quiz3' value={inputs1.quiz3_5}
                               onChange={handleChange1}/></td>
                    <td><input type='text' id='quiz3_6' name='quiz3' value={inputs1.quiz3_6}
                               onChange={handleChange1}/></td>
                </tr>
            </table>
            <RememberFlower/>

            <table id={"stage5_t2"}>
                <tr>
                    <td rowSpan={6} className={"mapContainer"}>
                        <img src={krMaps} className={"Maps"} id={"krMaps"} alt={"한국 지도"}/>
                    </td>
                    <td>
                        {flowerItems[0].location} - <input type='text' id='quiz3_7' name='quiz3' value={inputs2.quiz3_7}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[1].location} - <input type='text' id='quiz3_8' name='quiz3' value={inputs2.quiz3_8}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[2].location} - <input type='text' id='quiz3_9' name='quiz3' value={inputs2.quiz3_9}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[3].location} - <input type='text' id='quiz3_10' name='quiz3' value={inputs2.quiz3_10}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[4].location} - <input type='text' id='quiz3_11' name='quiz3'
                                                           value={inputs2.quiz3_11}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {flowerItems[5].location} - <input type='text' id='quiz3_12' name='quiz3'
                                                           value={inputs2.quiz3_12}
                                                           onChange={handleChange2}/>
                    </td>
                </tr>
            </table>
            <RememberFlower/>
        </>
    );
}

export default Stage5;