import React from 'react'
import './Stage1.css'

export default function Stage1(props) {
  return (
    <div>
        <h2>
            다음은 일상생활에 필요한&nbsp;
            <span id="title">{props.title}</span>입니다.<br/>
            소리 내어 읽어 보세요.
        </h2>
        <div id='descContainer'>
            <table id='descTable' className={"step2_round1_stage1"}>
                <tbody>
                    <tr>
                        <td id='descTable-header' colSpan="2">{props.title}</td>
                    </tr>
                    <tr>
                        <td id="numberCell">1</td>
                        <td><span id='underText'>쓰지 않는</span> 가전제품의 플러그를 뽑는다.</td>
                    </tr>
                    <tr>
                        <td id="numberCell">2</td>
                        <td><span id='underText'>15분 이상</span> 사용하지 않는 형광등은 꺼둔다.</td>
                    </tr>
                    <tr>
                        <td id="numberCell">3</td>
                        <td>일반 <span id='underText'>백열구보다 형광등</span>을 사용한다.</td>
                    </tr>
                    <tr>
                        <td id="numberCell">4</td>
                        <td>냉장고는 <span id='underText'>통풍이 잘 되는 곳</span>에 둔다.</td>
                    </tr>
                    <tr>
                        <td id="numberCell">5</td>
                        <td>탈수는 <span id='underText'>5분 이내</span>가 적당하다.</td>
                    </tr>
                    <tr>
                        <td id="numberCell">6</td>
                        <td><span id='underText'>여름에는 26도, 겨울에는 18~20도</span>의 실내 적정 온도를 유지한다.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id='underText'>
            <br/><span id="title">{props.title}</span>을 기억해 주세요
        </div>
    </div>
  )
}
