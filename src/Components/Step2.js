import React, {useEffect} from 'react'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Round1 from './Step2/Round1'
import Round2 from './Step2/Round2'
import Round3 from './Step2/Round3'
import Round4 from './Step2/Round4'
import Round5 from './Step2/Round5'
import Round6 from './Step2/Round6'
import Round7 from './Step2/Round7'
import Round8 from './Step2/Round8'

export default function Step2() {
  const location = useLocation();
  const isRoot = location.pathname === '/Step2';
  const navigate = useNavigate();

    useEffect(() => {
        document.title = "노인 인지 문제 // 2단계"
        return() =>{
            document.title = "노인 인지 문제"
        }    }, []);

return (
  <div>
      {isRoot ? (
          <nav>
              <button onClick={() => navigate('/')} className={"roundBtn BtnBack"}>이전 페이지</button><br/>
              <button onClick={() => navigate('Round1')} className={"roundBtn roundClear"}>1회차</button><br/>
              <button onClick={() => navigate('Round2')} className={"roundBtn roundBtnDisabled"}>2회차</button><br/>
              <button onClick={() => navigate('Round3')} className={"roundBtn"}>3회차</button><br/>
              <button onClick={() => navigate('Round4')} className={"roundBtn"}>4회차</button><br/>
              <button onClick={() => navigate('Round5')} className={"roundBtn"}>5회차</button><br/>
              <button onClick={() => navigate('Round6')} className={"roundBtn"}>6회차</button><br/>
              <button onClick={() => navigate('Round7')} className={"roundBtn"}>7회차</button><br/>
              <button onClick={() => navigate('Round8')} className={"roundBtn"}>8회차</button>
          </nav>
      ) : null}

      <Routes>
          <Route path='Round1' element={<Round1/>}/>
          <Route path='Round2' element={<Round2/>}/>
          <Route path='Round3' element={<Round3/>}/>
          <Route path='Round4' element={<Round4/>}/>
          <Route path='Round5' element={<Round5/>}/>
          <Route path='Round6' element={<Round6/>}/>
          <Route path='Round7' element={<Round7/>}/>
          <Route path='Round8' element={<Round8/>}/>
      </Routes>
  </div>
)
}
