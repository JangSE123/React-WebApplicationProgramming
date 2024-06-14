import React from 'react'
import './Stage2.css'

export default function Stage2(props) {
  return (
    <div>
      <h2>
          앞서 기억해 둔&nbsp;
          <span id="title">{props.title}</span>을<br />
          순서에 맞게 &lt;보기&gt;에서 찾아 빈 칸에 적어보세요.
      </h2>
      <div id='optiondiv'>
        <h2 id='option-header'>&lt;보기&gt;</h2>
        <div className="food-container1">
          {props.selectedFoods.map((food, index) => (
            <div key={index} className="food-item">
              <p id='foodname'>{food.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="food-container">
        {props.selectedFoods.map((food, index) => (
          <div key={index} className="food-item">
            <img src={food.image} alt={food.name} id='foodimage'/>
            <p id='foodname'><input type='text' id={`quiz5_${index + 1}`} name='quiz5'
             value={props.inputValue2[index] || ''}
             onChange={(e) => props.onInputChange(index, e.target.value)}/>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
