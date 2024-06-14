import React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa";

function RememberFlower(props) {
    return (
        <h2> <FaRegCalendarCheck /> <u><span style={{color: "red", textDecoration: "underline", textDecorationColor: "black"}}>꽃</span>을 기억해주세요.</u></h2>
    );
}

export default RememberFlower;