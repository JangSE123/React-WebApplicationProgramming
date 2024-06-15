import React from 'react'
import './Stage1.css'

export default function Stage1(props) {
  const uniqueFoodTypes = [...new Set(props.selectedFoods.map(food => food.type))];

  return (
    <div>
      <h2>
          다음은&nbsp;<span id="title">{props.title}</span>입니다.<br/>
          소리 내어 읽어 보세요.
      </h2>
      <div className="food-container">
        {props.selectedFoods.map((food, index) => (
          <div key={index} className="food-item">
            <img src={food.image} alt={food.name} id='foodimage'/>
            <p id='foodname'>{food.name}</p>
          </div>
        ))}
      </div>

      <br/>
      <div id='quizContainer'>
        <h3>1. 다음 식품을 기억하기 쉽게 종류를 적어보세요.</h3>
        <table id='quizTable4' className={"step4_round2_stage1"}>
          <thead>
            <tr>
              <td colSpan="2">
                <div className="food-types-container" style={{ display: 'flex' }}>
                  {uniqueFoodTypes.map((foodType, index) => (
                    <div key={index} className="food-type">
                      <p id="foodtype">{foodType}</p>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {props.selectedFoods.map((food, index) => (
              <tr key={index}>
                <td id='foodname1'>{food.name}</td>
                <td id='foodtype1'><input type='text' id={`quiz4_${index + 1}`} name='quiz4'
                 value={props.inputValue1[index] || ''}
                 onChange={(e) => props.onInputChange(index, e.target.value)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div id='underText'>
          <br/><span id="title">{props.title}</span>을 기억해 주세요
      </div>
    </div>
  )
}
