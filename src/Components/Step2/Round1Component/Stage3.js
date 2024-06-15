import React from 'react'
import './Stage3.css'
import image1 from '../../../image/Step2_Round1_1.png'
import image2 from '../../../image/Step2_Round1_2.png'
import image3 from '../../../image/Step2_Round1_3.png'
import image4 from '../../../image/Step2_Round1_4.png'
import image5 from '../../../image/Step2_Round1_5.png'

export default function Stage3(props) {
  const { inputs, handleChange } = props;

  return (
    <div>
      <h2>
          앞서 기억해 둔&nbsp;
          <span id="title">{props.title}</span>을<br />
          그림을 보고 순서에 알맞게 적어 적어보세요.
      </h2>
      <div id='quizContainer'>
        <table id='quizTable' className={"step2_round1_stage3"}>
          <tbody>
              <tr>
                  <td id='quizTable-header' colSpan="2">{props.title}</td>
              </tr>
              <tr>
                  <td><img src={image1} id='img_Step1_Round1' alt='image1'/></td>
                  <td>1.<input type='text' id='quiz2_1' name='quiz2' value={inputs.quiz2_1} onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td rowSpan="2"><img src={image2} id='img_Step1_Round1' alt='image2'/></td>
                  <td>2.<input type='text' id='quiz2_2' name='quiz2' value={inputs.quiz2_2} onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td>3.<input type='text' id='quiz2_3' name='quiz2' value={inputs.quiz2_3} onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td><img src={image3} id='img_Step1_Round1' alt='image3'/></td>
                  <td>4.<input type='text' id='quiz2_4' name='quiz2' value={inputs.quiz2_4} onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td><img src={image4} id='img_Step1_Round1' alt='image4'/></td>
                  <td>5.<input type='text' id='quiz2_5' name='quiz2' value={inputs.quiz2_5} onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td><img src={image5} id='img_Step1_Round1' alt='image5'/></td>
                  <td>6.<input type='text' id='quiz2_6' name='quiz2' value={inputs.quiz2_6} onChange={handleChange}/></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
