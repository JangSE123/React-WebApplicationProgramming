import React, { useEffect } from 'react'
// import './Round1/Round1.css';
// import Quiz1 from './Round1/Quiz1';
import { useNavigate } from 'react-router-dom';

export default function Round1() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
        localStorage.clear();
    };
  }, []);



  return (
    <div>
      <div id='step2_1_Desc'>
        {/*<Quiz1 subject = {{title: '전기절약 방법'}} />*/}
      </div>
      <button onClick={() => navigate('/Step2')} className={"roundBtn BtnBack"}>돌아가기</button>
      <button onClick={() => navigate('/Step2/Round1')} className={"roundBtn BtnBack"}>넘어가기</button>
    </div>
  )
}
