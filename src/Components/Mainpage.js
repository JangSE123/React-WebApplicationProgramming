import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css'; 

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="image-container">
        <div className="page-description"></div>
      </div>
      <div className="button-container">
        <button className="step_button" onClick={() => navigate('/Step1')}>1단계</button>
        <button className="step_button" onClick={() => navigate('/Step2')}>2단계</button>
        <button className="step_button" onClick={() => navigate('/Step3')}>3단계</button>
        <button className="step_button" onClick={() => navigate('/Step4')}>4단계</button>
      </div>
    </div>
  );
}
