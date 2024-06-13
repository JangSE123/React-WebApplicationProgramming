import React from 'react'
import './Stage4.css'
import { FaArrowRight } from "react-icons/fa";

export default function Stage4(props) {
  const { inputs, handleChange } = props;

  return (
    <div>
      <h2>
          앞서 기억해 둔&nbsp;
          <span id="subjectTitle">{props.subject.title}</span>입니다.<br />
          틀린 부분을 찾아 알맞게 고쳐보세요.(1~6)
      </h2>
      <div>
        <ol>
          <li id='wrongOption1'>자주 사용하는 가전제품의 플러그를 뽑는다.</li>
          <FaArrowRight /><input type='text' id='quiz3_1' name='quiz3' value={inputs.quiz3_1} onChange={handleChange}/><br/><br/>
          <li id='wrongOption2'>30이상 사용하지 않는 형광등은 꺼둔다.</li>
          <FaArrowRight /><input type='text' id='quiz3_2' name='quiz3' value={inputs.quiz3_2} onChange={handleChange}/><br/><br/>
          <li id='wrongOption3'>형광등보다 일반 백열구를 사용한다.</li>
          <FaArrowRight /><input type='text' id='quiz3_3' name='quiz3' value={inputs.quiz3_3} onChange={handleChange}/><br/><br/>
          <li id='wrongOption4'>냉장고는 바람이 잘 통하지 않는 곳에 둔다.</li>
          <FaArrowRight /><input type='text' id='quiz3_4' name='quiz3' value={inputs.quiz3_4} onChange={handleChange}/><br/><br/>
          <li id='wrongOption5'>탈수는 15분 이내가 적당하다.</li>
          <FaArrowRight /><input type='text' id='quiz3_5' name='quiz3' value={inputs.quiz3_5} onChange={handleChange}/><br/><br/>
          <li id='wrongOption6'>여름에는 18도, 겨울에는 26~30도의 실내 적정 온도를 유지한다.</li>
          <FaArrowRight /><input type='text' id='quiz3_6' name='quiz3' value={inputs.quiz3_6} onChange={handleChange}/><br/><br/>
        </ol>

      </div>
    </div>
  )
}
