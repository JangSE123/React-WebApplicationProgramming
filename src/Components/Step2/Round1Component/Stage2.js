import React from 'react'
import './Stage2.css'

export default function Stage2(props) {
  const { inputs, handleChange } = props;

  return (
    <div>
      <h2>
          앞서 기억해 둔&nbsp;
          <span id="title">{props.title}</span>을<br />
          순서에 맞게 &lt;보기&gt;에서 찾아 빈 칸에 적어보세요.
      </h2>
      <div id='descContainer'>
        <table id='descTable'>
          <tr>
            <td id='descTable-header' colSpan="3">&lt;보기&gt;</td>
          </tr>
          <tr>
            <td id="numberCell">쓰지 않는</td>
            <td id="numberCell">15분 이상</td>
            <td id="numberCell">백열구보다 형광등</td>
          </tr>
          <tr>
            <td id="numberCell">통풍이 잘 되는 곳</td>
            <td id="numberCell">5분 이내</td>
            <td id="numberCell">여름에는 26도, 겨울에는 18~20도</td>
          </tr>
        </table>
      </div>
      <br/><br/>
      <div id='quizContainer'>
        <table id='quizTable'>
          <tbody>
              <tr>
                  <td id='quizTable-header' colSpan="2">{props.title}</td>
              </tr>
              <tr>
                  <td id="numberCell">1</td>
                  <td><input type='text' id='quiz1_1' name='quiz1' value={inputs.quiz1_1} onChange={handleChange}/> 가전제품의 플러그를 뽑는다.</td>
              </tr>
              <tr>
                  <td id="numberCell">2</td>
                  <td><input type='text' id='quiz1_2' name='quiz1' value={inputs.quiz1_2} onChange={handleChange}/> 사용하지 않는 형광등은 꺼둔다.</td>
              </tr>
              <tr>
                  <td id="numberCell">3</td>
                  <td>일반 <input type='text' id='quiz1_3' name='quiz1' value={inputs.quiz1_3} onChange={handleChange}/>을 사용한다.</td>
              </tr>
              <tr>
                  <td id="numberCell">4</td>
                  <td>냉장고는 <input type='text' id='quiz1_4' name='quiz1' value={inputs.quiz1_4} onChange={handleChange}/>에 둔다.</td>
              </tr>
              <tr>
                  <td id="numberCell">5</td>
                  <td>탈수는 <input type='text' id='quiz1_5' name='quiz1' value={inputs.quiz1_5} onChange={handleChange}/>가 적당하다.</td>
              </tr>
              <tr>
                  <td id="numberCell">6</td>
                  <td><input type='text' id='quiz1_6' name='quiz1' value={inputs.quiz1_6} onChange={handleChange}/>의 실내 적정 온도를 유지한다.</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
