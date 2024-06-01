import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <div>
      MainPage<br/>
      <button onClick={() => navigate('/Step1')}>스텝1</button><br/>
      <button onClick={() => navigate('/Step2')}>스텝2</button><br/>
      <button onClick={() => navigate('/Step3')}>스텝3</button><br/>
      <button onClick={() => navigate('/Step4')}>스텝4</button>
    </div>
  )
}