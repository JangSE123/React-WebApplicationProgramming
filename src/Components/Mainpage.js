import React from 'react'
import { Link } from 'react-router-dom'

export default function Mainpage() {
  return (
    <div>
      MainPage<br/>
      <Link to={'/Step1'}>스텝1</Link><br/>
      <Link to={'/Step2'}>스텝2</Link><br/>
      <Link to={'/Step3'}>스텝3</Link><br/>
      <Link to={'/Step4'}>스텝4</Link>
    </div>
  )
}
