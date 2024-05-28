import React from 'react'
import { Link, Route, Routes, useLocation} from 'react-router-dom'
import Round1 from './Step1/Round1'
import Round2 from './Step1/Round2'
import Round3 from './Step1/Round3'
import Round4 from './Step1/Round4'
import Round5 from './Step1/Round5'
import Round6 from './Step1/Round6'
import Round7 from './Step1/Round7'
import Round8 from './Step1/Round8'

export default function Step1() {
    const location = useLocation();
    const isRoot = location.pathname === '/Step1';

  return (
    <div>
        {isRoot ? (
            <nav>
                <Link to="/">이전 페이지</Link><br/>
                <Link to="Round1">1회차</Link><br/>
                <Link to="Round2">2회차</Link><br/>
                <Link to="Round3">3회차</Link><br/>
                <Link to="Round4">4회차</Link><br/>
                <Link to="Round5">5회차</Link><br/>
                <Link to="Round6">6회차</Link><br/>
                <Link to="Round7">7회차</Link><br/>
                <Link to="Round8">8회차</Link>
            </nav>
        ) : (
            <Link to="/Step1">돌아가기</Link>
        )}
        
        <Routes>
            <Route path='Round1' element = {<Round1 />} />
            <Route path='Round2' element = {<Round2 />} />
            <Route path='Round3' element = {<Round3 />} />
            <Route path='Round4' element = {<Round4 />} />
            <Route path='Round5' element = {<Round5 />} />
            <Route path='Round6' element = {<Round6 />} />
            <Route path='Round7' element = {<Round7 />} />
            <Route path='Round8' element = {<Round8 />} />
        </Routes>
    </div>
  )
}
