import React from 'react'
import { Routes, Route } from "react-router-dom";
import Mainpage from './Components/Mainpage';
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'
import Step4 from './Components/Step4'
import Tobbar from './Components/Tobbar';
import Footer from './Components/Footer';
import './App.css'

export default function APP() {
  return (
    <div id = "wrap">
      <Tobbar />
      <div id='container'>
        <Routes>
            <Route path = '/' element = {<Mainpage />}  />
            <Route path = '/Step1/*' element = {<Step1 />}  />
            <Route path = '/Step2/*' element = {<Step2 />}  />
            <Route path = '/Step3/*' element = {<Step3 />}  />
            <Route path = '/Step4/*' element = {<Step4 />}  />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}