import React from 'react';
// import Select from 'react-select';
import flowerItems from "./FlowerItems";
import { GoTriangleRight } from "react-icons/go";
import './Stage6.css'

function Stage6(props) {

    // const { inputs, handleChange } = props;


    return (
        <div>
            <h2><GoTriangleRight /> 앞서 기억해 둔 <p className={"red"}>꽃</p>과 꽃말을 연결해보세요.</h2>
            <div id={"stage6_table"}>
                <table>
                    <tbody>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[5].img} alt={flowerItems[5].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_1} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_1')} id={"quiz4_1"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[4].img} alt={flowerItems[4].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_2} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_2')}
                                    id={"quiz4_2"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[3].img} alt={flowerItems[3].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_3} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_3')}
                                    id={"quiz4_3"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[2].img} alt={flowerItems[2].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_4} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_4')}
                                    id={"quiz4_4"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[1].img} alt={flowerItems[1].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_5} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_5')}
                                    id={"quiz4_5"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={"img-td"}>
                            <img src={flowerItems[0].img} alt={flowerItems[0].name}/>
                        </td>
                        <td>
                            <select value={props.quiz4_6} onChange={(e) => props.handleQuiz4Change(e, 'quiz4_6')}
                                    id={"quiz4_6"}>
                                <optgroup label={"맞는 뜻을 골라주세요."}>
                                    <option>선택해주세요.</option>
                                    <option>사랑의 즐거움</option>
                                    <option>희망</option>
                                    <option>이루지 못할 사랑</option>
                                    <option>행복</option>
                                    <option>사랑</option>
                                    <option>다정</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Stage6;