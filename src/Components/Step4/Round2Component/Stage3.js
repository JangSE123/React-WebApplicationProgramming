import React from 'react'
import './Stage3.css'
import nogood1 from '../../../image/nogood1.jpg'
import nogood2 from '../../../image/nogood2.jpg'
import nogood3 from '../../../image/nogood3.jpg'

export default function Stage3(props) {

  return (
    <div>
      <h2>
          앞서 기억해 둔&nbsp;<span id="title">{props.title}</span>을 선택하세요.
      </h2>
      <div>
        <div className="food-container2">
          {props.selectedFoods.map((food, index) => (
            <div key={index} className="food-item">
              {index === 0 && <img src={nogood1} alt={food.name} id='quiz6_1' className={`quiz6 ${props.selectedValues[0] ? 'selected' : ''}`} onClick={() => props.handleImageClick(0)} value={props.selectedValues[0]}/>}
              {index === 1 && <img src={food.image} alt={food.name} id='quiz6_2' className={`quiz6 ${props.selectedValues[1] ? 'selected' : ''}`} onClick={() => props.handleImageClick(1)} value={props.selectedValues[1]}/>}
              {index === 2 && <img src={nogood2} alt={food.name} id='quiz6_3' className={`quiz6 ${props.selectedValues[2] ? 'selected' : ''}`} onClick={() => props.handleImageClick(2)} value={props.selectedValues[2]}/>}
              {index === 3 && <img src={food.image} alt={food.name} id='quiz6_4' className={`quiz6 ${props.selectedValues[3] ? 'selected' : ''}`} onClick={() => props.handleImageClick(3)} value={props.selectedValues[3]}/>}
              {index === 4 && <img src={nogood3} alt={food.name} id='quiz6_5' className={`quiz6 ${props.selectedValues[4] ? 'selected' : ''}`} onClick={() => props.handleImageClick(4)} value={props.selectedValues[4]}/>}
              {index === 5 && <img src={food.image} alt={food.name} id='quiz6_6' className={`quiz6 ${props.selectedValues[5] ? 'selected' : ''}`} onClick={() => props.handleImageClick(5)} value={props.selectedValues[5]}/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
